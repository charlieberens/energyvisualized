import React, { Component } from "react";
import axios from "axios";
import styles from "../styles/components/Chart.module.scss";
import * as d3 from "d3";

export default class MultiLineChart extends Component {
    constructor(props) {
        super(props);

        this.chart = React.createRef();
        this.state = { key: [] };
    }

    initGraph = async () => {
        const colors = this.props.colors
            ? this.props.colors
            : [
                  "#E5E96C",
                  "#F2564A",
                  "#B34A9C",
                  "#136EC8",
                  "#2CBB2A",
                  "#E6C0FC",
              ];

        const width = this.props.chartWidth
            ? parseFloat(this.props.chartWidth)
            : 300;
        const height = this.props.chartHeight
            ? parseFloat(this.props.chartHeight)
            : 300;

        const margin = { top: 10, right: 65, bottom: 50, left: 65 };

        const json = (await axios.get(`api/data/${this.props.dataset}`)).data;
        const data = json.data;

        const svg = d3
            .select(this.chart.current)
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.bottom + margin.top)
            .append("g")
            .attr(
                "transform",
                "translate(" + margin.left + "," + margin.top + ")"
            );

        const x = d3
            .scaleLinear()
            .domain([
                d3.min(data.map((point) => point.x)),
                d3.max(data.map((point) => point.x)),
            ])
            .range([0, width]);

        svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(
                d3
                    .axisBottom(x)
                    .ticks(this.props.ticks ? parseInt(this.props.ticks) : 4)
                    .tickFormat(d3.format("d"))
            );

        const y = d3
            .scaleLinear()
            .domain([
                isNaN(this.props.min)
                    ? d3.min(data.map((group) => d3.min(group.ys))) * 1.25
                    : this.props.min,
                isNaN(this.props.max)
                    ? d3.max(data.map((group) => d3.max(group.ys))) * 1.25
                    : this.props.max,
            ])
            .range([height, 0]);
        svg.append("g").call(d3.axisLeft(y));

        for (let i = 0; i < json.meta.ys.length; i++) {
            svg.append("path")
                .datum(data)
                .attr("fill", "none")
                .attr(
                    "d",
                    d3
                        .line()
                        .x((d) => x(d.x))
                        .y((d) => y(d.ys[i]))
                )
                .classed(styles.lineChartLine, true)
                .attr("stroke", colors[i]);
            if (!this.props.nocircle) {
                svg.append("g")
                    .selectAll("dot")
                    .data(data)
                    .enter()
                    .append("circle")
                    .classed(styles.lineChartDot, true)
                    .attr("cx", function (d) {
                        return x(d.x);
                    })
                    .attr("cy", function (d) {
                        return y(d.ys[i]);
                    });
            }
        }

        //Axis Labels
        svg.append("text")
            .classed(`${styles.x} ${styles.label}`, true)
            .attr("text-anchor", "end")
            .attr("x", width / 2 + margin.left / 2)
            .attr("y", height + 50)
            .text(json.meta.x);

        svg.append("text")
            .classed(`${styles.y} ${styles.label}`, true)
            .attr("transform", "rotate(-90)")
            .attr("y", -50)
            .attr("x", -(height / 2))
            .style("text-anchor", "middle")
            .text(json.meta.y);

        this.setState({
            key: json.meta.ys.map((y, i) => ({
                text: y,
                color: colors[i],
            })),
        });
    };

    componentDidMount() {
        this.initGraph();
    }
    render() {
        return (
            <>
                <svg ref={this.chart} className={styles.multiLineChart}></svg>
                <div className={`${styles.multiLineKey} ${styles.key}`}>
                    {this.state.key.map((keyEl) => (
                        <div key={keyEl.text} className={styles.keyEl}>
                            <div
                                className={styles.keyBox}
                                style={{ background: keyEl.color }}
                            ></div>
                            <span className={styles.keyText}>{keyEl.text}</span>
                        </div>
                    ))}
                </div>
            </>
        );
    }
}

import React, { Component } from "react";
import axios from "axios";
import styles from "../styles/components/Chart.module.scss";
import * as d3 from "d3";

export default class LineChart extends Component {
    constructor(props) {
        super(props);

        this.chart = React.createRef();
    }

    initGraph = async () => {
        const width = this.props.chartWidth
            ? parseFloat(this.props.chartWidth)
            : 300;
        const height = this.props.chartHeight
            ? parseFloat(this.props.chartHeight)
            : 300;

        const margin = { top: 0, right: 65, bottom: 50, left: 65 };

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
            .call(d3.axisBottom(x).ticks(4));

        const y = d3
            .scaleLinear()
            .domain([
                isNaN(this.props.min)
                    ? d3.min(data.map((point) => point.y))
                    : this.props.min,
                isNaN(this.props.max)
                    ? d3.max(data.map((point) => point.y)) * 1.25
                    : this.props.max,
            ])
            .range([height, 0]);
        svg.append("g").call(d3.axisLeft(y));

        svg.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr(
                "d",
                d3
                    .line()
                    .x((d) => x(d.x))
                    .y((d) => y(d.y))
            )
            .classed(styles.lineChartLine, true);
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
                    return y(d.y);
                });
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
    };

    componentDidMount() {
        this.initGraph();
    }
    render() {
        return <svg ref={this.chart} className={this.styles.lineChart}></svg>;
    }
}

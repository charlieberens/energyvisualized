import React, { Component } from "react";
import axios from "axios";
import styles from "../styles/components/Chart.module.scss";
import * as d3 from "d3";

export default class BarChart extends Component {
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

        const margin = { top: 15, right: 65, bottom: 100, left: 65 };

        const json = (await axios.get(`api/data/${this.props.dataset}`)).data;
        let data = json.data.sort((a, b) => b.y - a.y);

        const svg = d3
            .select(this.chart.current)
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.bottom + margin.top)
            .append("g")
            .attr(
                "transform",
                "translate(" + margin.left + "," + margin.top + ")"
            );

        // X axis
        const x = d3
            .scaleBand()
            .range([0, width])
            .domain(data.map((d) => d.x))
            .padding(0.2);

        svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x))
            .selectAll("text")
            .attr("transform", "translate(-10,0)rotate(-45)")
            .style("text-anchor", "end");

        // Y axis
        const y = d3
            .scaleLinear()
            .domain([
                isNaN(this.props.min)
                    ? d3.min(data.map((d) => d.y))
                    : this.props.min,
                isNaN(this.props.max)
                    ? d3.max(data.map((d) => d.y)) * 1.25
                    : this.props.max,
            ])
            .range([height, 0]);
        svg.append("g").call(d3.axisLeft(y));

        // Create Bars
        svg.selectAll("bar")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", (d) => x(d.x))
            .attr("y", (d) => y(d.y))
            .attr("width", x.bandwidth())
            .attr("height", (d) => height - y(d.y))
            .classed(styles.bar, true)
            .attr("fill", this.props.color ? this.props.color : "#296fb4");

        //Axis Labels
        svg.append("text")
            .classed(`${styles.x} ${styles.label}`, true)
            .attr("text-anchor", "end")
            .attr("x", width / 2 + margin.left / 2)
            .attr("y", height + 75)
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
        return <svg ref={this.chart}></svg>;
    }
}

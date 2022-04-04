import React, { Component } from "react";
import styles from "../styles/components/Chart.module.scss";
import axios from "axios";

export class Chart extends Component {
    constructor(props) {
        super(props);
    }

    getData = async () => {
        let data = (await axios.get(`api/data/${this.props.dataset}`)).data;
        this.data = data;
        this.forceUpdate();
    };

    componentDidMount() {
        this.getData();
    }

    render() {
        return (
            <div className={styles.chart}>
                <h3 className={styles.chartTitle}>{this.data?.meta.title}</h3>
                <div className={styles.chartInner}>{this.props.children}</div>
                <div className={styles.source}>
                    <span>
                        Source:{" "}
                        <a
                            href={this.data?.meta.source.url}
                            target="_blank"
                            title={this.data?.meta.source.text}
                            rel="noopener noreferrer"
                        >
                            {this.data?.meta.source.text}
                        </a>
                    </span>
                </div>
            </div>
        );
    }
}

export default Chart;

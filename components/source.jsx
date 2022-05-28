import React, { Component } from "react";
import styles from "../styles/components/Source.module.scss";

export class Source extends Component {
    render() {
        return (
            <a
                href={this.props.arr[this.props.index]}
                target="_blank"
                className={styles.inlineSource}
            >
                [{this.props.index + 1}]
            </a>
        );
    }
}

export default Source;

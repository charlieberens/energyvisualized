import React, { Component } from "react";
import styles from "../styles/components/Source.module.scss";

export class SourceList extends Component {
    render() {
        return (
            <div className={styles.sourceList}>
                {this.props.arr.map((link, i) => (
                    <div className={styles.sourceListItem}>
                        <a
                            href={link}
                            target="_blank"
                            rel="noreferrer"
                            key={i}
                            className={styles.sourceListLink}
                        >
                            [{i + 1}] {link}
                        </a>
                    </div>
                ))}
            </div>
        );
    }
}

export default SourceList;

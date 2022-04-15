import React, { Component } from "react";
import styles from "../styles/components/Footer.module.scss";

export default class Footer extends Component {
    render() {
        return (
            <footer className={styles.footer}>
                <span className={styles.plug}>
                    <span>Made by </span>
                    <a href="https://berenswebdev.org">Charlie Berens</a>
                </span>
                <span className={styles.copy}>
                    {/* &copy; Charlie Berens {new Date().getFullYear()} */}
                </span>
            </footer>
        );
    }
}

import Image from "next/image";
import styles from "../styles/Waiting.module.scss";

import React, { Component } from "react";

import Head from "next/head";
import Footer from "../components/footer.jsx";

export default class Home extends Component {
    render() {
        return (
            <div>
                <Head>
                    <title>Energy Visualized</title>
                    <meta
                        name="description"
                        content="Examining the world's energy situation with beautiful data and clear analysis."
                    />
                    <link rel="icon" href="/favicon-32x32.png" />
                </Head>
                <div className={styles.cont}>
                    <div className={styles.main}>
                        <div className={styles.subdiv}>
                            <h1>Energy Visualized</h1>
                            <p>
                                Examining the world's energy situation with
                                beautiful data and clear analysis.
                            </p>
                        </div>
                        <p className={styles.dropDate}>
                            The first topic, nuclear energy, will drop on April
                            22, 2022.
                        </p>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

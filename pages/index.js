import Image from "next/image";
import styles from "../styles/Home.module.scss";

import React, { Component } from "react";
import { IoIosNuclear } from "react-icons/io";
import { GiWindTurbine } from "react-icons/gi";
import { AiFillFire } from "react-icons/ai";

import Head from "next/head";
import Footer from "../components/footer.jsx";
import Nuclear from "../components/nuclear.jsx";

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            group: 1,
        };
    }

    render() {
        return (
            <div>
                <Head>
                    <title>Create Next App</title>
                    <meta
                        name="description"
                        content="Generated by create next app"
                    />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <main className={styles.main}>
                    <header className={styles.header}>
                        <div>
                            <h1>Energy Visualized</h1>
                            <p>
                                Exploring electricity using beautiful, rigorous
                                data.
                            </p>
                        </div>
                    </header>
                    <div className={styles.groups}>
                        <a className={styles.group} title="Coming Soon">
                            <GiWindTurbine />
                        </a>
                        <a
                            className={`${styles.group} ${styles.selected}`}
                            title="Nuclear"
                        >
                            <IoIosNuclear />
                        </a>
                        <a className={styles.group} title="Coming Soon">
                            <AiFillFire />
                        </a>
                    </div>
                    <section className={styles.section}>
                        <Nuclear />
                    </section>
                </main>

                <Footer />
            </div>
        );
    }
}

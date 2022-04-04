import React, { Component } from "react";
import LineChart from "../components/lineChart.jsx";
import BarChart from "../components/barChart.jsx";
import Chart from "../components/chart.jsx";
import styles from "../styles/components/Topic.module.scss";
import MultiLineChart from "./multiLineChart.jsx";

export class Nuclear extends Component {
    constructor(props) {
        super(props);

        this.state = {
            subgroup: 0,
        };

        this.subgroups = ["Introduction", "Safety", "Waste", "Cost"];
    }

    render() {
        return (
            <div>
                <div className={styles.subgroups}>
                    {this.subgroups.map((subgroup, index) => (
                        <a
                            className={`${styles.subgroupSelector} ${
                                this.state.subgroup === index && styles.selected
                            }`}
                            key={index}
                            onClick={() => this.setState({ subgroup: index })}
                        >
                            {subgroup}
                        </a>
                    ))}
                </div>
                <div className={styles.subgroupCont}>
                    {this.state.subgroup === 0 && (
                        <div className={styles.subgroup}>
                            <h2>Nuclear Energy</h2>
                            <p>
                                It’s common to hear Nuclear Energy presented as
                                a binary good or evil. Nuclear is either a
                                dangerous, polluting technology that should be
                                outlawed or the cheap, easy answer to climate
                                change. Neither of these realities are accurate.
                            </p>
                            <p>
                                Sunt fugiat cillum nulla ut Lorem duis proident
                                in consequat ipsum qui aliquip. Irure velit
                                irure do amet deserunt sint est cillum labore
                                amet.
                            </p>
                            <p>
                                But, before we examine the risks and merits of
                                Nuclear energy, we should establish its place in
                                society today.{" "}
                            </p>
                            <p></p>
                            <div className={styles.chartContainer}>
                                <Chart dataset="nuclear&energy_production_by_source">
                                    <MultiLineChart
                                        dataset="nuclear&energy_production_by_source"
                                        min="0"
                                        nocircle={true}
                                        ticks={16}
                                        chartWidth="700"
                                        colors={[
                                            "#7b8387",
                                            "#ded159",
                                            "#ae5de3",
                                            "#49d147",
                                            "#abf285",
                                        ]}
                                    />
                                </Chart>
                            </div>
                            <div className={styles.chartContainer}>
                                <Chart dataset="nuclear&usage_2020">
                                    <BarChart
                                        dataset="nuclear&usage_2020"
                                        min="0"
                                        max="100"
                                        chartWidth="500"
                                        color="#49d147"
                                    />
                                </Chart>
                            </div>
                        </div>
                    )}
                    {this.state.subgroup === 1 && (
                        <div className={styles.subgroup}>
                            <h2>Nuclear Safety</h2>
                            <p>
                                Lorem do mollit occaecat dolore ullamco irure
                                reprehenderit ullamco eu amet aliquip. Consequat
                                irure irure sit tempor tempor anim. Mollit esse
                                laborum sit id commodo id Lorem.
                            </p>
                            <p>
                                Sunt fugiat cillum nulla ut Lorem duis proident
                                in consequat ipsum qui aliquip. Irure velit
                                irure do amet deserunt sint est cillum labore
                                amet.
                            </p>
                            <p>
                                Mollit sunt dolore sit mollit ullamco nisi
                                fugiat nisi laboris officia veniam deserunt.
                                Nulla aliqua dolore cillum aliquip mollit quis
                                pariatur labore est qui Lorem. Reprehenderit
                                laborum sint nisi amet eiusmod cupidatat
                                cupidatat culpa tempor tempor esse.
                            </p>
                            <p>
                                Ullamco sit commodo ut laborum cillum veniam
                                adipisicing labore eiusmod.
                            </p>
                        </div>
                    )}
                    {this.state.subgroup === 2 && (
                        <div className={styles.subgroup}>
                            <h2>Nuclear Waste</h2>
                            <p>
                                Ullamco sit commodo ut laborum cillum veniam
                                adipisicing labore eiusmod.
                            </p>
                            <p>
                                Sunt fugiat cillum nulla ut Lorem duis proident
                                in consequat ipsum qui aliquip. Irure velit
                                irure do amet deserunt sint est cillum labore
                                amet.
                            </p>
                            <p>
                                Mollit sunt dolore sit mollit ullamco nisi
                                fugiat nisi laboris officia veniam deserunt.
                                Nulla aliqua dolore cillum aliquip mollit quis
                                pariatur labore est qui Lorem. Reprehenderit
                                laborum sint nisi amet eiusmod cupidatat
                                cupidatat culpa tempor tempor esse.
                            </p>
                        </div>
                    )}
                    {this.state.subgroup === 3 && (
                        <div>
                            <div className={styles.subgroup}>
                                <h2>Nuclear Economics</h2>
                                <p>
                                    Proident enim qui elit minim laborum
                                    reprehenderit est dolore veniam veniam et
                                    enim in ut. Duis dolor est ea ad non
                                    deserunt ut enim et. Laborum id consequat
                                    duis sit cupidatat ex cillum occaecat est
                                    mollit do magna tempor qui.
                                </p>
                                <p>
                                    Sunt fugiat cillum nulla ut Lorem duis
                                    proident in consequat ipsum qui aliquip.
                                    Irure velit irure do amet deserunt sint est
                                    cillum labore amet.
                                </p>
                                <p>
                                    Ullamco sit commodo ut laborum cillum veniam
                                    adipisicing labore eiusmod.
                                </p>
                                <p>
                                    Mollit sunt dolore sit mollit ullamco nisi
                                    fugiat nisi laboris officia veniam deserunt.
                                    Nulla aliqua dolore cillum aliquip mollit
                                    quis pariatur labore est qui Lorem.
                                    Reprehenderit laborum sint nisi amet eiusmod
                                    cupidatat cupidatat culpa tempor tempor
                                    esse.
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default Nuclear;

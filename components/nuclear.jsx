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
                                a binary good or evil. It&aposs either a
                                dangerous, polluting technology that should be
                                outlawed or the cheap, easy answer to climate
                                change. Neither of these beliefs is reality.
                            </p>
                            <p>
                                It’s common to hear Nuclear Energy presented as
                                a binary good or evil. It&aposs either a
                                dangerous, polluting technology that should be
                                outlawed or the cheap, easy answer to climate
                                change. Neither of these beliefs is reality.
                                Throughout this module, I hope to communicate a
                                broader, more nuanced view of the virtues and
                                vices of nuclear energy.
                            </p>
                            <p>
                                They only have value when viewed in context, so
                                first, this module will establish nuclear’s
                                place in society today.
                            </p>
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
                                            "#abf285",
                                            "#49d147",
                                        ]}
                                    />
                                </Chart>
                            </div>
                            <p>
                                Since the opening of America&aposs first reactor
                                in 1958, nuclear has remained a minor player in
                                the US energy market. Its share of energy
                                consumption has remained mostly stable. When the
                                US began to shut down coal power plants in the
                                early 2000s, Nuclear’s share of energy
                                consumption remained constant unlike renewables,
                                which saw a slight increase, and other fossil
                                fuels which saw a significant increase.
                            </p>
                            <p>
                                Around 2010, renewables’ share surpassed that of
                                Nuclear. However, this includes hydroelectric
                                power. The US consumes about half as much solar
                                and wind as Nuclear as of 2021 (USEIA).
                            </p>
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
                            <p>
                                Nuclear’s role in the US is similar to that in
                                much of the developed world. In seven of the
                                eight most populous countries, nuclear’s share
                                of energy consumption is equal to or less than
                                that of the US. Some countries, notably China,
                                have plans to drastically increase their
                                reliance on nuclear energy. While others, like
                                Germany, are phasing Nuclear reactors out.
                            </p>
                            <p>
                                France is the clear outlier. It is the only
                                major country that obtains a majority of its
                                energy from nuclear energy. In 2014, the French
                                government announced it would cap its nuclear
                                share to 50% by 2025, but this has been pushed
                                back to 2035. Despite this, France will remain
                                the leader in Nuclear energy.
                            </p>
                            {/* <hr></hr> */}
                            <p>
                                Currently, Nuclear plays a minor role in the
                                world energy market. In many countries, like the
                                US, it is beaten by fossil fuels. Some
                                countries, like China, are increasing their
                                reliance on the source. While other&aposs, like
                                Germany, are trying to phase it out.
                            </p>
                        </div>
                    )}
                    {this.state.subgroup === 1 && (
                        <div className={styles.subgroup}>
                            <h2>Nuclear Safety</h2>
                            <p>
                                It’s common to hear Nuclear Energy presented as
                                a binary good or evil. It&aposs either a
                                dangerous, polluting technology that should be
                                outlawed or the cheap, easy answer to climate
                                change. Neither of these beliefs is reality.
                            </p>
                            <p>
                                It’s common to hear Nuclear Energy presented as
                                a binary good or evil. It&aposs either a
                                dangerous, polluting technology that should be
                                outlawed or the cheap, easy answer to climate
                                change. Neither of these beliefs is reality.
                                Throughout this module, I hope to communicate a
                                broader, more nuanced view of the virtues and
                                vices of nuclear energy. But these only have
                                value when viewed in context, so first, this
                                module will establish nuclear’s place in society
                                today.
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

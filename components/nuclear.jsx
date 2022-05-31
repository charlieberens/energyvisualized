import React, { Component } from "react";
import LineChart from "../components/lineChart.jsx";
import BarChart from "../components/barChart.jsx";
import Chart from "../components/chart.jsx";
import Source from "../components/source.jsx";
import SourceList from "../components/sourceList.jsx";
import styles from "../styles/components/Topic.module.scss";
import MultiLineChart from "./multiLineChart.jsx";

export class Nuclear extends Component {
    constructor(props) {
        super(props);

        this.state = {
            subgroup: 0,
        };

        this.subgroups = ["Introduction", "Safety", "Cost"];
        this.sources = [
            [],
            [
                "https://www.youtube.com/watch?v=hIGtTImeYU4&t=103s",
                "https://www.youtube.com/watch?v=bCbms6umE_o&t=9s",
                "https://www.youtube.com/watch?v=lOqFr87Xh-g",
                "https://world-nuclear.org/information-library/country-profiles/countries-g-n/germany.aspx",
            ],
            ["https://www.youtube.com/watch?v=cbeJIwF1pVY"],
        ];
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
                                a binary good or evil. It&apos;s either a
                                dangerous, polluting technology that should be
                                outlawed or the cheap, easy answer to climate
                                change. Neither of these beliefs is reality.
                            </p>
                            <p>
                                It’s common to hear Nuclear Energy presented as
                                a binary good or evil. It&apos;s either a
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
                                Since the opening of America&apos;s first
                                reactor in 1958, nuclear has remained a minor
                                player in the US energy market. Its share of
                                energy consumption has remained mostly stable.
                                When the US began to shut down coal power plants
                                in the early 2000s, Nuclear’s share of energy
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
                                reliance on the source. While others, like
                                Germany, are trying to phase it out.
                            </p>
                        </div>
                    )}
                    {this.state.subgroup === 1 && (
                        <div className={styles.subgroup}>
                            <h2>Nuclear Safety</h2>
                            <p>
                                When people think of nuclear energy, they often
                                imagine disasters like Chornobyl and Fukushima.
                                The word "danger" seems inexorably tied to
                                Nuclear. But should it be?
                            </p>
                            <p>
                                The graph below compares the deaths per KWh from
                                a variety of energy sources.
                            </p>
                            <div className={styles.chartContainer}>
                                <Chart dataset="nuclear&safety_all">
                                    <BarChart
                                        dataset="nuclear&safety_all"
                                        min="0"
                                        chartWidth="500"
                                        color="#49d147"
                                    />
                                </Chart>
                            </div>
                            <p>
                                Nuclear-related deaths per TWh are miniscule
                                compared to those of fossil fuels. To give some
                                sense of scale, below is a graph with the
                                greatest killers elliminated. And below that, a
                                graph with all fossil fuels elliminated.
                            </p>
                            <div className={styles.chartContainer}>
                                <Chart dataset="nuclear&safety_partial">
                                    <BarChart
                                        dataset="nuclear&safety_partial"
                                        min="0"
                                        chartWidth="500"
                                        color="#49d147"
                                    />
                                </Chart>
                            </div>
                            <div className={styles.chartContainer}>
                                <Chart dataset="nuclear&safety_green">
                                    <BarChart
                                        dataset="nuclear&safety_green"
                                        min="0"
                                        chartWidth="500"
                                        color="#49d147"
                                    />
                                </Chart>
                            </div>
                            <p>
                                It’s clear that the danger of nuclear is more
                                myth than reality. Nuclear is barely more
                                dangerous than wind, hydroelectric, and solar;
                                energy sources that no one considers dangerous.
                                So why is Nuclear’s safety image so negative?
                            </p>
                            <p>
                                I attribute this to a few factors. Deaths caused
                                by nuclear energy are concentrated. Individual
                                incidents, like Chornobyl and Fukushima, are
                                televised and well known. While, the slow,
                                individual deaths from worsening air quality
                                remain hidden.
                            </p>
                            <p>
                                Nuclear energy is also intertwined with the
                                image of nuclear weapons. At Hiroshima and
                                Nagasaki, we all saw the destructive power of
                                radioactive elements. During the Cold War, much
                                of the world was ever aware of the risk of a
                                Russian or American attack. When people think of
                                nuclear, they don’t just think of clean energy,
                                they think of warheads as well.
                            </p>
                            <p>
                                The two nuclear energy incidents that have
                                caused deaths, Chornobyl and Fukushima, are
                                unlikely to repeat. They were caused by poor
                                design and poor decision-making. Sources{" "}
                                <Source arr={this.sources[1]} index={0} /> and{" "}
                                <Source arr={this.sources[1]} index={1} />{" "}
                                explain the Chernobyl accident in depth. Source{" "}
                                <Source arr={this.sources[1]} index={2} />{" "}
                                explains Fukushima in depth.
                            </p>
                            <p>
                                A caveat must be noted. It is impossible to
                                directly measure the deaths caused by nuclear
                                incidents, as most happen in after the fact in
                                the form of increased cancer risk. Because of
                                this, estimates of death tolls vary
                                significantly.
                            </p>
                            <p>
                                But, in the end, it doesn’t matter. Even if
                                death estimates are off by an order of
                                magnitude, Nuclear would still be much safer
                                than current fossil fuel sources. Replacing
                                fossil fuels with nuclear saves lives.
                            </p>
                            <p>
                                Though anti-nuclear activists come from a good
                                place, they can be damaging. Largely due to the
                                public’s safety concerns, Germany has massively
                                decreased their dependence on Nuclear energy. To
                                fill the void, they have started using more
                                fossil fuels{" "}
                                <Source arr={this.sources[1]} index={3} />,
                                likely causing more deaths instead of preventing
                                them.
                            </p>
                            <p>
                                Safety is clearly not nuclear’s biggest problem.
                            </p>
                            <SourceList arr={this.sources[1]} />
                        </div>
                    )}
                    {this.state.subgroup === 2 && (
                        <div className={styles.subgroup}>
                            <h2>Nuclear Waste</h2>
                            <p>
                                Societal pressure and government intervention
                                are important factors affecting energy use. But,
                                far more important are economics. To transition
                                from fossil fuels, we must adopt clean sources
                                that are cost-effective.
                            </p>
                            <p>
                                Below are the Levelized Costs (LCOEs) of
                                different energy sources. LCOE is a metric that
                                communicates the total cost of electricity per
                                unit of energy, considering upfront costs, fuel
                                costs, waste costs, etc.
                            </p>
                            <div className={styles.chartContainer}>
                                <Chart dataset="nuclear&lcoe">
                                    <BarChart
                                        dataset="nuclear&lcoe"
                                        min="0"
                                        chartWidth="500"
                                        color="#49d147"
                                    />
                                </Chart>
                            </div>
                            <p>
                                On the surface, Nuclear energy seems like a
                                great option economically. New nuclear plants
                                are cheaper than new gas plants (generally the
                                cheapest fossil fuel), and refurbishing existing
                                nuclear plants is cheaper than all other sources
                                of energy.
                            </p>
                            <p>
                                If this is true, then why are nuclear plants
                                (like the Diablo Canyon plant in California)
                                being shutdown? Why is natural gas still being
                                built?
                            </p>
                            <p>
                                The reality is more complicated. Sources have
                                different costs in different locations depending
                                on fuel avaliability and weather conditions.
                            </p>
                            <p>
                                Furthermore, the upfront cost of Nuclear is far
                                higher than its competitors.
                            </p>
                            <div className={styles.chartContainer}>
                                <Chart dataset="nuclear&capital">
                                    <BarChart
                                        dataset="nuclear&capital"
                                        min="0"
                                        chartWidth="500"
                                        color="#49d147"
                                    />
                                </Chart>
                            </div>
                            <p>
                                Nuclear plants also take much longer to build,
                                and thus take much longer to become profitable.
                            </p>
                            <p>
                                Because of the cost efficiency of nuclear fuel,
                                Nuclear can become cheaper than its competitors
                                in the long run. But, its route to profitability
                                is far longer, and thus Nuclear investments are
                                riskier.
                            </p>
                            <p>
                                In countries where the opinion on nuclear is
                                negative and anti-nuclear laws could be passed,
                                the risk is clear. If you were an energy
                                executive, you might consider avoiding nuclear
                                as well.
                            </p>
                            <p>
                                The Illinois Energy Professor has a{" "}
                                <a
                                    href="https://www.youtube.com/watch?v=cbeJIwF1pVY"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className={styles.inlineLink}
                                >
                                    great video on this topic
                                </a>
                            </p>
                            <SourceList arr={this.sources[2]} />
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default Nuclear;

import React from "react";
import styles from "./Hero.module.scss"

export default class About extends React.Component {
    render () {
        return (
            <section id="about">
                <div className={`container ${styles["hero"]}`}>
                    <div className={styles["hero-wrapper"]}>
                        <h1 className={styles["title"]}>
                            <span className={styles["title-sections"]}>Hi, I'm Cosmin.</span>
                            <span className={styles["title-sections"]}>I love to build amazing apps.</span>
                        </h1>
                        <p className={styles["description"]}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                            laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
                            Laborum, voluptas natus?
                        </p>
                        <div className={styles["button-wrapper"]}>
                            <a href="#contact"
                                className="primary-button">
                                Work With Me
                            </a>
                            <a href="#projects"
                                className="secondary-button">
                                See My Past Work
                            </a>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img className="object-cover object-center rounded" alt="hero" src="./coding.svg" />
                    </div>
                </div>
            </section>
        );
    }
}
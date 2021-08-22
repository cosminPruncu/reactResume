import React from "react";
import styles from "./Hero.module.scss"

export default class About extends React.Component {
    render () {
        return (
            <section id="about">
                <div className={`container ${styles["hero"]}`}>
                    <div className="row">
                        <div className="col-md-8 col-12">
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
                                    <a href="#contact" className={`${styles["button-spacing"]} button primary`}>
                                        <span>See my projects</span>
                                    </a>
                                    <a href="#projects" className="button secondary">
                                        <span>Past Work Experience</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-12">
                            <div className={styles["image-wrapper"]}>
                                <img className={styles["image"]} alt="hero" src="./coding.svg" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
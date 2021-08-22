import React from "react";
import { work } from "../../data";
import styles from "./Work.module.scss"


export default class Work extends React.Component {
    render () {
        return (
            <section id="work" className={`container ${styles["work"]}`}>
                <div className="row">
                    <div className="col-12">
                        <div className={styles["description-wrapper"]}>
                            <i className={`fas fa-user-edit fa-3x ${styles["people-icon"]}`}></i>
                            <h1 className={styles["title"]}>
                                My Past Work Experience
                            </h1>
                        </div>
                        <div className={styles["work-wrapper"]}>
                            {work.map((work) => (
                            <div className={styles["work"]}>
                                <div className={styles["work-description-wrapper"]}>
                                    <i className={`fas fa-terminal ${styles["terminal-icon"]}`}></i>
                                    <p className={styles["description"]}>{work.quote}</p>
                                    <div className={styles["image-wrapper"]}>
                                        <img alt="testimonial" src={work.image} className={styles["image"]} />
                                        <span className={styles["person-wrapper"]}>
                                            <span className={styles["name"]}>
                                                {work.name}
                                            </span>
                                            <span className={styles["company"]}>
                                                {work.company}
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
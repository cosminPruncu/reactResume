import React from "react";
import { skills } from "../../data";
import styles from "./Skills.module.scss"

// import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";

export default class Skills extends React.Component {
    render () {
        return (
            <section id="skills" className={`container ${styles["skills"]}`}>
                <div className="row">
                    <div className="col-12">
                        <div className={styles["description-wrapper"]}>
                            <i className={`fas fa-microchip fa-3x ${styles["chip-icon"]}`}></i>
                            <h1 className={styles["title"]}>
                                Skills &amp; Technologies
                            </h1>
                            <p className={styles["description"]}>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit
                                ipsa delectus eum quo voluptas aspernatur accusantium distinctio
                                possimus est.
                            </p>
                        </div>
                        <ul className={styles["skills-list"]}>
                            {skills.map((skill) => (
                            <li key={skill} className={styles["skill-wrapper"]}>
                                <div className={styles["skill"]}>
                                    <i className={`fas fa-check-circle ${styles["check-icon"]}`}></i>
                                    <span className={styles["skill-name"]}>
                                        {skill}
                                    </span>
                                </div>
                            </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
}
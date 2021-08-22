import React from "react";
import { projects } from "../../data"
import styles from "./Projects.module.scss"

export default class Projects extends React.Component {

    render () {
        return (
            <section id="projects">
                <div className={`container ${styles["projects"]}`}>
                    <div className="row">
                        <div className="col-12">
                            <div className={styles["description-wrapper"]}>
                                <i className={`fas fa-code fa-3x ${styles["code-icon"]}`}></i>
                                <h1 className={styles["title"]}>
                                    <span>Apps I've Built</span>
                                </h1>
                                <p className={styles["description"]}>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
                                    facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
                                    fuga dolore.
                                </p>
                            </div>
                            <div className={styles["projects-wrapper"]}>
                                {projects.map((project) => (
                                    <a href={project.link} key={project.image} className={styles["project"]}>
                                        <div className={styles["project-wrapper"]}>
                                            <img alt="gallery" className={styles["image"]}
                                                src={project.image} />
                                            <div className={styles["project-description"]}>
                                                <h2 className={styles["project-title"]}>
                                                    {project.subtitle}
                                                </h2>
                                                <h3 className={styles["project-subtitle"]}>
                                                    {project.title}
                                                </h3>
                                                <p className={styles["project-details"]}>{project.description}</p>
                                            </div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
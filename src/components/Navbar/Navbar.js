import React from "react";
import styles from './Navbar.module.scss';

export default class Navbar extends React.Component {
    render () {
        return (
            <header className={styles["header"]}>
                <div className={styles["navigation-wrapper"]}>
                    <div className={styles["header-container"]}>
                        <a href="#about" className={styles["logo"]}>Cosmin Pruncu</a>
                        <nav className={styles["nav-bar"]}>
                            <a href="#projects">Past Work</a>
                            <a href="#skills">Skills</a>
                            <a href="#testimonials">Testimonials</a>
                        </nav>
                    </div>
                    <div className={styles["contact-wrapper"]}>
                        <a href="#contact">
                            <span>Hire Me</span>
                            <i className={`fas fa-arrow-right ${styles["arrow-right"]}`}></i>
                        </a>
                    </div>
                </div>
            </header>
        );
    }
}
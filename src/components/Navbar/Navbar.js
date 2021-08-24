import React from "react";
import { Link } from "react-router-dom";
import styles from './Navbar.module.scss';

export default class Navbar extends React.Component {
    render () {
        return (
            <header className={styles["header"]}>
                <div className={styles["navigation-wrapper"]}>
                    <div className={styles["header-container"]}>
                        <a href="#about" className={styles["logo"]}>Cosmin Pruncu</a>
                        <nav className={styles["nav-bar"]}>
                            <Link to="/projects">Projects</Link>
                            <Link to="/work">Past Work</Link>
                            <Link to="/skills">Skills</Link>
                        </nav>
                    </div>
                    <div className={styles["contact-wrapper"]}>
                        <a href="#contact">
                            <span>Let's talk</span>
                            <i className={`fas fa-arrow-right ${styles["arrow-right"]}`}></i>
                        </a>
                    </div>
                </div>
            </header>
        );
    }
}
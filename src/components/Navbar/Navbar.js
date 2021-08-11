import React from "react";
// import { ArrowRightIcon } from "@heroicons/react/solid";
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
                        <a href="#contact">Hire Me{/* <ArrowRightIcon className="w-4 h-4 ml-1" /> */}</a>
                    </div>
                </div>
            </header>
        );
    }
}
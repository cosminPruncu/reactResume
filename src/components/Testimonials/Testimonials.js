import React from "react";
import { testimonials } from "../../data";
import styles from "./Testimonials.module.scss"


export default class Testimonials extends React.Component {
    render () {
        return (
            <section id="testimonials" className={`container ${styles["testimonials"]}`}>
                <div className={styles["description-wrapper"]}>
                    <i className={`fas fa-user-edit fa-3x ${styles["people-icon"]}`}></i>
                    <h1 className={styles["title"]}>
                        Client Testimonials
                    </h1>
                    <div className={styles["testimonials"]}>
                        {testimonials.map((testimonial) => (
                        <div className={styles["testimony-wrapper"]}>
                            <div className={styles["testimony-description-wrapper"]}>
                                <i className={`fas fa-terminal ${styles["terminal-icon"]}`}></i>
                                <p className={styles["description"]}>{testimonial.quote}</p>
                                <div className={styles["image-wrapper"]}>
                                    <img alt="testimonial" src={testimonial.image}
                                        className="w-12 rounded-full flex-shrink-0 object-cover object-center" />
                                    <span className="flex-grow flex flex-col pl-4">
                                        <span className="title-font font-medium text-white">
                                            {testimonial.name}
                                        </span>
                                        <span className="text-gray-500 text-sm uppercase">
                                            {testimonial.company}
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}
import React from "react";
import styles from "./Contact.module.scss"

export default class Contact extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            message: "",
        }
    }

    handleOnChange(e) {
        if (e.target.id === "name") {
            let nameCopy = this.state.name;
            nameCopy = e.target.value;
    
            this.setState({
                name: nameCopy,
            });
        }

        if (e.target.id === "email") {
            let emailCopy = this.state.email;
            emailCopy = e.target.value;
    
            this.setState({
                email: emailCopy,
            });
        }

        if (e.target.id === "message") {
            let messageCopy = this.state.message;
            messageCopy = e.target.value;
    
            this.setState({
                message: messageCopy,
            });
        }
    }

    encode(data) {
        return Object.keys(data).map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])).join("&");
    }

    handleSubmit(e) {
        e.preventDefault();
        let name = this.state.name;
        let email = this.state.email;
        let message = this.state.message;

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: this.encode({
                "form-name" : "contact",
                name,
                email,
                message,
            })
        })
        .then(() => alert("Message sent"))
        .catch((error) => alert(error));
    }

    render () {
        return (
            <section id="contact">
                <div className={`container ${styles["contact"]}`}>
                    <div className="row">
                        <div className="col-md-8 col-12">
                            <div className={styles["iframe-wrapper"]}>
                                <iframe width="100%" height="100%" title="map" className={styles["iframe"]} frameBorder={0} marginHeight={0} marginWidth={0} style={{ filter: "opacity(0.7)" }} src="https://maps.google.com/maps?q=cluj&t=&z=11&ie=UTF8&iwloc=&output=embed" />
                                <div className={styles["additional-details-wrapper"]}>
                                    <div className={styles["address"]}>
                                        <h2>ADDRESS</h2>
                                        <p>
                                            Cluj-Napoca <br />
                                            Romania
                                        </p>
                                    </div>
                                    <div className={styles["virtual-address"]}>
                                        <h2>EMAIL</h2>
                                        <a href="mailto: cosmin.pruncu@gmail.com">
                                            cosmin.pruncu@gmail.com
                                        </a>
                                        <h2>PHONE</h2>
                                        <p>0743-844-965</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-12">
                            <form netlify name="contact" className={styles["form"]} onSubmit={(e) => this.handleSubmit(e)}>
                                <h2>Let's talk</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
                                    suscipit officia aspernatur veritatis. Asperiores, aliquid?
                                </p>
                                <div className={styles["name-wrapper"]}>
                                    <label htmlFor="name">Name</label>
                                    <input type="text" id="name" name="name" onChange={(e) => this.handleOnChange(e)}/>
                                </div>
                                <div className={styles["email-wrapper"]}>
                                    <label htmlFor="email" >Email</label>
                                    <input type="email" id="email" name="email" onChange={(e) => this.handleOnChange(e)}/>
                                </div>
                                <div className={styles["message-wrapper"]}>
                                    <label htmlFor="message">Message</label>
                                    <textarea id="message" name="message" onChange={(e) => this.handleOnChange(e)}/>
                                </div>
                                <button type="submit" className={`button submit ${styles["contact-submit"]}`}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
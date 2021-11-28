import React, { useState } from "react";
import './Contact.css';
import { Grid, TextField } from "@mui/material";
import { makeStyles} from "@mui/styles";
import contactImg from "./img/about-9.jpg";
import Form01 from "./Form";

const useStyles = makeStyles((theme) => ({
    legal: {
        width: "100%",
        paddingLeft: 50,
        paddingRight: 50,
        paddingTop: 12,
        textAlign: "justify",
        minHeight: "calc(100vh - 100px)",
        maxHeight: "calc(100vh - 100px)",
        borderLeft: "1px solid black",
        overflow: "scroll",
    },
}));

const Form = () => {
    const [submitting, setSubmitting] = useState(false);
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const classes = useStyles();

    {/*function handleSubmit(e) {
            e.preventDefault();

            //This is used when the form is not submitted via Getform endpoint
            setSubmitting(true);

            setTimeout(() => {
                setSubmitting(false);
            }, 3000)

            // clearing the values
            setName("");
            setEmail("");
            setMessage("");
        }*/}

    return (
        <Grid
            container
            direction="column"
            className={classes.legal}
            style={{ alignItems: "center" }}
        >
            <h1 style={{ fontWeight: "bold" }} >Contact</h1>
            <p style={{ marginBottom: "0.1%" }}> Please fill in the form below </p><br />
            <Grid
                container
                direction="column"
                style={{
                    width: "100%",
                    //height: 30,
                    block: "inline-block",
                    justify: "center",
                    alignItems: "center",
                    //border: "1px solid black",
                }}>
                <div style={{
                    width: "60%",
                    block: "inline-block",
                    justify: "center",
                    alignItems: "center",
                    textAlign: "center",
                    //border: "1px solid black",
                }}>
                    {submitting &&
                        <div style={{ color: "green", alignItems: "center", textAlign: "center", }}>
                            You have submitted the form.</div>
                    }
                    <form
                        //onSubmit={handleSubmit}
                        acceptCharset="UTF-8"
                        action="https://getform.io/f/203fefd1-4034-47ea-9600-02f793c97891"
                        method="POST"
                        encType="multipart/form-data"
                        name="ContactForm"
                    >

                        <TextField
                            id="standard-basic"
                            name="email"
                            style={{ width: "100%" }}
                            type="email"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            label="Email" />
                        <TextField
                            id="standard-basic"
                            name="name"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            style={{ width: "100%", marginBottom: "1.3%", marginTop: "1.3%", }}
                            required
                            label="Name" />
                        <TextField
                            id="outlined-basic"
                            multiline
                            onChange={(e) => setMessage(e.target.value)}
                            value={message}
                            name="message"
                            style={{ width: "100%", marginBottom: "1.6%" }}
                            required
                            label="Message" />
                        <input type="hidden" name="utf8" value="✓" />
                        <button
                            type="submit"
                            justify="center"
                            style={{ width: "15%", borderRadius: 100, padding: "1%", background: "white", fontSize: "1.3vw", marginTop: "3%" }}
                        >Submit</button>
                    </form>
                </div>
                {/*<input type="file" name="file" />*/}
            </Grid>
        </Grid>
    );
};

function Contact() {

    return (
        <div className="contact component__space" id="Contact">
            <div className="px-12">
                <Form01 />;
            </div>
            <div className="row">
                <div className="col__2">
                    <div className="contact__box">
                        <div className="contact__meta">
                            <h1 className="hire__text">Hire Me.</h1>
                            <p className="hire__text white">I am available for freelance work. Connect with me via phone:</p>
                           <p className="hire__text white"><strong></strong> or email <strong>support@meta-bot.world</strong></p>
                        </div>
                        <div className="input__box">
                           <input type="text" className="contact name" placeholder="Your name *" />
                           <input type="text" className="contact email" placeholder="Your Email *" />
                           <input type="text" className="contact subject" placeholder="Write a Subject" />
                           <textarea name="message" id="message" placeholder="Write Your message"></textarea>
                           <button className="btn contact pointer" type="submit">Submit</button>
                        </div>
                    </div>
                </div>
                <div className="col__2">
                    <img src={contactImg} alt="" className="contact__img" />
                </div>
            </div>
        </div>
    )
}

export default Contact

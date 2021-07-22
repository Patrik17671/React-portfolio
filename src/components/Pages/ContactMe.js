import React from 'react';
import EmailForm from "../EmailForm/EmailForm";
import "./ContactMe.css";
import email from "../../Images/email.svg"

const ContactMe = () => {
    return (
        <div>
            <h1>Napíš mi</h1>
            <img src={email} alt="email" height="200px"/>
            <EmailForm />
        </div>
    );
};

export default ContactMe;

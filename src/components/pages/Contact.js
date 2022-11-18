import React, { useState, useRef } from 'react';
import '../../../src/index.css';
import emailjs from 'emailjs-com'


function Form() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(process.env.SERVICE, process.env.TEMPLATE, form.current, process.env.PUBLIC)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };

    return (
        <div>
            <p>
                Input your message and we'll contact you soon!
            </p>
            <form ref={form} onSubmit={sendEmail}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" name="email" />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5" />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Form;

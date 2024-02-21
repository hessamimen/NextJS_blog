import { useState } from "react";
import classes from "./contact-form.module.css";

function ContactForm() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");

  function sendMessageHandler(event) {
    event.preventDefault();

    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      }),
      headers: { "content-type": "application/json" },
    });

    // console.log(emailRef.current.value);
  }

  function handleInputChange(event) {
    const { id, value } = event.target;

    if (id === "email") {
      setEnteredEmail(value);
    } else if (id === "name") {
      setEnteredName(value);
    } else if (id === "message") {
      setEnteredMessage(value);
    }
  }

  return (
    <section className={classes.contact}>
      <h1>How Can I help You?</h1>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              value={enteredEmail}
              onChange={handleInputChange}
              type="email"
              id="email"
              required
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input
              value={enteredName}
              onChange={handleInputChange}
              type="text"
              id="name"
              required
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            value={enteredMessage}
            onChange={handleInputChange}
            id="message"
            rows="5"
            required
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
    </section>
  );
}
export default ContactForm;

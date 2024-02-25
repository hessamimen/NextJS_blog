import { useEffect, useState } from "react";
import classes from "./contact-form.module.css";
import Notification from "./ui/notification";

function ContactForm() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");

  const [requestStatus, setRequestStatus] = useState(); // "pending", "success", "error"
  const [requestError, setRequestError] = useState();

  useEffect(() => {
    if (requestStatus === "success" || requestStatus === "error") {
      const timer = setTimeout(() => {
        setRequestStatus();
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }

    return;
  }, [requestStatus]);

  async function sendContactData(contactDetails) {
    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(contactDetails),
      headers: { "content-type": "application/json" },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Somethng went wrong");
    }
  }

  async function sendMessageHandler(event) {
    event.preventDefault();

    setRequestStatus("pending");

    try {
      await sendContactData({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      });

      setRequestStatus("success");
      setEnteredEmail(" ");
      setEnteredMessage(" ");
      setEnteredName(" ");
    } catch (error) {
      setRequestStatus("error");
      setRequestError(error.message);
    }
  }

  let notification;
  if (requestStatus === "pending") {
    notification = {
      status: "pending",
      title: "Sending Message",
      message: "Your message is on it's way",
    };
  }
  if (requestStatus === "success") {
    notification = {
      status: "success",
      title: "Success!",
      message: "Message Sent Successfully",
    };
  }
  if (requestStatus === "error") {
    notification = {
      status: "error",
      title: "Error!",
      message: requestError,
    };
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
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  );
}
export default ContactForm;

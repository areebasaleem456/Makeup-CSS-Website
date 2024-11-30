import React from "react";
import "../contact/contact.css";

const Contact = () => {
  return (
    <div>
      <section className="contact-form">
        <h2 className="fade-in">Contact Us</h2>
        <form>
          <input type="text" placeholder="Enter Your Name:" required />
          <input
            type="e-mail"
            placeholder="Enter Your E-Mail Address:"
            required
          />
          <input type="text" placeholder="Enter Your Phone Number:" required />
          <textarea
            placeholder="Your Message..."
            rows={5}
            required
            style={{
              fontSize: "20px",
              width: "100%",
              border: "1px solid black",
              marginLeft: "10px",
              padding: "10px",
              borderRadius: "10px",
            }}
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;

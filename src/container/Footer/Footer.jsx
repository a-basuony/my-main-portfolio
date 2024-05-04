import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import "./Footer.scss";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { name, email, message } = formData;
  const form = useRef();

  const handleChangeInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm("service_3m0b2wg", "template_sfr87um", form.current, {
        publicKey: "_8MdLhn9_yF0p8_zC",
      })
      .then(
        () => {
          setLoading(false);
          setIsFormSubmitted(true);
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  const renderForm = () => {
    if (isFormSubmitted) {
      return (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      );
    } else {
      return (
        <form
          className="app__footer-form app__flex"
          ref={form}
          onSubmit={sendEmail}
        >
          <div className="app__flex">
            <input
              type="text"
              className="p-text"
              placeholder="Your Name"
              name="name"
              value={name}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              type="email"
              className="p-text"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="submit" className="p-text">
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      );
    }
  };

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:basuoney.chrom@gmail.com" className="p-text">
            basuoney.chrom@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel:+201125240491" className="p-text">
            01125240491
          </a>
        </div>
      </div>

      {renderForm()}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);

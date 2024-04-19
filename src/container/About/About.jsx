import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { images } from "../../constants";
import "./About.scss";

const abouts = [
  {
    title: "Web Development",
    description:
      "Experienced in developing robust and scalable web applications using modern technologies.",
    imageUrl: images.about01,
  },
  {
    title: "Frontend Development",
    description:
      "Skilled in creating interactive and user-friendly interfaces that meet client requirements.",
    imageUrl: images.about02,
  },
  {
    title: "Backend Development",
    description:
      "Proficient in designing and implementing efficient server-side logic for web applications.",
    imageUrl: images.about03,
  },
  {
    title: "MERN Stack",
    description:
      "Specialized in building full-stack applications using MongoDB, Express.js, React, and Node.js.",
    imageUrl: images.about04,
  },
];

const About = () => {
  return (
    <>
      <h2 className="head-text">
        I know that <span>Good Development</span> <br />
        means <span>Good Business</span>
      </h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imageUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About;

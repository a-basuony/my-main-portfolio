import React, { useState, useEffect } from "react";

import AppWrap from "./../../wrapper/AppWrap";
import { motion } from "framer-motion";
import { client, urlFor } from "../../client";
import "./Work.scss";

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);

  useEffect(() => {
    const query = '*[_type == "works"]';
    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  const handleWorkFilter = (item) => {};
  return (
    <>
      <h2 className="head-text">
        Creative <span>Work</span>
      </h2>
      <div className="app__work-filter">
        {[
          "html,css,js",
          "React.js",
          "Next.js",
          "ReactNative",
          "Node.js",
          "MERN",
          "All",
        ].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item ${
              activeFilter === item ? "item-active" : ""
            }`}
          >
            {item}
          </div>
        ))}
        <motion.div
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="app__work-portfolio"
        >
          {filterWork.map((work, index) => (
            <div className="app__work-item app__flex " key={index}>
              <div className="app__work-img app__flex">
                <img src={urlFor(work.imgUrl)} alt={work.name} />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(Work, "work");

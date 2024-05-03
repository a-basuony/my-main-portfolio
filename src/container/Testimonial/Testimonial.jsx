import Reac, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

import { MotionWrap, AppWrap } from "../../wrapper";
import { client, urlFor } from "../../client";
import "./Testimonial.scss";

const Testimonial = () => {
  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const query = "*[_type == 'testimonials']";
    const brandsQuery = "*[_type == 'brands']";

    client.fetch(query).then((data) => setBrands(data));
    client.fetch(brandsQuery).then((data) => setTestimonials(data));
  }, []);
  return <div></div>;
};

export default AppWrap(
  MotionWrap(Testimonial, "app__testimonial"),
  "testimonial",
  "app__primarybg"
);

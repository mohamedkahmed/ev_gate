import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import "./VissionSection.scss";

const VissionSection = () => {
    const ref = useRef();
    const { hash } = useLocation();
    useEffect(() => {
      const id = hash.replace("#", "");
      const element = ref.current;
  
      if (!element) return;
  
      if (id == element.id) element.scrollIntoView({ behavior: "smooth" });
    }, [hash]);
  return (
    <section id='vission' className='vision-wrapper' ref={ref}>
    <div className="container">
      <div className="vision-content">
      <h2>vision</h2>
    <p className="one">Our vision is to be the leading catalyst in shaping a world where
sustainable mobility is the norm.</p>
    <p>We envision a future where electric vehicle charging is ubiquitous, accessible, and
seamlessly integrated into everyday life. By pioneering innovative solutions and
championing environmental stewardship, we aim to create a paradigm shift towards
eco-conscious transportation, driving a global movement towards a greener, more
sustainable tomorrow</p>
    <div className="icons">
      <img src="/images/aa1.png" alt="icon" />
      <img src="/images/aa2.png" alt="icon" />
      <img src="/images/aa3.png" alt="icon" />
      <img src="/images/aa4.png" alt="icon" />
    </div>
      </div>
    </div>
  </section>
  )
}

export default VissionSection
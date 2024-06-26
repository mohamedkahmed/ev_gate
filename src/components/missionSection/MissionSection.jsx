import React, { useEffect, useRef, useState} from "react";
import { useLocation } from "react-router-dom";
import { ourMission} from "../../assets/data/data";
import "./MissionSection.scss";
const MissionSection = () => {
    const ref = useRef();
    const { hash } = useLocation();
    useEffect(() => {
      const id = hash.replace("#", "");
      const element = ref.current;
      if (!element) return;
      if (id == element.id) element.scrollIntoView({ behavior: "smooth" });
    }, [hash]);

  return (
    <section id='mission' className="our-mission" ref={ref}>
    <div className="container">
    <div className="mission-title-top">
    <h2 data-aos="fade-left">mission</h2>
      <p data-aos="fade-right">At EV Gate, we are not just revolutionizing
electric mobility; we're paving the way for a
future where sustainability and technological innovation converge</p>
  </div>
  <div className="mission-content">
    {ourMission.map((el) => {
      const {id, image, iconImg, title, desc} = el
      return (
        <div data-aos="zoom-in" className='feat' key={id}>
          <div className="images">
            <img src={image} alt={title} />
          </div>
          <div className="text">
            <img src={iconImg} alt={title} />
            <h5>{title}</h5>
            <p title={desc}>{desc}</p>
          </div>
        </div>
      )
    })}
  </div>
    </div>
  </section>
  )
}

export default MissionSection
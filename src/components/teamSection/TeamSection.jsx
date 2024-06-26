import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import {useFetchOurTeams} from "../../components/fetchData/FetchData";
import "./TeamSection.scss"
const TeamSection = () => {
    const {load, ourteam} = useFetchOurTeams();
    const ref = useRef();
    const { hash } = useLocation();
    useEffect(() => {
      const id = hash.replace("#", "");
      const element = ref.current;
  
      if (!element) return;
  
      if (id == element.id) element.scrollIntoView({ behavior: "smooth" });
    }, [hash, load]);
    if (load) {
        return (
          <section className="out-team-loading">
            <h1>loading...</h1>
          </section>
        )
      }
  return (
    <section id='our-team' className="great-team-section" ref={ref}>
    <div className="container">
    <div className="great-team-title-top">
    <h2 data-aos="fade-left">Great Team</h2>
      <p data-aos="fade-right">At EV Gate, we stand as pioneers in revolutionizing the landscape of sustainable energy and electric mobility</p>
  </div>
  <div className="our-team">
    {ourteam.map((team) => {
      const {name, job, id,image, url} = team;
      return (
        <a href={url} target='_blanck' data-aos="zoom-out-down" className="feat" key={id}>
          <img src={image} alt={name} />
          <h5>{name}</h5>
          <p>{job}</p>
        </a>
      )
    })}
  </div>
    </div>
  </section>
  )
}

export default TeamSection
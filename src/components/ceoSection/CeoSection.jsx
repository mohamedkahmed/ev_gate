import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import {useFetchCeoMessage} from "../fetchData/FetchData"
import "./CeoSection.scss"
const CeoSection = () => {
  const {loading, ceomessage} = useFetchCeoMessage();
  const ref = useRef();
  const { hash } = useLocation();
  useEffect(() => {
    const id = hash.replace("#", "");
    const element = ref.current;

    if (!element) return;

    if (id == element.id) element.scrollIntoView({ behavior: "smooth" });
  }, [hash, loading]);
  if (loading) {
    return (
      <section className="ceo-message-loading">
        <h1>loading...</h1>
      </section>
    )
  }
  return (
    <section id='ceoSection' className="ceo-message-wrapper" ref={ref}>
    <div className="container">
        {ceomessage.map((item) => {
         const {mainTitle, title, id,image,para1, para2, para3, name, job} = item
        return (
      <div className="ceo-parent" key={id}>
        <div data-aos="fade-right" className="ceo-img">
          <img src={image} alt={mainTitle} />
        </div>
        <div data-aos="fade-left" className="ceo-content">
          <h2>{mainTitle}</h2>
          <h5>{title}</h5>
          <p>{para1}</p>
          <p>{para2}</p>
          <p>{para3}</p>
          <div className="name">
            <span>{name}</span> {job} 
          </div>
        </div>
          <span className="line"></span>
      </div>
        )
        })}
    </div>
  </section>
  )
}

export default CeoSection
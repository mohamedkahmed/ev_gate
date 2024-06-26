import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { LuMoveUpRight } from "react-icons/lu";
import {useFetchPortal} from "../fetchData/FetchData";
import "./EvGatePortalSlider.scss";

const EvGatePortalSlider = () => {
  const {loading, portalManage} = useFetchPortal();
  if (loading) {
    return (
      <section style={{display: "flex", alignItems: "center", justifyContent: "center", width: "100%", padding: "50px 0"}} className="portal-manage-loading">
        <h2>loading...</h2>
      </section>
    )
  }
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    dots: true,
    slidesToShow: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",

  };
  return (
    <section id="ourServices" className="portal-feature-wrapper">
      <div className="portal-title">
        <h2 data-aos="fade-right">Our Services</h2>
        <p data-aos="fade-left">
          At EV Gate, we are not just revolutionizing electric mobility; we're
          paving the way for a future where sustainability and technological
          innovation converge.
        </p>
      </div>
      <Slider {...settings}>
        {portalManage.map((item) => {
          const { id, title, image, desc } = item;
          return (
            <div data-aos="fade-left" className="items" key={id}>
              <div className="text">
                <h2>{title}</h2>
                <p title={desc}>{desc}</p>
                <div className="see-all">
                  <Link to="/portalmanagementsystem">See all</Link>
                </div>
                <div className="log-portal">
                  <Link target="_blanck" to="http://portal.evgate.com/">
                    {" "}
                    Login to the Portal <LuMoveUpRight />{" "}
                  </Link>
                </div>
              </div>
              <div className="image-portal">
                <img src={image} alt="portal image" />
              </div>
            </div>
          );
        })}
      </Slider>
    </section>
  );
};

export default EvGatePortalSlider;

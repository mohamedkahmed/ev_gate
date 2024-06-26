import React from 'react';
import Slider from 'react-slick';
import { HiOutlineArrowNarrowRight, HiOutlineArrowNarrowLeft  } from "react-icons/hi";
import {Loading} from "../../components";
import { LuMoveRight } from "react-icons/lu";
import { Link } from 'react-router-dom';
import {useFetchSingleSolution} from "../fetchData/FetchData";
import './HomeSolutions.scss';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
        
     >
      <HiOutlineArrowNarrowRight style={{ ...style, color: "#1B0B2B", fontSize: "18px" }}/>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    >
      <HiOutlineArrowNarrowLeft style={{ ...style, color: "#1B0B2B", fontSize: "18px" }}/>
    </div>
  );
}

const HomeSolutions = () => {

  const {loading, singlesolution} = useFetchSingleSolution();
  if (loading) {
    return (
      <Loading/>
    )
  }
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "0",
        slidesToShow: 3,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 767.98,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 575.98,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <section id="solutions" className="solutions-home-wrapper">
    <div className="container">
    <div className="solutions-title">
            <h2 data-aos="fade-left" data-aos-duration="6000">
              Solutions & Sectors
            </h2>
            <p data-aos="fade-right" data-aos-duration="6000">At EV Gate, we cover a diverse range of sectors with innovative EV
charging solutions:</p>
          </div>
          <Slider {...settings}>
            {singlesolution.map((items) => {
                const {title, id, desc, image} = items;
                return (
                    <div className='items' key={id}>
                    <img src={image} alt={title} />
                    <div data-aos="fade-up" className="text">
                    <h5>{title}</h5>
                    <p>{desc}</p>
                    </div>
                  </div>
                )
            })}

        </Slider>
        <div className="view-services">
          <Link data-aos="fade-left"  to='/solutions'> <p>View all services</p> <LuMoveRight /></Link>
        </div>
    </div>
  </section>
  )
}

export default HomeSolutions
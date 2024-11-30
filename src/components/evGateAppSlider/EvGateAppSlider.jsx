import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import {useFetchAppManage} from "../fetchData/FetchData";
import {useFetchDownloadImagesLink} from "../fetchData/FetchData";
import './EvGateAppSlider.scss'
const EvGateAppSlider = () => {
  const { downloadImagesLinker} = useFetchDownloadImagesLink();
  const {loading, appManage} = useFetchAppManage();
  if (loading) {
    return (
      <section style={{display: "flex", alignItems: "center", justifyContent: "center", width: "100%", padding: "50px 0"}} className="app-manage-loading">
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
        autoplay: false,
        autoplaySpeed: 3000,
        cssEase: "linear",

      };
  return (
    <section className='app-feature-wrapper'>
        <Slider {...settings}>
            {appManage.map((item) => {
                const {id, image , title, desc} = item;
                return (
                    <div data-aos="fade-right" className='items' key={id}>
                                    <div className="app-images">
                <img src={image} alt="app image" />
              </div>
                    <div className="text">
                    <h2>{title}</h2>
                    <p title={desc}>{desc}</p>
                    <div className="see-all">
                  <Link to="/portalmobileApp">See all</Link>
                </div>
                    <div className="download-app">
                    <Link target="_blank" to={downloadImagesLinker[0]?.googleImageLink}> <img src="/images/googlePlay.svg" alt="download google play app " /> </Link>
                <Link target="_blank" to={downloadImagesLinker[0]?.appImageLink}> <img src="/images/appStore.svg" alt="download app store" /> </Link>
              </div>
                    </div>
                  </div>
                )
            })}

        </Slider>
    </section>
  )
}

export default EvGateAppSlider
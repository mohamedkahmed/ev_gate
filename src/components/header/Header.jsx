import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { useFetchHomeSlider } from "../fetchData/FetchData";
import { Loading } from "../../components";
import "./Header.scss";
const Header = () => {
  const { loading, homeslider } = useFetchHomeSlider();

  if (loading) {
    return <Loading />;
  }
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 1,
    speed: 500,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  return (
    <header className="header">
      <div>
        <Slider {...settings}>
          {homeslider.map((items) => {
            const {
              title,
              id,
              desc,
              image,
              loadApp,
              googleImage,
              appImage,
              url,
            } = items;
            return (
              <div className="main" key={id}>
                <div className="image">
                  {url ? (
                    <video className="single_video" autoPlay muted loop>
                      <source src={url} type="video/mp4" />
                    </video>
                  ) : (
                    <img src={image} alt={title} />
                  )}
                  <div className="overlay">

                  </div>
                </div>
                <div className="text">
                  <div className="container">
                    <h1 className="title" data-aos="fade-right">
                      {title}
                    </h1>
                    <p className="description">{desc}</p>
                    {loadApp ? <p className="load-app">{loadApp}</p> : null}
                    {googleImage ? (
                      <Link
                        target="_blank"
                        to="https://install.appcenter.ms/users/saraevgate/apps/ev-gate/distribution_groups/testers"
                      >
                        <img
                          className="google-play-img"
                          src={googleImage}
                          alt="google play"
                        />
                      </Link>
                    ) : null}
                    {appImage ? (
                      <Link
                        target="_blank"
                        to="https://testflight.apple.com/join/IjVWg9Ju"
                      >
                        <img
                          className="app-store-img"
                          src={appImage}
                          alt="app soter"
                        />
                      </Link>
                    ) : null}
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </header>
  );
};

export default Header;

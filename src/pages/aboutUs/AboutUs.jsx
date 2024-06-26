import React, { useEffect, useState } from "react";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import {
  CeoSection,
  VissionSection,
  MissionSection,
  TeamSection,
} from "../../components";
import { useFetchAboutFeatures } from "../../components/fetchData/FetchData";
import "./AboutUs.scss";
import { Loading } from "../../components";
import SingleFeature from "../../components/singleFeature/SingleFeature";
const AboutUs = () => {
  const { loading, aboutFeat } = useFetchAboutFeatures();

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <BreadCrumb
        title="EV Gate"
        desc="About Ev Gate company"
        img="/images/about-bradcrumb.png"
      />
      <section className="single-about-us">
        <div className="title-top">
          <div className="container">
            <h2 data-aos="fade-left">about us</h2>
            <p data-aos="fade-right">
              At EV Gate, we stand as pioneers in revolutionizing the landscape
              of sustainable energy and electric mobility
            </p>
          </div>
        </div>
        <section className="about-content">
          <div className="container">
            <div className="main-about-content">
              <div className="about-desc" data-aos="fade-right">
                <p>
                  At EV Gate, we stand as pioneers in revolutionizing the
                  landscape of sustainable energy and electric mobility. Our
                  unwavering commitment to environmental sustainability fuels
                  every aspect of our mission and operations. We are dedicated
                  to empowering individuals and businesses to make reliable
                  choices that drive towards a cleaner, more sustainable future.
                </p>
                <p>
                  Our proprietary software is hardware agnostic, ensuring
                  seamless integration and compatibility across a broad range of
                  devices and platforms. This flexibility allows us to deliver
                  customized solutions tailored to meet the diverse needs of our
                  clients while promoting technological innovation and
                  sustainability.
                </p>
                <p>
                  Our user-centric approach is evident in our groundbreaking
                  mobile application, setting new standards in convenience and
                  accessibility. With unique features and capabilities, we aim
                  to make sustainable practices effortless and rewarding for all
                </p>
                <p>
                  Through our innovative energy management solutions and
                  comprehensive analysis, we provide actionable insights into
                  environmental and asset performance from a centralized
                  location. Our commitment extends to fostering widespread
                  accessibility to electric vehicle charging networks, promoting
                  for clean and renewable energy adoption, and implementing
                  robust tools that optimize energy usage
                </p>
                <p>
                  At EV Gate, we are not just revolutionizing electric mobility;
                  we're paving the way for a future where sustainability and
                  technological innovation converge for the benefit of our
                  planet and its inhabitants.
                </p>
              </div>
              <div className="about-image" data-aos="fade-left">
                <img src="/images/about-img.png" alt="about image" />
              </div>
            </div>
          </div>
        </section>
        <section className="h-p-y">
          <div className="container">
            <div className="ch-section">
              {aboutFeat.map((item) => {
                const { id, image, num, title } = item;
                return (
                  <SingleFeature
                    key={id}
                    image={image}
                    num={num}
                    title={title}
                  />
                );
              })}
            </div>
          </div>
        </section>
        {/* ceo message */}
        <CeoSection />

        {/* our vision */}

        <VissionSection />

        <section className="pic">
          <img src="/images/about-pic-single.png" alt="single image" />
        </section>
        {/* our mission */}

        <MissionSection />

        {/* meet team section */}
        <section className="meet-team-section">
          <div className="container">
            <div className="meet-team-title-top">
              <h2 data-aos="fade-left">Meet the Team</h2>
              <p data-aos="fade-right">
                Passionate EV enthusiasts with over two decades of experience in
                the regional electric industry since 1997 and specializing in
                electric vehicles since 2022
              </p>
            </div>
          </div>
          <div className="meet-team-image">
            <img src="/images/meet-team.png" alt="team pic" />
          </div>
        </section>
        {/* great team */}

        <TeamSection />
      </section>
    </>
  );
};

export default AboutUs;

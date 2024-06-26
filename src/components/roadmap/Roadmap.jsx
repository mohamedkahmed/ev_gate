import React from "react";
import RoadmapBox from "./RoadmapBox";
import {useFetchRoadmap} from "../fetchData/FetchData";
import {Loading} from "../../components";
import "./Roadmap.scss";
const Roadmap = () => {
  const {loading, roadmmap} = useFetchRoadmap();
if (loading) return <Loading/>;
  return (
    <div>
      <section className="roadmap-wrapper" id="roadmap">
        <div className="container">
          <div className="roadmap-title">
            <h1>History & Excellence</h1>
          </div>
        </div>
      </section>
      <div className="main-roadmap">

        <div className="desktop_roadMap">
          <img src={roadmmap[0]?.deskRoad} alt="roadmap" />
        </div>
        <div className="mobile_roadMap">
          <img src={roadmmap[0]?.mobileRoad} alt="roadmap" />
        </div>

{/*         <div className="arrow-image">
          <img src="/images/arrow.png" alt="arrow" />
        </div>
      <div className="roadmap-container">
        {roadmmap.map((item, index) => (
          <RoadmapBox {...item} key={index} />
        ))}
      </div>
      <div className="arrow-image">
          <img src="/images/arrow.png" alt="arrow" />
        </div> */}
      </div>
    </div>
  );
};

export default Roadmap;

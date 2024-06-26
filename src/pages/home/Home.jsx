import {Header, HomeNews ,Roadmap, EvGateAppSlider, EvGatePortalSlider, HomeSolutions} from "../../components";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home-wrapper">
      {/* import header from components */}
      <Header />

      {/* roadmap section */}
      <Roadmap/>

      {/* solution & sectors section */}
      <HomeSolutions/>
            {/* Ev Gate portal Section */}
            <EvGatePortalSlider/>
      {/* Ev Gate App Section */}
      <EvGateAppSlider/>
            {/* news */}
            <HomeNews/>
    </div>
  );
};

export default Home;

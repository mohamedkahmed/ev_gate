import { BreadCrumb } from "../../components";
import { Link } from "react-router-dom";
import {
  useFetchAppManage,
  useFetchCoverAppPage,
} from "../../components/fetchData/FetchData";
import { Loading } from "../../components";
import "./PortalMobileApp.scss";
const PortalMobileApp = () => {
  const { loading, appManage } = useFetchAppManage();
  const { coverAppManage } = useFetchCoverAppPage();
  if (loading) {
    return <Loading />;
  }
  console.log(coverAppManage);
  return (
    <>
      <BreadCrumb img={coverAppManage[0]?.aImage} />
      <section className="single-portal-mobile-app">
        <div className="title-top">
          <div className="container">
            <h2 data-aos="fade-left">Our Mobile App Features</h2>
            <p data-aos="fade-right">
              Seamlessly manage your EV charging experience with our mobile app,
              offering intuitive access to an extensive network of chargers,
              sophisticated wallet management, detailed performance tracking,
              flexible plans and tariffs, effortless roaming across networks,
              exclusive shopping deals, and convenient booking and scheduling
              capabilities
            </p>
            <div data-aos="zoom-in-up" className="load-app-images">
              <Link
                target="_blank"
                to="https://install.appcenter.ms/users/saraevgate/apps/ev-gate/distribution_groups/testers"
              >
                <img src="/images/playDark.svg" alt="google play" />
              </Link>
              <Link
                target="_blank"
                to="https://testflight.apple.com/join/IjVWg9Ju"
              >
                <img src="/images/appDark.svg" alt="app sotre" />
              </Link>
            </div>
          </div>
        </div>
        <div className="portal-features">
          {appManage.map((el) => {
            const { id, image, title, desc } = el;
            return (
              <div className="feat" key={id}>
                <div className="image-portal">
                  <img data-aos="zoom-in-up" src={image} alt={title} />
                </div>
                <div data-aos="zoom-in-down" className="text-portal">
                  <h2>{title}</h2>
                  <p title={desc}>{desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default PortalMobileApp;

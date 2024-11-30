import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import {useFetchCoverPortalPage} from "../../components/fetchData/FetchData";
import {useFetchCoverAppPage} from "../../components/fetchData/FetchData";
import {useFetchDownloadImagesLink} from "../fetchData/FetchData";
import { GoArrowUpRight } from "react-icons/go";
import "./BreadCrumb.scss";

const BreadCrumb = (props) => {
  const location = useLocation();
  const pathName = location.pathname;
  const { title, desc, img } = props;
  const {loading, coverportalManage} = useFetchCoverPortalPage();
  const {coverAppManage} = useFetchCoverAppPage();
  const { downloadImagesLinker} = useFetchDownloadImagesLink();

  if (loading) {
    return (
      <section className="about-feat-loading">
        <h1>loading...</h1>
      </section>
    )
  }
  return (
    <>
      <div
        className={
          pathName === "/portalmobileApp"
            ? "main-breadcrumb main-portal-app-br" : pathName === "/portalmanagementsystem" ? "main-breadcrumb main-portal-app-br" : "main-breadcrumb"
        }
      >
        <div className="container">
          <img className="br-img-cover" src={img} alt="about image" />
          {pathName === "/portalmobileApp" ? (
            <div className="text">
              <div className="container">
                <h1 className="title">{coverAppManage[0]?.appTitle}</h1>
                <p className="description">
                {coverAppManage[0]?.appDescription}
                </p>
                <p className="load-app">{coverAppManage[0]?.loadApp}</p>
                <Link target="_blank" to={downloadImagesLinker[0]?.googleImageLink}>
                  <img
                    className="google-play-img"
                    src={coverAppManage[0]?.googleImage}
                    alt="google play"
                  />
                </Link>
                <Link target="_blank" to={downloadImagesLinker[0]?.appImageLink}>
                  <img
                    className="app-store-img"
                    src={coverAppManage[0]?.appImage}
                    alt="app soter"
                  />
                </Link>
              </div>
            </div>
          ) : pathName === "/portalmanagementsystem" ? (
            <div className="text">
              <div className="container">
                <h1 className="title">{coverportalManage[0]?.pTitle}</h1>
                <p className="description">
                {coverportalManage[0]?.pDescription}
                </p>
                <Link target="_blanck" className="log-poratl" to="http://portal.evgate.com/">
                {coverportalManage[0]?.login} <GoArrowUpRight />
                </Link>
              </div>
            </div>
          ) : (
            <div className="breadcrumb-item">
              <h2>{title}</h2>
              <p>{desc}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BreadCrumb;
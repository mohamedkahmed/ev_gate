import { BreadCrumb } from "../../components";
import {useFetchPortal, useFetchCoverPortalPage} from "../../components/fetchData/FetchData";
import {Loading} from "../../components";
import "./PortalManagementSystem.scss";
const PortalManagementSystem = () => {
  const {loading, portalManage} = useFetchPortal();
  const {coverportalManage} = useFetchCoverPortalPage();
  if (loading) {
    return (
      <Loading/>
    )
  }
  return (
    <>
          <BreadCrumb img={coverportalManage[0]?.pImage} />
      <section className="single-portal-manage-system">
        <div className="title-top">
          <div className="container">
            <h2 data-aos="fade-left">Our Portal Features</h2>
            <p data-aos="fade-right">
            Harness the power of our Portal Management System,
offering advanced clustering, multi-tenant sleeving,
personalized plans, comprehensive wallet management,
integrated voucher and loyalty management, and
real-time analytical & predictive capabilities to optimize
efficiency of your connected charging stations.
            </p>
          </div>
        </div>
        <div className="portal-features">
          {portalManage.map((el) => {
            const { id, image, title, desc} = el;
            return (
              <div className="feat" key={id}>
                <div className='image-portal'>
                  <img data-aos="zoom-in-up" src={image} alt={title} />
                </div>
                <div data-aos="zoom-in-down" className='text-portal'>
                  <h2>{title}</h2>
                  <p title={desc}>{desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section></>
  )
}

export default PortalManagementSystem
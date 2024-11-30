import { BreadCrumb, Loading } from "../../components";
import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import {useFetchOurCompanies} from "../../components/fetchData/FetchData";
import "./OurCompanies.scss";
import { Link } from "react-router-dom";
const OurCompanies = () => {
    const {loading, ourCompanies} = useFetchOurCompanies();
    const ref = useRef();
    const { hash } = useLocation();
    useEffect(() => {
      const id = hash.replace("#", "");
      const element = ref.current;
  
      if (!element) return;
  
      if (id == element.id) element.scrollIntoView({ behavior: "smooth" });
    }, [hash, loading]);
    if (loading) {
        return (
            <Loading/>
        )
      }
  return (
    <>
          <BreadCrumb title="Our Companies" desc="Explore the innovative companies that make up our group: Sara Engineering & Energy, Sara Electrical Supplies, Sara Digital, and EV Gate." img="/images/Home-15_1440x495-2 1.svg"/>
          <section className="our_Companies_wrapper">
            {ourCompanies.map((items) => {
              const {id,image, para1,para2,brandImage, logoImg, arrowColor, idTitle, sideBarImg, url} = items;
              return (
                <div id={idTitle}   className="our_Companies_content" key={id} ref={ref} >
                    <div className="content_text" data-aos="fade-right">
                        <img src={logoImg} alt="logo" />
                        <p title={para1}>{para1}</p>
                        <p title={para2}>{para2}</p>
                        <div className="brand_images">
                            {brandImage.map((img, index) => {
                                return <img key={index} src={img} alt="brand" />
                            })}
                        </div>
                    </div>
                    <div className="image" data-aos="fade-right">
                        <div className="dis_img_side">
                        <img src={image} alt="image" />
                        <div className="side_img">
                          <img src={sideBarImg} alt="sideBar" />
                        </div>
                        </div>
                        <div className="go_to_site">
                            <div className="arrow" style={{color: `${arrowColor}`}}>
                                <MdKeyboardArrowRight/>
                            </div>
                            <Link to={url} target="_blank" className="go">
                                <p>Go To Website</p> 
                                <MdKeyboardArrowRight style={{color: `${arrowColor}`}}/>
                            </Link>
                        </div>
                    </div>
                </div>
              )
            })}
          </section>
    </>
  )
}

export default OurCompanies
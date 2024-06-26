import React from 'react'
import { BreadCrumb, Loading } from '../../components'
import { MdArrowRightAlt } from "react-icons/md";
import {useFetchOurNews} from "../../components/fetchData/FetchData";
import "./News.scss";
import { Link } from 'react-router-dom';
/* import moment from 'moment'; */

const News = () => {
    const {loading, ourNews} = useFetchOurNews();

    if (loading) {
        return (
            <Loading/>
        )
      }
  return (
    <>
    <BreadCrumb title="News" desc="Stay up-to-date with the latest developments, events, and innovations from EV Gate as we drive the future of electric vehicle charging." img="/images/Home-15_1440x495-1 1.svg"/>
          <section className="news_wrapper">
            {ourNews.map((items) => {
              const {id,image, para1, para2, title, date, url}  = items;
              return (
                <div   className="news_content" key={id}>
                    <div className="content_text">
                        <h2>{title}</h2>
                        <p title={para1}>{para1}</p>
                        <p title={para2}>{para2}</p>
                        <div className="date">
                <p> {date}  {/* {moment(date).format('dddd, DD-MM-YYYY')} */}</p>
              </div>
                        <div className="read_more_btn">
                <Link to={`/singleNews/${id}`}>Read More <MdArrowRightAlt/></Link> 
              </div>
                    </div>
                    <div className="image">
                    <div className="u-img">
                    {url ? (
                      <video className="single_video" autoPlay muted loop>
                        <source src={url} type="video/mp4" />
                      </video>
                    ) : (
                        <img src={image} alt={title} />
                    )}
                        </div>
                    </div>
                </div>
              )
            })}
          </section>
    </>
  )
}

export default News
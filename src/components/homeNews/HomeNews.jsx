import { MdArrowRightAlt } from "react-icons/md";
import {Loading} from "../../components";
import { HiOutlineArrowNarrowRight, HiOutlineArrowNarrowLeft  } from "react-icons/hi";
import {useFetchOurNews} from "../fetchData/FetchData";
import Slider from "react-slick";
import "./HomeNews.scss"
import { Link } from "react-router-dom";
/* import moment from "moment"; */
const HomeNews = () => {
    const {loading, ourNews} = useFetchOurNews();
    
    if (loading) {
      return (
        
        <Loading/>
  
      )
    }
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            onClick={onClick}
              
           >
            <HiOutlineArrowNarrowRight style={{ ...style, fontSize: "18px" }}/>
          </div>
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            onClick={onClick}
          >
            <HiOutlineArrowNarrowLeft style={{ ...style, fontSize: "18px" }}/>
          </div>
        );
      }
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "0",
        slidesToShow: 1,
        speed: 500,
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
      };
  return (
    <section className="home_news">
    <div className="main_home_news">

      <Slider {...settings}>
        {ourNews.map((items) => {
          const {id,image, para1, para2, title, date, urlVid,youWantToAddVideo} = items;
          return (
            <div className="home_news_content" key={id}>
            <div className="home_news_text">
              <div className="t-x">

                <h1>Latest News</h1>
                <h2>{title}</h2>
                <p title={para1}>
                  {para1}
                </p>
                <p title={para2}>
                  {para2}
                </p>
              </div>
              <div className="date">
              <p> {date} {/* {moment(date).format('dddd, DD-MM-YYYY')} */}</p>
              </div>
              <div className="read_more_btn">
              <Link to={`/singleNews/${id}`}>Read More <MdArrowRightAlt/></Link> 
              </div>
            </div>
            <div className="home_news_image">
            {youWantToAddVideo ? (
                      <video className="single_video" autoPlay muted loop>
                        <source src={urlVid} type="video/mp4" />
                      </video>
                    ) : (
                        <img src={image} alt={title} />
                    )}
              <a href="/news" className="view_all">
              View All
              </a>
            </div>
          </div>
          )
        })}

      </Slider>

    </div>
  </section>
  )
}

export default HomeNews
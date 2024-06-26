import React from 'react';
import {useFetchSingleSolution} from "../../components/fetchData/FetchData"
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import {Loading} from "../../components";
import './Solutions.scss';

const Solutions = () => {
  const {loading, singlesolution} = useFetchSingleSolution();
  if (loading) {
    return (
      <Loading/>
    )
  }
  return (
    <> 
        <BreadCrumb title='Solutions' desc='Provided by Ev Gate' img="/images/single-solution-cover.png"/>
    <section className='single-solutions'>
        <div className="container">
            <div className="title-top">
                <h2 data-aos="fade-left">Solutions and Sectors</h2>
                <p data-aos="fade-right">At EV Gate, we cover a diverse range of sectors with innovative EV
charging solutions: 

</p>
            </div>
        </div>
        <div className="main-images">
            {singlesolution.map((items) => {
              const {id, title, desc, right,image} = items;
              return (
                <div className="img-txt"  key={id}>
                                      <div className="container">
                    <div className={right ? "text right": "text"}>
                      <h2  data-aos="zoom-in-down">{title}</h2>
                      <p data-aos="zoom-in-up" title={desc} >{desc}</p>
                    </div>
                  </div>
                  <img src={image} alt={title} />
                </div>
                  )
                })}
                </div>
    </section>
    </>
  )
}

export default Solutions
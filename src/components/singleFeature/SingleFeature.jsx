import React from 'react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer';
const SingleFeature = ({title, image, num}) => {
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0,
      });
  return (
    <div ref={ref} data-aos="zoom-in" className="feat">
    <img src={image} alt={title} />
    <h5>
    <CountUp
  start={0}
  end={inView ? (num > 1000 ? num / 1000 : num) : 0}
  duration={2.95}
  separator="."
  suffix= {num > 1000 ? "K+" : num > 0 ? "+" :""}
/>
    </h5>
    <p>{title}</p>
  </div>
  )
}

export default SingleFeature
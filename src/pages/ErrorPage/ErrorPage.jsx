import {Link} from "react-router-dom"
import "./ErrorPage.scss"
const Erorrpage = () => {
  return (
    <div className='eorr-section'>
     
          <img src="/images/errorPage.png" alt="page not found" />
          <div className="content">
              <h3>Ohh!</h3>
              <p>
                  we cant seem to find page your Loking for
              </p>
              <Link className='to_home' to = "/">Back Home</Link>
          </div>

    </div>
  )
}

export default Erorrpage

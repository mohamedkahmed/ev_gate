import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram  } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import './Footer.scss';
const Footer = () => {
  return (
    <div className='footer'>
        <div className="upper-footer">
          <div className="container">
            <div className="parent-dev">
            <div className="text">
            <h2>Start Your Journey Today With Ev Gate</h2>
            <p>At EV Gate, we are not just revolutionizing electric mobility; we're paving the way for a future where sustainability and technological innovation converge for the benefit of our planet and its inhabitants.</p>
          </div>
          <div className="btn-ex">
            <Link to='/contact'>Get in Touch</Link>
          </div>
            </div>
          </div>
      </div>
      <div className="center-footer">
        <div className="container">
          <div className="parent-center">
            <div className="link-footer">
              <div className="logo-fo">
                <img src="/images/logo.svg" alt="logo" />
              </div>
              <div className="download-app">
                <Link target="_blank" to="https://install.appcenter.ms/users/saraevgate/apps/ev-gate/distribution_groups/testers"> <img src="/images/play1.svg" alt="download app image" /> </Link>
                <Link target="_blank" to="https://testflight.apple.com/join/IjVWg9Ju"> <img src="/images/store1.svg" alt="download app image" /> </Link>
              </div>
            </div>
            <div className="link-footer">
              <h5>home</h5>
              <ul>
                <li> <a href="/#roadmap">History & Excellence</a> </li>
                <li><a href="/#solutions">Solutions & Sectors</a></li>
                <li><a href="/#ourServices">Our Services</a></li>
              </ul>
            </div>
            <div className="link-footer">
              <h5>EV Gate </h5>
              <ul>
                <li><a href="/about">About Us</a></li>
                <li><a href="/about#ceoSection">CEO</a></li>
                <li><a href="/about#vission">Vision</a></li>
                <li><a href="/about#mission">mission</a></li>
                <li><a href="/about#our-team">team</a></li>
              </ul>
            </div>
            <div className="link-footer">
              <h5>Solution</h5>
              <ul>
                <li><a href="/solutions">Smart Cities & Governments</a></li>
                <li><a href="/solutions">Residential Properties</a></li>
                <li><a href="/solutions">Malls & Retail</a></li>
                <li><a href="/solutions">Commercial Workplace</a></li>
                <li><a href="/solutions">Fleet Managers & Gas Stations</a></li>
                <li><a href="/solutions">Hotels & Tourist Attractions</a></li>
              </ul>
            </div>
            <div className="link-footer">
              <h5>Services</h5>
              <ul>
              <li><a href="/portalmanagementsystem">Portal Management System</a></li>
                <li><a href="/portalmobileApp">Mobile Application</a></li>
              </ul>
            </div>
            <div className="link-footer">
              <h5>Contact Us</h5>
              <ul>
                <li><a href="/contact">Contact Form</a></li>
                <li><a href="/privacy">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="down-footer">
        <div className="container">
          <div className="pr-do-fo">
          <div className="reservrd">
          <p>&copy; 2024 Ev Gate. All Rights Reserved. <Link to="/privacy">Privacy Policy</Link> </p>
        </div>
        <div className="social-media">
          <Link target="_blanck" to='https://www.linkedin.com/company/ev-gate/'><FaLinkedinIn /></Link>
          <Link target="_blanck" to='https://twitter.com/evgate_'><FaTwitter /></Link>
          <Link target="_blanck" to='https://www.instagram.com/evgate.charge/'><FaInstagram  /></Link>
        </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
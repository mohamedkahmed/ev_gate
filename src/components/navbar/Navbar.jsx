import { Link, NavLink } from "react-router-dom";
import  { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Navbar.scss";
const Navbar = () => {
  const btn = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const pathName = location.pathname;
  useEffect(() => {
    // scroll to top
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

    // close menu in mobile devices
    const menuBtn = btn.current;
    
    if(menuBtn){
      if(menuBtn.getAttribute('aria-expanded') == 'true'){
        menuBtn?.click();
      }
    }


    // change header padding 
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setScrollPosition(currentPosition);
      
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathName]);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen); 
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <>

<nav className={scrollPosition >= 1 ? "navbar navbar-expand-lg navbar-light show-background" : pathName === "/contact" ? "navbar navbar-expand-lg navbar-light" : pathName === "/privacy" ? "navbar navbar-expand-lg navbar-light" : "navbar navbar-expand-lg navbar-light"}>
  <div className="container">
  <Link className="navbar-brand" to="/">
    {scrollPosition >= 1 ? <img src="/images/logo.svg" alt="logo" /> : pathName === "/contact" ? <img src="/images/dark-logo.svg" alt="logo" /> : pathName === "/privacy" ? <img src="/images/dark-logo.svg" alt="logo" /> : <img src="/images/logo.svg" alt="logo" />}
  </Link>
  <button ref={btn} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className={scrollPosition >= 1 ? "navbar-nav mr-auto" : pathName === "/contact" ? "navbar-nav mr-auto nav-item-single-page" : pathName === "/privacy" ? "navbar-nav mr-auto nav-item-single-page" : "navbar-nav mr-auto"}>
      <li className="nav-item active">
        <NavLink className="nav-link" to="/">Home</NavLink>
      </li>
      <li className={`nav-item dropdown ${dropdownOpen ? 'show' : ''}`}>
        <Link className="nav-link dropdown-toggle" to="#" role="button" data-toggle="dropdown" aria-expanded="false">
        EV Gate
        </Link>
        <div className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
          <NavLink className="dropdown-item" to="/about" onClick={closeDropdown}>About Us</NavLink>
          <a className="dropdown-item" href="/about#ceoSection" onClick={closeDropdown}>CEO</a>
          <a className="dropdown-item" href="/about#vission" onClick={closeDropdown}>Vision</a>
          <a className="dropdown-item" href="/about#mission" onClick={closeDropdown}>Mission</a>
          <a className="dropdown-item" href="/about#our-team" onClick={closeDropdown}>Team</a>
        </div>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/solutions" onClick={closeDropdown}>Solutions</NavLink>
      </li>
      <li className={`nav-item dropdown ${dropdownOpen ? 'show' : ''}`}>
        <Link className="nav-link dropdown-toggle" to="#" role="button" data-toggle="dropdown" aria-expanded="false">
        Services
        </Link>
        <div className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
          <NavLink className="dropdown-item" to="/portalmanagementsystem" onClick={closeDropdown}>Portal management system</NavLink>
          <NavLink className="dropdown-item" to="/portalmobileApp" onClick={closeDropdown}>Mobile Application</NavLink>
        </div>
      </li>
      <li className={`nav-item dropdown ${dropdownOpen ? 'show' : ''}`}>
                <NavLink
                  className="nav-link dropdown-toggle"
                  to="/ourCompanies"
                  onClick={closeDropdown}
                  role="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                Our Companies
                </NavLink>
                <div className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
                  <a onClick={closeDropdown} className="dropdown-item" href="/ourCompanies#sara-digital">
                  
                  Sara Digital & Solution

                  </a>
                  <a onClick={closeDropdown} className="dropdown-item" href="/ourCompanies#sara-engineering">
                  
                  Sara Engineering and Energy
                  </a>
                  <a onClick={closeDropdown} className="dropdown-item" href="/ourCompanies#sara-Electrical">
                  Sara Electrical Supplies
                  </a>
                </div>
              </li>

      <li className="nav-item">
                <NavLink onClick={closeDropdown} className="nav-link" to="/news">
                  news
                </NavLink>
              </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/contact">contact us</NavLink>
      </li>
    </ul>
    <div className="login">
      <a data-aos="fade-left" target="_blanck" href="http://portal.evgate.com/">login</a>
    </div>
  </div>
  </div>
</nav>
    </>
  );
};

export default Navbar;

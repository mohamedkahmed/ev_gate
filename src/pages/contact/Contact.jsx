import React, { useState, useEffect } from "react";
import { CiMail } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram  } from "react-icons/fa";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useFetchContactUs } from "../../components/fetchData/FetchData";
import "./Contact.scss";
import { Link } from "react-router-dom";
import {Loading} from "../../components";

const Contact = () => {
  const { loading, contactLinks } = useFetchContactUs();
  const [customer_data, setcustomer_data] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const navigate = useNavigate();
  const isSubmitting = navigate.state === "submitting";

  if (loading) {
    return (
      <Loading/>
    );
  }

  const inputHandler = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setcustomer_data({ ...customer_data, [id]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.send(
        "service_yn36rpb",
        "template_950z77e",
        customer_data,
        "9kvLwSC9wW1DSu4wy"
      );
      setcustomer_data({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        inquiry_type: "",
        about_here: "",
        message: "",
      });

      toast.success("Thanks for Your Message");
    } catch (error) {
      toast.error(error);
    }
  };
  return (
    <>
      <section className="contact-wrapper">
        <div className="container">
          <div className="contact-title-text">
            <h2>Get in Touch with EV Gate</h2>
            <p>
            We're here to assist you with any inquiries, requests, or feedback you may have. Whether you're looking to start dealing with EV GATE or make a purchase from its products, please do not hesitate to contact us.
            </p>
          </div>
          {contactLinks.map((item) => {
            const { id, email, phone, location } = item;
            return (
              <div className="contact-us-links" key={id}>
                <a href={`mailto:${email}`}>
                  <div data-aos="fade-right" className="link-items-ch">
                    <CiMail />
                    <p>{email}</p>
                  </div>
                </a>
                <a href={`tel:${phone}`}>
                  <div data-aos="fade-down" className="link-items-ch">
                    <BsTelephone />
                    <p>{phone}</p>
                  </div>
                </a>
                <Link target="_blanck" to="https://maps.app.goo.gl/WxGskDcXDCuVp4YL8">
                  <div data-aos="fade-up" className="link-items-ch">
                    <CiLocationOn />
                    <p>{location}</p>
                  </div>
                </Link>
                <div data-aos="fade-right" className="link-items-ch">
                <Link target="_blanck" to='https://www.facebook.com/profile.php?id=61556313935774'><FaFacebookF /></Link>
          <Link target="_blanck" to='https://www.linkedin.com/company/ev-gate/'><FaLinkedinIn /></Link>
          <Link target="_blanck" to='https://twitter.com/evgate_'><FaTwitter /></Link>
          <Link target="_blanck" to='https://www.instagram.com/evgate.charge/'><FaInstagram  /></Link>
       
                </div>
              </div>
            );
          })}
          <div className="contact-title-text py-3">
            <h2>Let's Connect</h2>
            <p>
            We're Excited To Connect With You And Learn More About Your EV Industry Goals. Use The Form Below To Get In Touch With Us. Whether You're A Prospective Client, Partner, Or Simply Curious About Our Services, We're Here To Answer Your Questions And Provide The Assistance You Need.
            </p>
          </div>

          {/* form section */}
          <form className="form-section py-5" onSubmit={handleFormSubmit}>
            <div className="up main-parent">
              <div>
                <label>First Name</label>
                <input
                  type="name"
                  name="name"
                  placeholder="Enter First Name"
                  id="first_name"
                  onChange={inputHandler}
                  value={customer_data.first_name}
                  required
                />
              </div>
              <div>
                <label>Last Name</label>
                <input
                  type="name"
                  name="name"
                  onChange={inputHandler}
                  value={customer_data.last_name}
                  id="last_name"
                  placeholder="Enter Last Name"
                  required
                />
              </div>
              <div>
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your Email"
                  onChange={inputHandler}
                  value={customer_data.email}
                  id="email"
                  required
                />
              </div>
            </div>
            <div className="center main-parent">
              <div>
                <label>phone</label>
                <input
                  type="phone"
                  name="phone"
                  placeholder="Enter Phone Number"
                  onChange={inputHandler}
                  value={customer_data.phone}
                  id="phone"
                  required
                />
              </div>
              <div>
                <label>Inquiry Type</label>
                <select required onChange={inputHandler}
                  value={customer_data.inquiry_type}
                  id="inquiry_type">
                  <option value="" disabled selected hidden>
                    Select Inquiry Type
                  </option>
                  <option value="General">General</option>
                  <option value="Partnership">Partnership</option>
                  <option value="Supplier">Supplier</option>
                  <option value="Customer">Customer</option>
                  <option value="Other (Specify)">Other (Specify)</option>
                </select>
              </div>
              <div>
                <label>How Did You Hear About Us?</label>
                <select required onChange={inputHandler}
                  value={customer_data.about_here}
                  id="about_here">
                  <option value="" disabled selected hidden>
                    Select
                  </option>
                  <option value="Search Engine">Search Engine</option>
                  <option value="Social Media">Social Media</option>
                  <option value="Friends and Relatives">Friends and Relatives</option>
                  <option value="Online Advertisement">Online Advertisement</option>
                  <option value="Street Advertisment">Street Advertisment</option>
                </select>
              </div>
            </div>
            <div className="message">
              <label>message</label>
              <textarea
                name="text"
                placeholder="Enter your Message here.."
                onChange={inputHandler}
                id="message"
                value={customer_data.message}
              ></textarea>
            </div>
            <div className="send-dm">
              <div>
                <input
                  required
                  className="check-input"
                  type="checkbox"
                  name="chek"
                />
                I agree with Terms of Use and <Link to="/privacy">Privacy Policy</Link>
              </div>
              <div>
              <button className="submit-input" type="Send Your Message" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Send Your Message"}
              </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;

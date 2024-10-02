import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { FaHome, FaInfo, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Container from "../components/Container";
const Contact = () => {
  return (
    <>
      <Meta title={"Contact"} />
      <BreadCrumb title="Contact" />
      <Container class1="contact-wrapper home-wrapper-2 py-5">
      <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.4867524354436!2d79.99012582473394!3d23.18892527454948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981aec38cb3747f%3A0x59c7d3fbafbb02fa!2sHostel%20no.%207%2C%20GEC%20(JEC)%2C%20Jabalpur%2C%20Central%20Ordinance%20Depot%20Area%2C%20Jabalpur%2C%20Madhya%20Pradesh%20482011!5e0!3m2!1sen!2sin!4v1726594326684!5m2!1sen!2sin"
                height="450"
                className="border-0 w-100"
                allowFullCcreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="col-12 mt-5">
            <div className="contact-inner-wrapper d-flex justify-content-between">
              <div>
                <h3 className="contact-title mb-4">Contact</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <input
                      type="text"
                      placeholder="Name"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email*"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <textarea
                      className="form-control w-100"
                      name=""
                      placeholder="Comment"
                      id=""
                      cols="30"
                      rows="3"
                    ></textarea>
                  </div>
                  <div>
                    <button className="button border-0">Submit</button>
                  </div>
                </form>
              </div>
              <div>
                <h3 className="contact-title mb-4">Get In Touch With Us</h3>
                <div>
                  <ul className="d-flex flex-column p-0 mb-0 gap-15">
                    <li className="d-flex gap-15 align-items-center">
                      <FaHome className="fs-5h"/>
                      <p className="mb-0">Hostel - 07, Jabalpur Enginnering College, Gokalpur, Jabalpur, M.P., India</p>                      
                    </li>
                    <li className="d-flex gap-15 align-items-center">
                      <FaPhoneAlt className="fs-5h"/>
                      <p className="mb-0">+91-7566650644</p>
                    </li>
                    <li className="d-flex gap-15 align-items-center">
                      <MdEmail className="fs-5h"/>
                      <p className="mb-0">ghanshyampatidar3011@gmail.com</p>
                    </li>
                    <li className="d-flex gap-15 align-items-center">
                      <FaInfo className="fs-5h"/>
                      <p className="mb-0">Monday - Friday 10AM - 6PM</p>                      
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div></div>
          </div>
      </Container>
    </>
  );
};

export default Contact;

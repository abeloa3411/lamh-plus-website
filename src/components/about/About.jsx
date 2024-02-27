import React from "react";
import { AboutContainer, AboutH2, AboutRow, Service } from "./AboutStyles";
import { BsGraphUpArrow } from "react-icons/bs";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlinePriceChange } from "react-icons/md";

const About = () => {
  return (
    <>
      <AboutContainer class="container">
        <AboutH2>Why Choose US</AboutH2>
        <AboutRow>
          <Service>
            <BsGraphUpArrow
              style={{ fontSize: "100px", marginBottom: "2rem" }}
            />
            <h3 style={{ marginBottom: "2rem" }}>Service Quality</h3>
            <ul>
              <li>Reduced customer effort</li>
              <li>Pro active shipment monitoring</li>
              <li>Delivering on our commitments</li>
            </ul>
          </Service>
          <Service>
            <RiCustomerService2Fill
              style={{ fontSize: "100px", marginBottom: "2rem" }}
            />
            <h3 style={{ marginBottom: "2rem" }}>Customer Expirience</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </Service>
          <Service>
            <MdOutlinePriceChange
              style={{ fontSize: "100px", marginBottom: "2rem" }}
            />
            <h3 style={{ marginBottom: "2rem" }}>Pricing</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </Service>
        </AboutRow>
      </AboutContainer>
    </>
  );
};

export default About;

import React from "react";
import { AboutContainer, AboutH2, AboutRow, Service } from "./AboutStyles";
import { GiWorld } from "react-icons/gi";
import { FaWarehouse } from "react-icons/fa";
import { MdOutlinePriceChange } from "react-icons/md";

const About = () => {
  return (
    <>
      <AboutContainer class="container">
        <AboutH2>Why Choose US</AboutH2>
        <AboutRow>
          <Service>
            <GiWorld style={{ fontSize: "100px", marginBottom: "2rem" }} />
            <h3 style={{ marginBottom: "2rem" }}>Worldwide netword</h3>
            <p>
              At lamh plus world wide we we have a network of 200+ countries
              worldwide
            </p>
          </Service>
          <Service>
            <FaWarehouse style={{ fontSize: "100px", marginBottom: "2rem" }} />
            <h3 style={{ marginBottom: "2rem" }}>
              Logistic management services
            </h3>
            <p>We provide logistic management services worldwide</p>
          </Service>
          <Service>
            <MdOutlinePriceChange
              style={{ fontSize: "100px", marginBottom: "2rem" }}
            />
            <h3 style={{ marginBottom: "2rem" }}>Pricing Flexibility</h3>
            <p>
              At lamh plus worldwide we provide flexible costing , cost
              advantage and value based approach
            </p>
          </Service>
        </AboutRow>
      </AboutContainer>
    </>
  );
};

export default About;

import React from "react";
import {
  AboutContainer,
  AboutH2,
  AboutRow,
  AboutUsContainer,
  AboutUsContent,
  Content,
  Image,
  ImageContainer,
  InnerContainer,
  Service,
} from "./AboutStyles";
import { GiWorld } from "react-icons/gi";
import { FaWarehouse } from "react-icons/fa";
import { MdOutlinePriceChange } from "react-icons/md";
import img from "../../assets/images/lamh.jpg";

const About = () => {
  return (
    <>
      <AboutContainer>
        <AboutUsContainer>
          <AboutH2>Know more About Us</AboutH2>
          <InnerContainer>
            <ImageContainer>
              <Image src={img} />
            </ImageContainer>
            <AboutUsContent>
              <Content>
                LAMH PLUS WORLDWIDE is Independently owned and was founded by
                professionals who have experience of over 30 years in the
                Courier & Logistics Industry. Whether your consignment is one
                box, one pallet or a full trailer load, we have a service for
                you that can transport your goods quickly and efficiently
                regardless of destination. We offer daily and weekly departures
                to and from the UAE from all of Asia, Europe, Gulf and the
                Baltic states. We have built up an extensive network of overseas
                agents in more than 160 countries. This, combined with the
                latest technology and up to date transport methods, allows us to
                offer you a comprehensive personal service, that is seamless
                and, more importantly, cost effective. LAMH PLUS WORLDWIDE is
                also a sister concern of Lamh Allail International Express
                Services which was founded in 2019, with offices across the
                Middle East.
              </Content>
            </AboutUsContent>
          </InnerContainer>
        </AboutUsContainer>
        <div>
          <AboutH2>Why Choose US</AboutH2>
          <AboutRow>
            <Service>
              <GiWorld style={{ fontSize: "100px", marginBottom: "2rem" }} />
              <h3 style={{ marginBottom: "2rem" }}>Worldwide network</h3>
              <p>
                At lamh plus world wide we we have a network of 200+ countries
                worldwide
              </p>
            </Service>
            <Service>
              <FaWarehouse
                style={{ fontSize: "100px", marginBottom: "2rem" }}
              />
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
        </div>
      </AboutContainer>
    </>
  );
};

export default About;

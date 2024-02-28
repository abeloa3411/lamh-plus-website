import React from "react";
import {
  Li,
  Service,
  ServiceContainer,
  ServiceH2,
  ServiceRow,
  ServiceUl,
} from "./ServicesStyles";
import img from "../../assets/images/service.jpg";
import {
  BackgroundImg,
  HeroContainer,
  InnerContainer,
} from "../hero/HeroStyles";

const Services = () => {
  return (
    <>
      <HeroContainer>
        <InnerContainer>
          <BackgroundImg src={img} />

          <ServiceContainer>
            <ServiceH2>Our Services</ServiceH2>
            <ServiceRow>
              <Service>
                <h3 style={{ marginBottom: "2rem" }}>
                  Internationa Express Export & Import
                </h3>
                <ServiceUl>
                  <Li>
                    offers the most comprehensive logistical solutions 24 x 7
                  </Li>
                  <Li>
                    Our association & tie-ups with DHL, FedEx & UPS ensure a
                    worldwide reach of 220+ countries
                  </Li>
                  <Li>
                    Our digital platforms ensure real-time proactive tracking
                    and monitoring of your package until delivery
                  </Li>
                  <Li>Shipment reports are customized as per your needs</Li>
                </ServiceUl>
              </Service>
              <Service>
                <h3 style={{ marginBottom: "2rem" }}>Road Transport</h3>
                <ServiceUl>
                  <Li>
                    Highly efficient road transport service within the GCC for
                    both FCL & LCL
                  </Li>
                  <Li>
                    Facilitation of customs clearance at the borders for a
                    hassle-free delivery
                  </Li>
                  <Li> Real time visibility of your shipments</Li>
                </ServiceUl>
              </Service>
              <Service>
                <h3 style={{ marginBottom: "2rem" }}>Domestic Services</h3>
                <ServiceUl>
                  <Li>
                    Same-day delivery or Next-day delivery services within the
                    UAE
                  </Li>
                  <Li>Order a pickup within an hour or at a pre-agreed time</Li>
                  <Li>Proactive monitoring of shipments</Li>
                </ServiceUl>
              </Service>
              <Service>
                <h3 style={{ marginBottom: "2rem" }}>
                  Wharehousing & Logistics
                </h3>
                <ServiceUl>
                  <Li>Cost-effective</Li>
                  <Li>
                    Advanced infrastructure in terms of facilities and
                    warehousing technology
                  </Li>
                  <Li>
                    We manage all your documentation and customs processing
                    requirements throughout
                  </Li>
                  <li>
                    warehousing solutions State-of-the-art tracking systems
                    until the final delivery mile
                  </li>
                </ServiceUl>
              </Service>
            </ServiceRow>
          </ServiceContainer>
        </InnerContainer>
      </HeroContainer>
    </>
  );
};

export default Services;

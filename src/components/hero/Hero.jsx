import React from "react";
import img from "../../assets/images/bg.jpg";
import img1 from "../../assets/images/flight.png";
import {
  BackgroundImg,
  Button,
  ContentContainer,
  ContentText,
  HeroContainer,
  Image,
  InnerContainer,
  InputContainer,
  TextContainer,
} from "./HeroStyles";

const Hero = () => {
  return (
    <HeroContainer>
      <InnerContainer>
        <BackgroundImg src={img} />
        <ContentContainer>
          <ContentText>
            <TextContainer>
              <h1 style={{ fontSize: "40px" }}>Logistic Deliveries</h1>
              <h1 style={{ fontSize: "35px" }}>Aroung the world</h1>
            </TextContainer>
            <Button style={{ width: "40%" }}>our services</Button>
          </ContentText>
          <InputContainer>
            <Image src={img1} />
          </InputContainer>
        </ContentContainer>
      </InnerContainer>
    </HeroContainer>
  );
};

export default Hero;

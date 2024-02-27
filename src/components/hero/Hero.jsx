import React from "react";
import img from "../../assets/images/background.jpg";
import {
  BackgroundImg,
  Button,
  ContentContainer,
  ContentText,
  HeroContainer,
  InnerContainer,
  Input,
  InputContainer,
  InputDiv,
  InputForm,
  InputHeader,
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
            <InputHeader>
              <h2>Inquire now</h2>
              <p>We will get to you within 24hrs</p>
            </InputHeader>
            <InputForm>
              <InputDiv>
                <label htmlFor="name">Name</label>
                <Input type="text" />
              </InputDiv>
              <InputDiv>
                <label htmlFor="email">Email</label>
                <Input type="text" />
              </InputDiv>
              <InputDiv>
                <label htmlFor="text">Message</label>
                <Input type="text" />
              </InputDiv>
              <Button type="submit">send</Button>
            </InputForm>
          </InputContainer>
        </ContentContainer>
      </InnerContainer>
    </HeroContainer>
  );
};

export default Hero;

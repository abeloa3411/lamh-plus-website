import React from "react";
import {
  FooterColumn,
  FooterContainer,
  FooterH4,
  FooterLi,
  FooterLink,
  FooterUl,
  InnerContainer,
  SocialLinks,
} from "./FooterStyles";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <InnerContainer>
          <FooterColumn class="footer-col">
            <FooterH4>Lamh Plus Worldwide</FooterH4>
            <FooterUl>
              <FooterLi>
                <FooterLink href="#">about us</FooterLink>
              </FooterLi>
              <FooterLi>
                <FooterLink href="#">our services</FooterLink>
              </FooterLi>
              <FooterLi>
                <FooterLink href="#">privacy policy</FooterLink>
              </FooterLi>
              <FooterLi>
                <FooterLink href="#">visit website</FooterLink>
              </FooterLi>
            </FooterUl>
          </FooterColumn>
          <FooterColumn>
            <FooterH4>get help</FooterH4>
            <FooterUl>
              <FooterLi>
                <FooterLink href="#">FAQ</FooterLink>
              </FooterLi>
              <FooterLi>
                <FooterLink href="#">shipping</FooterLink>
              </FooterLi>
              <FooterLi>
                <FooterLink href="#">returns</FooterLink>
              </FooterLi>
              <FooterLi>
                <FooterLink href="#">order status</FooterLink>
              </FooterLi>
              <FooterLi>
                <FooterLink href="#">payment options</FooterLink>
              </FooterLi>
            </FooterUl>
          </FooterColumn>
          <FooterColumn>
            <FooterH4>online shop</FooterH4>
            <FooterUl>
              <FooterLi>
                <FooterLink href="#">download</FooterLink>
              </FooterLi>
              <FooterLi>
                <FooterLink href="#">changelog</FooterLink>
              </FooterLi>
              <FooterLi>
                <FooterLink href="#">github</FooterLink>
              </FooterLi>
              <FooterLi>
                <FooterLink href="#">all version</FooterLink>
              </FooterLi>
            </FooterUl>
          </FooterColumn>
          <FooterColumn>
            <FooterH4>follow us</FooterH4>
            <div class="social-links">
              <SocialLinks href="#">
                <FaFacebook />
              </SocialLinks>
              <SocialLinks href="#">
                <FaTwitter />
              </SocialLinks>
              <SocialLinks href="#">
                <FaInstagram />
              </SocialLinks>
              <SocialLinks href="#">
                <FaLinkedin />
              </SocialLinks>
            </div>
          </FooterColumn>
        </InnerContainer>
      </FooterContainer>
    </>
  );
};

export default Footer;

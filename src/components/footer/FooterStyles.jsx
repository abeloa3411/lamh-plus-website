import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #151515;
  padding: 80px 0;
`;

export const InnerContainer = styled.div`
  max-width: 1170px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
`;

export const FooterColumn = styled.div`
  width: 25%;
  padding: 0 15px;

  @media (max-width: 767px) {
    width: 50%;
    margin-bottom: 30px;
  }

  @media (max-width: 574px) {
    width: 100%;
  }
`;

export const FooterH4 = styled.h4`
  font-size: 18px;
  color: #fff;
  text-transform: capitalize;
  margin-bottom: 35px;
  font-weight: 500;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -10px;
    background-color: #e91e63;
    width: 50px;
    height: 2px;
  }
`;

export const FooterLink = styled.a`
  color: #ddd;
  display: block;
  font-size: 1rem;
  font-weight: 300;
  text-transform: capitalize;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    color: #fff;
    padding-left: 7px;
  }
`;

export const SocialLinks = styled.a`
  color: #fff;
  background-color: rgba(255, 255, 255, 0.2);
  display: inline-block;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  text-align: center;
  margin: 0 10px 10px 0;
  line-height: 40px;
  transition: all 0.5s ease;

  &:hover {
    color: #151515;
    background-color: #fff;
  }
`;

export const FooterLi = styled.ul`
  margin-bottom: 10px;
`;
export const FooterUl = styled.ul`
  list-style: none;
`;

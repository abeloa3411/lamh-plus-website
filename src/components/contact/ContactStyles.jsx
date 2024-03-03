import { styled } from "styled-components";

export const ContactContainer = styled.section`
  width: 100%;
`;

export const MainForm = styled.div`
  padding: 4rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const MainWrapper = styled.div`
  border-radius: 10px;
  padding: 45px;
  box-shadow: 0 0 5px 5px #00000020;
  backdrop-filter: blur(5px);
  background-color: #ffffff85;
  @media screen and (max-width: 991px) {
    width: 70%;
  }
  @media screen and (max-width: 767px) {
    width: 90%;
  }
`;

export const MainHead = styled.h2`
  font-size: 30px;
  line-height: 40px;
  font-weight: 600;
  text-align: center;
  margin: 0px 0 25px;
`;

export const FormInput = styled.input`
  padding: 20px 25px 15px;
  width: 100%;
  border: 1px solid $color-black;
  border-radius: 5px;
  background: transparent;
  outline: none;
  font-size: 20px;
  line-height: 30px;
  font-weight: 400;
  box-sizing: border-box;
`;

export const FormLabel = styled.label`
  pointer-events: none;
  transition: 0.3s;
  margin: 0;
  font-size: 18px;
  line-height: 28px;
  font-weight: 500;
`;

export const Button = styled.button`
  color: white;
  padding: 0.5rem 1.5rem;
  cursor: pointer;
  font-size: 1.2rem;
  background: linear-gradient(to right, #ff5f1f, #871f78);
  border: none;
  border-radius: 4px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

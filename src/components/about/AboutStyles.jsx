import styled from "styled-components";

export const AboutContainer = styled.section`
  width: 100%;
  padding: 0 8%;
  margin-bottom: 5rem;
`;

export const AboutH2 = styled.h2`
  text-align: center;
  padding-top: 6%;
  margin-bottom: 60px;
  font-size: 1.8rem;
  font-weight: 600;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 5px;
    background-color: #e91e63;
    border-radius: 20px;
  }
`;

export const AboutRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
`;

export const Service = styled.div`
  padding: 25px 15px;
  background: transparent;
  font-size: 15px;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    color: #fff;
    background-color: #151515;
    transform: scale(1.05);
  }
`;

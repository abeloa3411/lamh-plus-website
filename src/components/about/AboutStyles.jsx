import styled from "styled-components";

export const AboutContainer = styled.section`
  width: 100%;
  padding: 0 8%;
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;

  @media screen and(max-width: 768px) {
  }
`;
export const AboutUsContainer = styled.div`
  width: 100%;
`;

export const InnerContainer = styled.div`
  display: flex;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const ImageContainer = styled.div`
  padding: 2rem;
`;

export const Image = styled.img`
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const AboutUsContent = styled.div``;
export const Content = styled.p`
  padding: 2rem;
  line-height: 30px;
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
    background-color: #ff5f1f;
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
    background-color: #ff5f1f;
    transform: scale(1.05);
  }
`;

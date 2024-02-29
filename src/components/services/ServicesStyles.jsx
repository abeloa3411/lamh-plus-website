import styled from "styled-components";

export const ServiceContainer = styled.section`
  width: 100%;
  padding: 0 8%;
  margin-bottom: 5rem;
  position: absolute;
  top: 0;
  left: 0;
  color: white;
`;

export const ServiceH2 = styled.h2`
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

export const ServiceRow = styled.div`
  display: flex;
  justify-content: center;

  @media screen And (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Service = styled.div`
  padding: 25px 15px;
  background: #ff5f1f;
  font-size: 15px;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  transition: 0.5s;
  width: 250px;
  margin-right: 2rem;

  &:hover {
    color: #000;
    background-color: #fff;
    transform: scale(1.05);
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 2rem;
    width: 100%;
  }
`;

export const ServiceUl = styled.ul`
  list-style: circle;
`;
export const Li = styled.li`
  margin-bottom: 10px;
`;
export const ServiceOuterContainer = styled.section`
  width: 100%;
`;
export const ServiceInnerContainer = styled.div`
  position: relative;
  height: 100%;
`;
export const ServiceBackgroundImg = styled.img`
  width: 100%;
  height: 85vh;
  object-fit: cover;
  background-position: center;

  @media screen and (max-width: 768px) {
    height: 230vh;
  }
`;

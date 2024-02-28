import styled from "styled-components";

export const HeroContainer = styled.section`
  width: 100%;
`;

export const InnerContainer = styled.div`
  position: relative;
`;
export const BackgroundImg = styled.img`
  width: 100%;
  height: 85vh;
  object-fit: cover;
  background-position: center;
`;

export const ContentContainer = styled.div`
  position: absolute;
  top: 5%;
  left: 50%;
  transform: translate(-50%, 30%);
  color: white;
  width: 80%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 50vh;
`;
export const ContentText = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const TextContainer = styled.div`
  margin-bottom: 20px;
`;
export const Text = styled.h1``;
export const Button = styled.button`
  color: white;
  padding: 0.75rem 2.5rem;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.2rem;
  background: linear-gradient(to right, #ff416c, #ff4b2b);
  border: none;
  border-radius: 10px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;
export const InputContainer = styled.div``;

export const Image = styled.img`
  width: 100%;
`;

import {
  HeaderContainer,
  InnerContainer,
  Logo,
  LogoContainer,
  Nav,
  NavContainer,
  NavMenu,
  NavMenuItem,
} from "./HeaderStyles";
import logoImg from "../../assets/images/lamh.jpg";

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <InnerContainer>
          <LogoContainer>
            <Logo src={logoImg} />
          </LogoContainer>
          <NavContainer>
            <Nav>
              <NavMenu>
                <NavMenuItem>Track Shipment</NavMenuItem>
              </NavMenu>
            </Nav>
          </NavContainer>
        </InnerContainer>
      </HeaderContainer>
    </>
  );
};

export default Header;

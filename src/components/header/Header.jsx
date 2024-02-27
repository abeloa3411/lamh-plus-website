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

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <InnerContainer>
          <LogoContainer>
            <Logo>LAMH PLUS WORLDWIDE</Logo>
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

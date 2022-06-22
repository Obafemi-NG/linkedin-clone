import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/images/login-logo.svg";

const LandingPage = () => {
  return (
    <Container>
      <Nav>
        <Logo>
          <Link to="/">
            <img src={logo} alt="linkedin-logo" />
          </Link>
        </Logo>
        <AccessLink>
          <Join> Join now </Join>
          <Login> Sign in </Login>
        </AccessLink>
      </Nav>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

const Nav = styled.nav`
  padding: 5px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.div`
  width: 100px;
`;
const AccessLink = styled.div`
  display: flex;
`;
const Join = styled.div`
  padding: 10px 18px;
  font-family: sans-serif;
  font-weight: 600;
  color: #73777b;
  &:hover {
    background-color: #dfdfde;
    border-radius: 40px;
    cursor: pointer;
  }
`;
const Login = styled.div`
  margin-left: 10px;
  padding: 10px 18px;
  color: #0072b1;
  border: 1px solid #0072b1;
  border-radius: 40px;
  font-weight: 600;
  font-family: sans-serif;
  &:hover {
    cursor: pointer;
  }
`;
export default LandingPage;

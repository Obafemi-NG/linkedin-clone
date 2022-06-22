import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/images/login-logo.svg";
import drawing from "../../assets/images/login-hero.svg";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Nav>
        <Logo>
          <Link to="/">
            <img src={logo} alt="linkedin-logo" />
          </Link>
        </Logo>
        <AccessLink>
          <Join
            onClick={() => {
              navigate("/signup");
            }}
          >
            {" "}
            Join now{" "}
          </Join>
          <Login
            onClick={() => {
              navigate("/login");
            }}
          >
            {" "}
            Sign in{" "}
          </Login>
        </AccessLink>
      </Nav>
      <BodySection>
        <Hero>
          <Heading>
            Welcome to your <br /> professional community
          </Heading>
          <Illustration>
            <img src={drawing} alt="illustration" />
          </Illustration>
        </Hero>
      </BodySection>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  @media (max-width: 768px) {
    overflow-x: hidden;
  }
`;

const Nav = styled.nav`
  padding: 12px 16px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  max-width: 1128px;
  margin: auto;
`;
const Logo = styled.div`
  width: 135px;
  @media (max-width: 768px) {
    width: 100px;
  }
  @media (max-width: 480px) {
    width: 90px;
  }
`;
const AccessLink = styled.div`
  display: flex;
  justify-content: flex-end;
  column-gap: 8px;
`;
const Join = styled.div`
  padding: 10px 18px;
  font-family: sans-serif;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.9);
  &:hover {
    background-color: #dfdfde;
    border-radius: 40px;
    cursor: pointer;
  }
  @media (max-width: 480px) {
    font-weight: 400;
  }
`;
const Login = styled.div`
  padding: 10px 18px;
  color: #0072b1;
  border: 1px solid #0072b1;
  border-radius: 40px;
  font-weight: 600;
  font-family: sans-serif;
  transition: all 0.5s;
  &:hover {
    cursor: pointer;
    background-color: #0073b114;
  }
  @media (max-width: 480px) {
    font-weight: 500;
  }
`;

const BodySection = styled.section`
  display: flex;
  max-width: 1128px;
  margin: auto;
  width: 100%;
  position: relative;
  padding: 150px 0px;
  align-items: center;
  flex-wrap: wrap;
  align-content: flex-start;
`;

const Hero = styled.div`
  position: absolute;
  width: 100%;
  top: 40px;
`;
const Heading = styled.div`
  font-size: 56px;
  font-family: "montserrat", sans-serif;
  font-weight: 200;
  letter-spacing: -2px;
  color: #8f5849;
  width: 65%;
  z-index: 5;
  @media (min-width: 481px) and (max-width: 768px) {
    width: 100%;
    margin-bottom: 30px;
    font-size: 46px;
    padding-left: 16px;
  }
  @media (max-width: 480px) {
    margin: auto;
    text-align: left;
    font-size: 32px;
    font-weight: 300;
    width: 100%;
    margin-bottom: 30px;
    padding-left: 16px;
  }
`;
const Illustration = styled.div`
  width: 600px;
  height: 460px;
  position: absolute;
  right: -120px;
  top: 0px;
  z-index: -1;
  @media (min-width: 481px) and (max-width: 768px) {
    margin: auto;
    right: 0;
    width: 480px;
    height: 520px;
    left: 0;
    margin: auto;
    top: 200px;
  }
  @media (max-width: 480px) {
    right: 0;
    left: 0;
    margin: auto;
    top: 120px;
    padding-top: 10px;
    width: 380px;
    height: 520px;
  }
`;

export default LandingPage;

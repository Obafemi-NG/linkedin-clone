import styled from "styled-components";
import logo from "../../assets/images/login-logo.svg";
import { useNavigate } from "react-router-dom";
import googleLogo from "../../assets/images/google.svg";

const SignUpPage = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Header>
        <img
          src={logo}
          alt="logo"
          onClick={() => {
            navigate("/");
          }}
        />
      </Header>
      <Content>
        <h1> Make the most of your professional life </h1>
        <FormContainer>
          <Form>
            <label> Email Address </label>
            <input type="email" name="email" />
          </Form>
          <Form>
            <label> Password </label>
            <input type="password" name="password" />
          </Form>
          <Terms>
            {" "}
            By clicking Agree & Join, you agree to the LinkedIn{" "}
            <span>
              User <br /> Agreement, Privacy Policy
            </span>
            , and <span>Cookie Policy</span>.{" "}
          </Terms>
          <JoinBtn> Agree & Join </JoinBtn>
          <FormFooter>
            <h3>or</h3>
            <Google>
              {" "}
              Sign in with google <img src={googleLogo} alt="google" />{" "}
            </Google>
            <Existing>
              Already on LinkedIn?{" "}
              <span
                onClick={() => {
                  navigate("/login");
                }}
              >
                {" "}
                Log in{" "}
              </span>
            </Existing>
          </FormFooter>
        </FormContainer>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
const Header = styled.div`
  width: 100%;
  max-width: 1128px;
  padding: 16px 16px 20px;
  display: flex;
  margin: auto;
  img {
    width: 135px;
    &:hover {
      cursor: pointer;
    }
  }
`;
const Content = styled.div`
  margin: auto;
  width: 600px;
  height: fit-content;
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 15px;
  h1 {
    font-family: sans-serif;
    font-size: 32px;
    font-weight: 400;
  }
`;
const FormContainer = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  padding: 15px 0px;
  align-items: center;
  min-height: 400px;
  margin-top: 30px;
  border-radius: 10px;
  background-color: #ffffff;
`;
const Form = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  padding-bottom: 15px;
  label {
    margin-bottom: 5px;
    font-size: 16px;
    font-family: sans-serif;
    color: #5b5b5b;
    font-weight: 300;
  }
  input {
    height: 25px;
    outline: none;
    border: 1px solid darkray;
    &:focus {
      border-radius: 5px;
    }
  }
`;
const Terms = styled.p`
  font-weight: 300;
  font-size: 12px;
  font-family: sans-serif;
  text-align: center;
  padding-top: 20px;
  span {
    font-weight: 600;
    color: #0072b1;
  }
`;
const JoinBtn = styled.button`
  width: 90%;
  margin-top: 20px;
  padding: 15px 30px;
  font-size: 18px;
  background-color: #0072b1;
  color: white;
  font-weight: 500;
  border-radius: 40px;
  border: none;
  transition: all 0.3s;
  &:hover {
    cursor: pointer;
    background-color: #046497;
  }
`;

const FormFooter = styled.div`
  border-top: 1px solid darkgray;
  width: 80%;
  margin-top: 30px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    position: absolute;
    top: -11px;
    font-family: sans-serif;
    font-weight: 400;
    color: #515151;
    background-color: white;
    padding: 0px 30px;
  }
`;
const Google = styled.div`
  width: 90%;
  margin-top: 20px;
  display: flex;
  align-items: center;
  border: 1px solid #0072b1;
  padding: 10px 15px;
  border-radius: 40px;
  font-size: 16px;
  font-family: sans-serif;
  color: #0072b1;
  justify-content: space-between;
  transition: all 0.3s;
  &:hover {
    cursor: pointer;
    background-color: #0073b121;
  }
`;

const Existing = styled.div`
  margin-top: 20px;
  font-weight: 400;
  font-size: 16px;
  color: #5c5c5c;
  font-family: sans-serif;
  span {
    font-weight: 600;
    color: #0072b1;
    &:hover {
      cursor: pointer;
    }
  }
`;

export default SignUpPage;

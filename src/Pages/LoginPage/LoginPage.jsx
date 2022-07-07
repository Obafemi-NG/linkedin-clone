import styled from "styled-components";
import logo from "../../assets/images/login-logo.svg";
import { useNavigate } from "react-router-dom";
import userIcon from "../../assets/images/user.svg";
import googleLogo from "../../assets/images/google.svg";
import { useState } from "react";
import { firebaseApp } from "../../firebase/firebase.utils";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const LoginPage = () => {
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });
  const [emailIsTouched, setEmailIsTouched] = useState(false);
  const [passwordIsTouched, setPasswordIsTouched] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };
  const { email, password } = formValue;
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValue);
    const authentication = getAuth(firebaseApp);
    if (email && password) {
      signInWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          console.log(response);
          sessionStorage.setItem(
            "user auth",
            response._tokenResponse.refreshToken
          );
          navigate("/home");
          // localStorage.setItem('Auth Token')
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
      prompt: "select_account",
    });
    const authentication = getAuth();
    signInWithPopup(authentication, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        console.log(token);
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.code, error.message);
      });
  };
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
      <FormContainer>
        <Icon>
          <img src={userIcon} alt="" />
        </Icon>
        <Form>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            onBlur={() => {
              setEmailIsTouched(true);
            }}
            focus={emailIsTouched.toString()}
            required
          />
          <label> Email address </label>
          {emailIsTouched && (
            <Error> please provide a valid email address </Error>
          )}
        </Form>
        <Form>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={password}
            onBlur={() => {
              setPasswordIsTouched(true);
            }}
            focus={passwordIsTouched.toString()}
            required
          />{" "}
          <label> Password </label>
          {passwordIsTouched && <Error> Please enter a valid password </Error>}
        </Form>
        <Forgot>
          <h2> Forgot password? </h2>
        </Forgot>
        <SignInBtn onClick={handleSubmit}> Sign in</SignInBtn>
        <FormFooter>
          <h3>or</h3>
          <Google onClick={handleGoogleSignIn}>
            {" "}
            <img src={googleLogo} alt="google" />
            Sign in with google{" "}
          </Google>
          <NewUser>
            Do not have an account yet?{" "}
            <span
              onClick={() => {
                navigate("/signup");
              }}
            >
              {" "}
              Sign up{" "}
            </span>
          </NewUser>
        </FormFooter>
      </FormContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
  @media (max-width: 768px) {
    overflow-x: hidden;
  }
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
    @media (max-width: 768px) {
      width: 100px;
    }
  }
`;

const FormContainer = styled.div`
  width: 400px;
  margin: auto;
  display: flex;
  flex-direction: column;
  padding: 15px 0px;
  align-items: center;
  min-height: 450px;
  margin-top: 0px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 1px 1px 12px -3px rgba(176, 172, 172, 0.75);
  -webkit-box-shadow: 1px 1px 12px -3px rgba(176, 172, 172, 0.75);
  -moz-box-shadow: 1px 1px 12px -3px rgba(176, 172, 172, 0.75);
  @media (max-width: 768px) {
    box-shadow: none;
    margin-top: 20px;
  }
  h2 {
    color: #0072b1;
    padding: 7px;
    border-radius: 20px;
    font-family: "montserrat", sans-serif;
    font-weight: 600;
    width: 40%;
    letter-spacing: -1px;
    &:hover {
      background-color: #0073b142;
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;
const Icon = styled.div`
  img {
    height: 60px;
    width: 60px;
    border-radius: 50%;
    margin-bottom: 20px;
  }
`;
const Form = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  padding-bottom: 15px;
  @media (max-width: 480px) {
    margin-bottom: 15px;
  }
  input {
    height: 40px;
    position: relative;
    outline: none;
    font-size: 16px;
    padding-left: 20px;
    padding-top: 10px;
    border: 1px solid black;
    background-color: transparent;
    border-radius: 10px;
    &:focus {
      border: 2px solid #0072b1;
      background-color: #0073b121;
    }
    &:focus ~ label {
      margin-top: 5px;
      font-size: 12px;
      color: black;
    }
    &:valid ~ label {
      margin-top: 5px;
      font-size: 12px;
      color: black;
      font-weight: 300;
    }
    &[type="password"] {
      letter-spacing: 4px;
    }
    &:invalid[focus="true"] {
      border: 1.5px solid red;
      background-color: #ff00001b;
    }
    &:invalid ~ span {
      display: block;
    }
  }
  label {
    font-size: 18px;
    font-family: sans-serif;
    color: #5b5b5b;
    font-weight: 300;
    position: absolute;
    padding-left: 10px;
    margin-top: 15px;
    transition: all 0.3s;
    @media (max-width: 480px) {
      margin-top: 25px;
    }
  }
`;

const Error = styled.span`
  color: red;
  font-size: 10px;
  padding-top: 3px;
  display: none;
  font-family: sans-serif;
  font-weight: 200;
`;
const Forgot = styled.div`
  width: 90%;
`;
const SignInBtn = styled.button`
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
  justify-content: center;
  transition: all 0.3s;
  &:hover {
    cursor: pointer;
    background-color: #0073b121;
  }
  img {
    padding-right: 10px;
  }
`;

const NewUser = styled.div`
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

export default LoginPage;

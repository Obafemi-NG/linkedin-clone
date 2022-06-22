import styled from "styled-components";
import logo from "../../assets/images/login-logo.svg";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
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
      {/* <Content> */}
      <FormContainer></FormContainer>
      {/* </Content> */}
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
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
// const Content = styled.div`
//   margin: auto;
//   width: 600px;
//   height: fit-content;
//   margin-top: 5px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   border: 1px solid red;
//   padding: 10px 15px;
//   h1 {
//     font-family: sans-serif;
//     font-size: 32px;
//     font-weight: 400;
//   }
// `;
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
`;
export default LoginPage;

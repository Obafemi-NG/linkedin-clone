import styled from "styled-components";
import logo from "../../assets/images/home-logo.svg";
import React from "react";
import searchIcon from "../../assets/images/search-icon.svg";
import menu from "../../assets/images/nav-work.svg";
import notification from "../../assets/images/nav-notifications.svg";
import messaging from "../../assets/images/nav-messaging.svg";
import jobs from "../../assets/images/nav-jobs.svg";
import network from "../../assets/images/nav-network.svg";
import home from "../../assets/images/nav-home.svg";

const Header = () => {
  return (
    <Container>
      <Content>
        <RightSection>
          <Logo>
            <img src={logo} alt="" />
          </Logo>
          <Search>
            <input type="text" placeholder="search" />
            <SearchIcon>
              <img src={searchIcon} alt="" />
            </SearchIcon>
          </Search>
        </RightSection>
        <LeftSection>
          <NavItemsList>
            <NavItem>
              <img src={home} alt="home-icon" />
              <p>Home</p>
            </NavItem>
            <NavItem>
              <img src={network} alt="network-icon" />
              <p>My Network</p>
            </NavItem>
            <NavItem>
              <img src={jobs} alt="job-icon" />
              <p>Jobs</p>
            </NavItem>
            <NavItem>
              <img src={messaging} alt="messaging-icon" />
              <p>Messaging</p>
            </NavItem>
            <NavItem>
              <img src={notification} alt="notification-icon" />
              <p>Notifications</p>
            </NavItem>
            <WorkMenu>
              <img src={menu} alt="menu-icon" />
              <p>Work</p>
            </WorkMenu>
          </NavItemsList>
        </LeftSection>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  background-color: white;
  position: fixed;
  border-bottom: 0.5px solid lightgray;
`;
const Content = styled.div`
  max-width: 1128px;
  margin: auto;
  display: flex;
  padding: 8px 20px;
  align-items: center;
`;
const RightSection = styled.div`
  display: flex;
  align-items: center;
  /* background-color: blue; */
`;
const Logo = styled.div`
  width: 30px;
  display: flex;
  align-items: center;
  margin-right: 10px;
`;
const Search = styled.div`
  width: 200px;
  position: relative;
  input {
    width: 100%;
    height: 25px;
    border: none;
    border-radius: 3px;
    padding: 5px 10px 5px 40px;
    font-size: 16px;
    outline: none;
    background-color: #0073b115;
    position: relative;
    &::placeholder {
      font-weight: 300;
    }
    @media (max-width: 768px) {
      display: none;
    }
  }
`;
const SearchIcon = styled.div`
  width: 40px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  margin: auto;
`;
const LeftSection = styled.nav`
  /* background-color: red; */
  margin-left: auto;
  @media (max-width: 768px) {
    position: absolute;
    right: 20px;
    /* bottom: 0;
    top: auto; */
  }
`;
const NavItemsList = styled.ul`
  list-style-type: none;
  display: flex;
  column-gap: 30px;
  @media (max-width: 768px) {
    column-gap: 25px;
  }
`;
const NavItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    font-family: sans-serif;
    font-weight: 300;
    color: #5b5b5b;
    font-size: 12px;
    padding-top: 5px;
    @media (max-width: 768px) {
      display: none;
    }
  }
  &:hover {
    cursor: pointer;
  }
`;
const WorkMenu = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 15px;
  border-left: 1px solid lightgray;
  p {
    font-family: sans-serif;
    font-weight: 300;
    color: #5b5b5b;
    font-size: 12px;
    padding-top: 2px;
    @media (max-width: 768px) {
      display: none;
    }
  }
`;
export default Header;

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
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <Content>
        <LeftSection>
          <Logo>
            <img src={logo} alt="" />
          </Logo>
          <Search>
            <input type="text" placeholder="search" />
            <SearchIcon>
              <img src={searchIcon} alt="" />
            </SearchIcon>
          </Search>
        </LeftSection>
        <RightSection>
          <NavItemsList>
            <NavLink
              to="/home"
              className={({ isActive }) => (isActive ? "active " : "")}
            >
              <NavItem>
                <img src={home} alt="home-icon" />
                <span>Home</span>
              </NavItem>
            </NavLink>
            <NavLink
              to="/network"
              className={({ isActive }) => (isActive ? "active " : "")}
            >
              <NavItem>
                <img src={network} alt="network-icon" />
                <span>My Network</span>
              </NavItem>
            </NavLink>
            <NavLink
              to="/jobs"
              className={({ isActive }) => (isActive ? "active " : "")}
            >
              <NavItem>
                <img src={jobs} alt="job-icon" />
                <span>Jobs</span>
              </NavItem>
            </NavLink>
            <NavLink
              to="/messages"
              className={({ isActive }) => (isActive ? "active " : "")}
            >
              <NavItem>
                <img src={messaging} alt="messaging-icon" />
                <span>Messaging</span>
              </NavItem>
            </NavLink>
            <NavLink
              to="/notifications"
              className={({ isActive }) => (isActive ? "active " : "")}
            >
              <NavItem>
                <img src={notification} alt="notification-icon" />
                <span>Notifications</span>
              </NavItem>
            </NavLink>
            {/* <WorkMenu>
              <img src={menu} alt="menu-icon" />
              <p>Work</p>
            </WorkMenu> */}
          </NavItemsList>
        </RightSection>
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
  min-height: 100%;
  padding: 8px 20px;
  align-items: center;
`;
const LeftSection = styled.div`
  display: flex;
  align-items: center;
`;
const Logo = styled.div`
  width: 30px;
  display: flex;
  align-items: center;
  margin-right: 10px;
`;
const Search = styled.div`
  width: 200px;
  /* position: relative; */
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
const RightSection = styled.nav`
  display: block;
  margin-left: auto;
  @media (max-width: 768px) {
    position: fixed;
    right: 20px;
    background-color: white;
    display: flex;
    width: 100vw;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;
const NavItemsList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: nowrap;
  column-gap: 5px;
  @media (max-width: 768px) {
    width: 100vw;
    align-items: center;
    justify-content: center;
    padding: 5px 5px;
    /* justify-content: space-evenly; */
  }
  a {
    text-decoration: none;
  }
  /* .active {
    span:after {
      transform: scaleX(1);
      border-bottom: 2px solid var(--white, #fff);
      position: absolute;
      bottom: 0;
      transition: transform 0.2s ease-in-out;
      border-color: rgba(0, 0, 0, 0.9);
    }
  } */
`;
const NavItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 10px;
  background-color: red;

  span {
    font-family: sans-serif;
    font-weight: 300;
    color: rgba(0, 0, 0, 0.6);
    font-size: 11px;
    padding-top: 5px;
  }
  &:hover,
  &:active {
    cursor: pointer;
    span {
      color: rgba(0, 0, 0, 0.9);
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    /* padding: 0px px; */
  }
`;

// const WorkMenu = styled.div`
//   display: flex;
//   flex-direction: column;
//   padding-left: 15px;
//   border-left: 1px solid lightgray;
//   p {
//     font-family: sans-serif;
//     font-weight: 300;
//     color: #5b5b5b;
//     font-size: 12px;
//     padding-top: 2px;
//     @media (max-width: 768px) {
//       display: none;
//     }
//   }
// `;
export default Header;

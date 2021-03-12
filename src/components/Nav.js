import React from "react";
import styled from "styled-components";

const Nav = () => {
  return (
    <StyledNav>
      <div className="header">
        <h1>Pedro Enciso</h1>
        <ul>
          <li>My Work</li>
          <li>About Me</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="line"></div>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  width: 100%;
  height: 25vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  .header {
    padding: 0rem 10rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
      font-size: 4rem;
      font-family: "Montserrat", sans-serif;
      font-weight: 300;
    }
    ul {
      display: flex;
      list-style: none;
      li {
        font-weight: 300;
        padding: 0.5rem 0.5rem;
        margin-left: 1rem;
        font-size: 1.2rem;
        transition: all 0.2s;
        cursor: pointer;
        border-radius: 10px;
        &:hover {
          color: #0064ff;
        }
      }
    }
  }
  .line {
    width: 100%;
    height: 10%;
    margin-top: 1rem;
    background: #84b4ff;
  }
`;

export default Nav;

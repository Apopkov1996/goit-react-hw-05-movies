import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Layout = () => {
  return (
    <Wrapper>
      <Header>
        <ul>
          <Element to="/">Home</Element>
          <Element to="/movies">Movies</Element>
        </ul>
      </Header>

      <div>
        <Outlet />
      </div>
    </Wrapper>
  );
};

export default Layout;

export const Wrapper = styled.div`
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
`;

export const Header = styled.header`
  border: solid 1px grey;
  border-radius: 4px;

  margin-bottom: 20px;
`;

export const Element = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 8px;
  border-radius: 4px;
  margin-left: 10px;
  font-weight: 600;
  font-size: 22px;
  color: black;

  &.active {
    background-color: blue;
    color: white;
  }
  &:hover:not(.active) {
    background-color: lightblue;
  }
`;

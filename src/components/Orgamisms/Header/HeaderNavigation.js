import React from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from 'routes';
import styled from 'styled-components';
import Cookie from 'js-cookie';

const StyledNavLink = styled(NavLink)`

    display: inline-block;
    color: white;
    text-decoration: none;
    width: 120px;
    text-align: center;
    border-bottom: 2px solid transparent;
    font-weight: bold;
    letter-spacing: 1px;
    line-height: 54px;
    z-index: 3;
    :hover {
        color: white;
        text-decoration: none;
        border-bottom: 2px solid hsl(200, 100%, 50%);
    }

    &.active{
        color: white;
        text-decoration: none;
        border-bottom: 2px solid hsl(200, 100%, 70%);
    }
`;

const clearSession = () => {
    Cookie.remove("jwt");
    Cookie.remove("username");
}

const HeaderNavigation = ({ userId }) => (
    <>
    <nav>
        <StyledNavLink  activeClassName="active" to={routes.flights}>Flights</StyledNavLink>
        <StyledNavLink  activeClassName="active" to={routes.passengers}> Passengers</StyledNavLink>
        <StyledNavLink  activeClassName="active" to={routes.users}> Users</StyledNavLink>
    </nav>
        <StyledNavLink activeClassName="active" to={routes.user + Cookie.get("username")}> Account </StyledNavLink>
        <StyledNavLink onClick={clearSession} to={routes.login}> Logout</StyledNavLink>
    </>
);


export default HeaderNavigation;
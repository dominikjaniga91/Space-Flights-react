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
    :hover {
        color: white;
        text-decoration: none;
        border-bottom: 2px solid hsl(204, 100%, 50%);
    }

    &.active{
        color: white;
        text-decoration: none;
        border-bottom: 2px solid hsl(204, 100%, 50%);
    }
`;

const clearSession = () => {
    Cookie.remove("jwt");
}

const HeaderNavigation = () => (
    <>
    <nav>
        <StyledNavLink  activeClassName="active" to={routes.flights}>Flights</StyledNavLink>
        <StyledNavLink  activeClassName="active" to={routes.passengers}> Passengers</StyledNavLink>
        <StyledNavLink  activeClassName="active" to={routes.users}> Users</StyledNavLink>
    </nav>
        <StyledNavLink onClick={clearSession} to={routes.login}> Logout</StyledNavLink>
    </>
);


export default HeaderNavigation;
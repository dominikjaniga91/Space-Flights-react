import React from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from '../../../routes';
import styled from 'styled-components';

const StyledNavLink = styled(NavLink)`

    display: inline-block;
    margin-left: 10px;
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
`;

const HeaderNavigation = () => (
    <>
    <nav>
        <StyledNavLink to={routes.flights}>Flights</StyledNavLink>
        <StyledNavLink  to={routes.passengers}> Passengers</StyledNavLink>
    </nav>
        <StyledNavLink  to={routes.flights}> Logout</StyledNavLink>
    </>
);


export default HeaderNavigation;
import React from 'react';
import headerLogo from 'Assets/images/space-logo.png';
import styled from 'styled-components';
import HeaderNavigation from './HeaderNavigation';
import { NavLink } from 'react-router-dom';
import { routes } from 'routes';



const StyledWrapper = styled.div`

    width: 100%;
    height: 56px;
    display: grid;
    grid-template-columns: 60px 1fr 120px;
    align-items: center;
`;

const StyledNavWrapper = styled.div`

    width: 100%;
    height: 56px;
    padding: 0;
    background-color: hsl(0, 0%, 15%);
`;

const Header = () => (

          <StyledNavWrapper>
            <StyledWrapper>
              <NavLink to={routes.home} ><img  src={headerLogo} alt="space-logo" id="spaceLogoNav"/></NavLink>
              <HeaderNavigation />
            </StyledWrapper>
          </StyledNavWrapper>  
         

);

export default Header;
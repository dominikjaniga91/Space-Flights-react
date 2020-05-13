import React from 'react';
import { routes } from 'routes';
import {Link} from 'react-router-dom';
import styled, { css }  from 'styled-components';


const StyledWrapper = styled.div`


    width: 150px;
    height: 100px;
    background-color: #262626;
    position: absolute;
    top: 112px;
    right: 2.12vw;
    z-index:4;
    border-radius: 10px;
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s 2s, opacity .4s linear;

     ${({isVisible}) =>
        isVisible && css` 
            visibility: visible;
            opacity: 1;
            transition: opacity .4s linear;
            
    `}
`;

const StyledLink = styled(Link)`
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 1px;
    color: white;
    padding-left: 10px;
    margin-top: 30px;
    font-size: 12px;

    :hover{
        text-decoration: none;
        color: hsl(200, 100%, 50%);
        
    }
`;

const AddItemBar = ({ isVisible }) => (
    
    <StyledWrapper isVisible={isVisible}>

        <StyledLink to={routes.newPassenger}>Add passenger</StyledLink><br></br>
        <StyledLink to={routes.newFlight}>Add flight</StyledLink><br></br>
        <StyledLink to={routes.newUser}>Add user</StyledLink>
      
    </StyledWrapper>
    
);

export default AddItemBar;

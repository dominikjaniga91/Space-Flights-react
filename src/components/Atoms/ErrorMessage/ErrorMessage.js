import styled, { css } from "styled-components";
import React from 'react';

const StyledErrorMessage = styled.div`

    width:330px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    vertical-align: middle;
    background-color: hsl(0, 100%, 90%);
    color: hsl(0, 100%, 30%);
    border: 1px solid hsl(0, 100%, 30%);
    border-radius: 10px;
    position: absolute;
    right: 50%;
    left: 50%;
    transform: translateX(-50%);
    top: 20px;
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

const ErrorMessage = ({ children, isVisible }) => (

    <StyledErrorMessage isVisible={isVisible}>{children}</StyledErrorMessage>

);

export default ErrorMessage;
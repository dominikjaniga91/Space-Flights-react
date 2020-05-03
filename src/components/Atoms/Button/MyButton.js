import React from 'react';
import styled from 'styled-components';


const StyledButton = styled.button`

    width: 100px;
    height: 38px;
    margin-top: 37px;
    margin-right: 10px;
    margin-left: 10px;
    background-color: hsl(200, 100%, 50%);
    border: none;
    border-radius: 5px;
    color: white;
    :hover{

        background-color: hsl(210, 100%, 60%);
    }
`;

const MyButton = ({ type, children, ...props }) => (

        <StyledButton 
            type= { children === "Cancel" ? "button" : "submit" }
            {...props}> {children} </StyledButton>

);

export default MyButton;
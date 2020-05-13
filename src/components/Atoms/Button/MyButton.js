import React from 'react';
import styled from 'styled-components';


const StyledButton = styled.button`

    width: 100px;
    height: 38px;
    margin-top: 37px;
    margin-right: 10px;
    margin-left: 10px;
    background-color: hsl(200, 100%, 70%);
    border: none;
    border-radius: 5px;
    color: black;
    :hover{

        background-color: hsl(200, 100%, 50%);
        color: white;
    }
`;

const MyButton = ({ type, children, ...props }) => (

        <StyledButton 
            type= {type}
            {...props}> {children} </StyledButton>

);

export default MyButton;
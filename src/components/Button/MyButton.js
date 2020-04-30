import React from 'react';
import styles from './MyButton.module.scss';
import styled from 'styled-components';


const StyledButton = styled.button`

    width: 100px;
    height: 38px;
    margin-top: 37px;
    margin-right: 20px;
    background-color: hsl(200, 100%, 50%);
    border: none;
    border-radius: 5px;
    color: white;
    :hover{

        background-color: hsl(210, 100%, 60%);
    }
`;

const MyButton = ({ children, ...props }) => (

        <StyledButton 
            className={styles.button} 
            type="submit"  
            {...props}> {children} </StyledButton>

);

export default MyButton;
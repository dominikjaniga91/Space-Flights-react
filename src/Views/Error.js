import React from 'react';
import MyButton from '../components/Button/MyButton';
import styled from 'styled-components';
import errorImage from '../Assets/images/404_v7.png';


const StyledImage = styled.div`
    margin-left: auto;
    margin-right: auto;
    width: 40vw;
    height: 38vw;
    background-image: url(${errorImage});
    background-size: 100%;
    background-repeat: no-repeat;
    text-align: center;
    
`;

const StyledButton = styled(MyButton)`
        position: absolute;
        left: 50%;
        right: 50%;
        transform: translateX(-50%);
        width: 150px;
        height: 50px;
        bottom: 6vw;
        font-size: 1vw;
`;

const Error = (props) => (
    <>
    <StyledImage />
    <StyledButton onClick={() => props.history.goBack()}> 
            Go back
    </StyledButton>
    </>
);

export default Error;



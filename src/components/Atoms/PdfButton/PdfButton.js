import React from 'react';
import styled from 'styled-components';
import ButtonIcon from 'components/Atoms/ButtonIcon/ButtonIcon';


const StyledButtonIcon = styled(ButtonIcon)`
         
        position: absolute;
        top: 80px;
        right: 10px;
        background-color: hsl(200, 100%, 50%);
        border-radius: 50px;
        width: 40px;
        height: 40px;
        background-size: 110%;

`;


const PdfButton = ({ icon, ...props }) => (
    <>
        <StyledButtonIcon {...props}  icon={icon} />
        
    </>
);

export default PdfButton;
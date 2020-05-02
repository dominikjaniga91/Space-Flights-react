import React from 'react';
import styled from 'styled-components';
import ButtonIcon from 'components/Atoms/ButtonIcon/ButtonIcon';


const StyledButtonIcon = styled(ButtonIcon)`
         
        position: absolute;
        top: 100px;
        right: 1.2vw;
        background-color: hsl(200, 100%, 50%);
        border-radius: 50px;
        width: 40px;
        height: 40px;
        background-size: 110%;

`;


const AddItemButton = ({ icon, ...props }) => (
    <>
        <StyledButtonIcon {...props}  icon={icon} />
        
    </>
);

export default AddItemButton;
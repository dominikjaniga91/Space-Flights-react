import React from 'react';
import styled from 'styled-components';
import ButtonIcon from 'components/Atoms/ButtonIcon/ButtonIcon';


const StyledButtonIcon = styled(ButtonIcon)`
         
        position: absolute;
        top: 140px;
        right: 10px;
        background-color: hsl(200, 100%, 50%);
        border-radius: 50px;
        width: 45px;
        height: 45px;
        background-size: 75%;
        :hover{
            cursor: pointer;
        }
`;


const AddItemButton = ({ icon, ...props }) => (
    <>
        <StyledButtonIcon {...props}  icon={icon} />
        
    </>
);

export default AddItemButton;
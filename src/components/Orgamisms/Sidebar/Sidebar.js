import React from 'react';
import styled from 'styled-components';
import AddItemButton from 'components/Atoms/AddItem/AddItemButton';
import AddItemBar from 'components/Atoms/AddItem/AddItenBar';

const StyledWrapper = styled.div`

    width: 60px;
    height: 100%;
    background-color: hsl(214, 7%, 20%);
    position: fixed;
    right: 0;
    top: 0;
    z-index: 0;

`;

const Sidebar = ({ isVisible, icon, ...props}) => (

    <StyledWrapper >
        <AddItemButton
            {...props} 
            icon={icon} 
        />
        <AddItemBar isVisible={isVisible}/>
    </StyledWrapper>
);

export default Sidebar;
import React from 'react';
import styled from 'styled-components';
import AddItemButton from 'components/Atoms/AddItem/AddItemButton';
import AddItemBar from 'components/Atoms/AddItem/AddItenBar';
import ExcelButton from 'components/Atoms/ExcelButton/ExcelButton';
import PdfButton from 'components/Atoms/PdfButton/PdfButton';
import pdfIcon from 'Assets/Icons/pdf.svg';
import xlsIcon from 'Assets/Icons/xls.svg';
import addIcon from 'Assets/Icons/plus.svg';

const StyledWrapper = styled.div`

    width: 70px;
    height: 100%;
    background-color: hsl(214, 7%, 20%);
    position: fixed;
    right: 0;
    top: 0;
    z-index: 0;

`;

const Sidebar = ({ getFlightToXlsx, getFlightToPdf, isVisible, ...props}) => (

    <StyledWrapper >
        <AddItemButton
            {...props} 
            icon={addIcon} 
        />
        <AddItemBar isVisible={isVisible}/>
        <ExcelButton icon={xlsIcon} onClick={getFlightToXlsx}/>
        <PdfButton  icon={pdfIcon} onClick={getFlightToPdf}/>
    </StyledWrapper>
);

export default Sidebar;
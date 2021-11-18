import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width:100%;
    height:50%;
`;

const MenuTitle = styled.div`
    width:100%;
    height:30%;
    font-size:1em;
    display:flex;
    justify-content:center;
    align-items:center;
    border-bottom:1px solid #bababa;
`;

const MenuItem = styled.div`
    width:100%;
    min-height:45%;
    font-size:1em;
    display:flex;
    justify-content:center;
    align-items:center;

    &:hover{
        cursor:pointer;
        background-color:#bababa;
    }
`;

const Filter = ()=>{
    return(
        <Container>
            <MenuTitle>Filter</MenuTitle>
            <MenuItem>A</MenuItem>
            <MenuItem>A</MenuItem>
        </Container>    
    )
}

export default Filter;
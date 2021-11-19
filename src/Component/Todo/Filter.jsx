import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width:100%;
    height:30%;
    position:absolute;
    bottom : 0;
`;

const MenuTitle = styled.div`
    width:100%;
    height:15%;
    font-size:1em;
    display:flex;
    justify-content:center;
    align-items:center;
    border-bottom:1px solid #bababa;
`;

const MenuItem = styled.div`
    width:100%;
    min-height:20%;
    font-size:1em;
    display:flex;
    justify-content:center;
    align-items:center;

    &:hover{
        cursor:pointer;
        background-color:#bababa;
    }
`;

const Filter = (props)=>{
    return(
        <Container>
            <MenuTitle>Filter</MenuTitle>
            {props.menu.map((item)=>{
                return(
                    <MenuItem key={item.id} onClick={()=>props.action(item.name)}>{item.name}</MenuItem>
                );
            })}
        </Container>    
    )
}

export default Filter;
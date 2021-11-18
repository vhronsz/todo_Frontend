import axios from "axios";
import react from "react";
import React from "react";
import Page from "../Util/Preset.js";
import styled from "styled-components";
import BASE_URL from "../Util/Tools.js";
import SideMenu from "../Container/SideMenu.jsx";

const Item = styled.div`
    width:17%;
    height:15%;
    border:1px solid black;
    background-color:
`;

const ItemContainer = styled.div`
    
`;

const CheckItem = styled.div`
    width:97%;
    heigth:5%;
    border :1px solid black;
`;
class Todo extends react.Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <Page>
                <SideMenu item='a'/>
                
            </Page>
        );
    }
}

export default Todo;
import axios from "axios";
import react from "react";
import React from "react";
import Page from "../Util/Preset.js";
import styled from "styled-components";
import BASE_URL from "../Util/Tools.js";
import SideMenu from "../Container/SideMenu.jsx";

class Todo extends react.Component{
    constructor(props){
        super(props);
        this.state = {
            name:"Placeholder",
            activity : [],
            menu : []
        };
    }
    render(){
        return(
            <Page>
                <SideMenu name={this.state.name} menu={this.state.menu}/>                
            </Page>
        );
    }
}

export default Todo;
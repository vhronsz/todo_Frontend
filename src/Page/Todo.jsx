import react from "react";
import React from "react";
import Page from "../Util/Preset.js";
import SideMenu from "../Container/SideMenu.jsx";
import Main from "../Container/Main.jsx";

class Todo extends react.Component{
    constructor(props){
        super(props);
        this.state = {
            name:"Placeholder",
            activity : 
            [
                {}
            ],
            menu : 
            [
                {id:1,name:"Completed"},
                {id:2,name:"Progress"}
            ]
        };
    }
    render(){
        return(
            <Page>
                <SideMenu name={this.state.name} menu={this.state.menu}/>      
                <Main/>
            </Page>
        );
    }
}

export default Todo;
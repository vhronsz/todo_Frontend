import axios from "axios";
import React from "react";
import styled from "styled-components";
import BASE_URL from "../Util/Tools.js";
import Filter from "../Component/Todo/Filter.jsx";

const Container = styled.div`
    width:15%;
    height: 100%;
    background-color:#f5f5f5;
    display:flex;
    flex-direction:column;
    border-right:1px solid #bababa;
    color:#545454;
    position:relative;
`;

const UserName = styled.div`
    width:90%;
    margin-left:5%;
    margin-right:5%;
    height:6%;
    font-size:1em;
    display:flex;
    align-items:center;
    justify-content:center;
`;

class SideMenu extends React.Component{
    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    
    onClick = (name)=>{
        console.log(name);
    }

    render(){
        return(
            <Container>
                <UserName>
                    Hi, {this.props.name}
                </UserName>
                <Filter menu={this.props.menu} action={this.onClick}/>
            </Container>
        );
    }
}

export default SideMenu;
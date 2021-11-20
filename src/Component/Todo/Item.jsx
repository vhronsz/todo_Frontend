import axios from "axios";
import React from "react";
import styled from "styled-components";
import BASE_URL from "../../Util/Tools.js";

const Container = styled.div`
    width:94%;
    height:5%;
    margin-left:2.5%;
    margin-right:2.5%;
    border:1px solid black;
    display:flex;
    font-size:0.88em;
`;

const Name = styled.div`
    width:70%;
    height:100%;
    display:flex;
    align-items:center;
    border:1px solid black;
    `;

const Action = styled.div`
    width:15%;
    height:100%;
    display:flex;
    align-items:center;
`;
class Item extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Container>
                <Name>a</Name>
                <Action>a</Action>
                <Action>a</Action>
            </Container>
        );
    }

}

export default Item;






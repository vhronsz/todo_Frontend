import axios from "axios";
import React from "react";
import styled from "styled-components";
import BASE_URL from "../../Util/Tools.js";

const Container = styled.div`
    width:100%;
    height:7%;
    border-bottom:1px solid #bababa;
    background-color:#ffffff;
    display:flex;
    font-size:0.88em;
    margin-top:5px;
    margin-bottom:5px;
`;

const Name = styled.div`
    width:80%;
    height:100%;
    display:flex;
    margin-left:2%;
    align-items:center;
`;

const Action = styled.div`
    width:20%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items : center;

    &:hover{
        color:white;
        cursor:pointer;
    }
`;

class Item extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Container>
                <Name>Testing Action</Name>
                <Action>a</Action>
            </Container>
        );
    }

}

export default Item;






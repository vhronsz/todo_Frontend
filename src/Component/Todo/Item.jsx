import axios from "axios";
import React from "react";
import styled from "styled-components";
import BASE_URL from "../../Util/Tools.js";

const Container = styled.div`
    width:94%;
    height:7%;
    border-bottom:1px solid #bababa;
    background-color:#ffffff;
    display:flex;
    font-size:0.88em;
    margin:5px 3% 5px 3%;
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
        this.onClick  = this.onClick.bind(this);
    }

    onClick = (e)=>{
        let URL = `${BASE_URL}item/check`;
        axios({
            method:"POST",
            url:URL,
            data:{
                id:this.props.id
            }
        }).then(
            this.props.remove
        );
    }

    render(){
        return(
            <Container>
                <Name>{this.props.action}</Name>
                <Action onClick={this.onClick}>a</Action>
            </Container>
        );
    }

}

export default Item;






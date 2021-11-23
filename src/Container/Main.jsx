import axios from "axios";
import React from "react";
import styled from "styled-components";
import BASE_URL from "../Util/Tools.js";
import Item from "../Component/Todo/Item.jsx";
import InputItem from "../Component/Todo/InputItem.jsx";

const Container = styled.div`
    width:100%;
    height:100%;
    background-color : #FFFFFF;
`;

const Section = styled.div`
    width:28%;
    margin-left:1%;
    margin-top:1%;
    margin-bottom:2%;
    height:95%;
    border 1px solid #f2f2f2;
    border-radius:10px;
    background-color : #f2f2f2;
`;

const Empty = styled.div`
    width 100%;
    height:2%;
`;

class Main extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Container>
                <Section>
                    <Empty/> 
                    <form>
                        <input type="text"/>
                        <InputItem/>        
                    </form>  
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Empty/>
                </Section>
            </Container>
        );
    }
}

export default Main;
import axios from "axios";
import React from "react";
import styled from "styled-components";
import BASE_URL from "../Util/Tools.js";

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
    border 1px solid #bababa;
    border-radius:10px;
`;

class Main extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Container>
                <Section>
                    
                </Section>
            </Container>
        );
    }
}

export default Main;
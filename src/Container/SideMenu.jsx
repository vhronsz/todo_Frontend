import axios from "axios";
import React from "react";
import styled from "styled-components";
import BASE_URL from "../Util/Tools.js";

const Container = styled.div`
    width:15%;
    height: 100%;
    background-color:#a8f7b9;
`;
class SideMenu extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <Container>
                <div>
                    Username
                </div>
            </Container>
        );
    }
}

export default SideMenu;
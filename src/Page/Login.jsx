import React from "react";
import axios from "axios";
import styled from "styled-components";
import BASE_URL from "../Util/Tools.js";
import Page from "../Util/Preset.js";

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {content: "Hello"}
    }
    componentDidMount(){
        axios({
                method: 'get',
                url: `${BASE_URL}`,
                headers: {'Access-Control-Allow-Origin': '*','Content-Type': 'application/json'},
            }).then(
                (res)=>{
                    console.log(res);
                    this.setState({
                        content : res.data.data
                    });
                }
            ).catch((err)=>{
                console.log(err)
            });
    }
    render(){
        return(
            <Page>
                
            </Page>
        )
    }
}


export default Login;
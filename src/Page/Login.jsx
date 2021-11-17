import axios from "axios";
import react from "react";
import React from "react";
import styled from "styled-components";
import Page from "../Util/Preset.js";
import BASE_API_URL from "../Util/Tools.js";

const LoginForm = styled.form`
    font-size:1em;
    position: relative;
    top:25%;
    width:45%;
    height:50%;
    margin-left:26.5%;

    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;

    @media only screen and (max-width:1000px){
        width:75%;
        margin-left:15%;
    }
`

const FormComponent = styled.div
`
    width:80%;
    height:17%;
`;

const Title = styled.div`
    width:100%;
    height:100%;
    text-align:center;
    font-size:2em;
    display:flex;
    align-items:center;
    justify-content:center;
`;

const InputLabel = styled.label`
    width:70%;
    margin-left: 15%;
    margin-right: 15%;
`;

const FormInput = styled.input
`
    height:50%;
    width:70%;
    margin-left: 15%;
    margin-right: 15%;
    margin-top: 3px;
    outline:none;
    border : none;
    border-bottom:1px solid black;
    font-size = 1.2em;
`;

const SubmitButton = styled.button`
    height:60%;
    width:70%;

    margin-left: 15.5%;
    margin-right: 15%;
    margin-top : 2%;
    border:2px solid #7bb0ed;
    background-color:#7bb0e5;
    color:#FFFFFF;
    &:hover{
        cursor:pointer;
    }
`;

const ErrorMessage = styled.div`
    width:70%;
    margin-left: 15%;
    margin-right: 15%;

    font-size: 1em;
    color: #e8291c;
    text-align:center;
`;

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = 
        {
            content: "Hello",
            username: "",
            password : "",
            error : ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        const username = this.state.username;
        const password = this.state.password;
        let URL = `${BASE_API_URL}login`; 
        axios({
            method: 'POST',
            url: URL,
            data: {
              username: username,
              password: password 
            }
        })
        .then((res)=>{
            let respond = res.data;
            if(respond.status){
                window.sessionStorage.setItem("username","Placholder");
                // window.location = 
            }
        })
        .catch((e)=>{
            console.log(e);
        });
    }

    handleInput = (e)=>{
        let name = e.target.name;
        let content = e.target.value;
        let oldState = this.state;
        this.setState({
            ...oldState,[name] : content
        });
    }

    render(){
        return(
            <Page>
                <LoginForm onSubmit={this.handleSubmit}>
                    <FormComponent>
                        <Title>
                            To Do
                        </Title>
                    </FormComponent>
                    <FormComponent>
                        <InputLabel>Username</InputLabel>
                        <FormInput type="text" name="username" value={this.state.username} onChange={this.handleInput}/>                    
                    </FormComponent>
                    <FormComponent>
                        <InputLabel>Password</InputLabel>
                        <FormInput type="password" name="password" value={this.state.password} onChange={this.handleInput}/>                    
                    </FormComponent>
                    <FormComponent>
                        <SubmitButton type="submit">Login</SubmitButton>
                    </FormComponent>
                    <FormComponent>
                        <ErrorMessage>{this.state.error}</ErrorMessage>
                    </FormComponent>
                </LoginForm>
            </Page>
        )
    }
}


export default Login;
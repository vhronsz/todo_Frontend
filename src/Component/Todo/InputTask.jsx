import React from "react";
import styled from "styled-components";

const Form = styled.form`
    width:90%;
    height:5%;
    margin-left:5%;
    margin-right:5%;
    margin-bottom:2%;
`;

const Input = styled.input`
    width:100%;
    height:100%;
    background-color:#fdfdfd;
    border:none;
    font-size:0.88em;
    outline:none;
    color:black;
`;

class InputTask extends React.Component{

    constructor(props){
        super(props);
        this.state={
            value : ""
        }
        this.onChange = this.onChange.bind(this);
    }

    onChange = (e)=>{
        let newValue = e.target.value;
        console.log(this.state.value);
        this.setState({
            value : newValue
        });
    };

    render(){
        return(
            <Form method="POST">
                <Input placeholder="New Task" name="task_name" value={this.state.value} onChange={this.onChange}/>
            </Form>
        );
    }
}

export default InputTask;
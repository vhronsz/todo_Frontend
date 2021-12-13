import React from "react";
import styled from "styled-components";
import axios from "axios";
import BASE_URL from "../../Util/Tools.js";

const Form = styled.form`
    width:90%;
    height:5%;
    margin-left:5%;
    margin-right:5%;
    margin-bottom:5%;
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
        this.onSubmit = this.onSubmit.bind(this);

    }

    onChange = (e)=>{
        let newValue = e.target.value;
        this.setState({
            value : newValue
        });
    };

    onSubmit = (e)=>{
        e.preventDefault();
        axios({
            method:"POST",
            url:`${BASE_URL}item/add`,
            data:{
                "action" : this.state.value,
                "section_id" : this.props.id
            }
        }).then((res)=>{
            this.props.addItem(res.data.item);
            this.setState({value : ""});
        });
    }

    render(){
        return(
            <Form method="POST" onSubmit={this.onSubmit}>
                <Input placeholder="New Task" name="task_name" value={this.state.value} onChange={this.onChange}/>
            </Form>
        );
    }
}

export default InputTask;
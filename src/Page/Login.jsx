import React from "react";
import axios from "axios";

const BASE_URL = "http://localhost:3000";

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
            <div>
                {this.state.content}
            </div>
        )
    }
}


export default Login;
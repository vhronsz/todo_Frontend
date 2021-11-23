import React from "react";
import styled from "styled-components";

class InputItem extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <input type="text" name="new_item"/>
        );
    }
}

export default InputItem;
import React from "react";
import styled from "styled-components";
import Item from "../Component/Todo/Item.jsx";
import InputTask from "../Component/Todo/InputTask.jsx";

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
        this.state = {
            "items" :[
                {"id":1,"action" :"testing"},
                {"id":2,"action" :"Action 2"}
            ],
        }
    }

    addItem = (item)=>{
        let items = this.state.items;
        items = [...items,item];
        this.setState({
            "items":items
        })
        // Success Message
    }

    removeItem = (id)=>{
        let items = this.state.items;
        let newItems = items.filter((item)=>{
            return item.id !== id;
        })
        this.setState({
            "items" : newItems
        });
        // Success Message

    }
    render(){
        return(
            <Container>
                <Section>
                    <Empty/> 
                    <InputTask addItem = {this.addItem}/>
                    {this.state.items.map((i)=>{
                        return(
                            <Item key={i.id} action={i.action} id={i.id} remove={()=>{this.removeItem(i.id)}}/>
                        );
                    })}
                    <Empty/>
                </Section>
            </Container>
        );
    }
}

export default Main;
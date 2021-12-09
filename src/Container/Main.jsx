import React from "react";
import styled from "styled-components";
import Item from "../Component/Todo/Item.jsx";
import InputTask from "../Component/Todo/InputTask.jsx";

const Container = styled.div`
    width:100%;
    height:100%;
    background-color : #FFFFFF;
    display:flex;
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

const SectionTitle = styled.div`

`;

const Empty = styled.div`
    width : 100%;
    height:2%;
`;

const ItemContainer = styled.div`
    width:100%;
    height:88%;
    overflow-y:scroll;

    &::-webkit-scrollbar {
        -webkit-appearance: auto;
        background : #f2f2f2; 
        width: 7px;
    }

    &::-webkit-scrollbar-thumb{
        background: #cccccc;
    }
    &::-webkit-scrollbar-track {}
    &::-webkit-scrollbar-thumb:hover {
        background: #bbbbbb;
    }
`;

class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            sections : [
                [
                    {
                        "action_name": "action 2",
                        "action_id": 3,
                        "section_id": 1,
                        "section_name": "testing"
                    },
                    {
                        "action_name": "action_name",
                        "action_id": 1,
                        "section_id": 1,
                        "section_name": "testing"
                    },
                    {
                        "action_name": "action 1",
                        "action_id": 2,
                        "section_id": 1,
                        "section_name": "testing"
                    },
                    {
                        "action_name": "action 4",
                        "action_id": 5,
                        "section_id": 1,
                        "section_name": "testing"
                    }
                ],
                [
                    {
                        "action_name": "action 3",
                        "action_id": 4,
                        "section_id": 2,
                        "section_name": "section 2"
                    }
                ]
            ]
        }
    }

    removeItem = (id)=>{
        // Success Message

    }

    render(){
        return(
            <Container>
                {this.state.sections.map((section)=>
                    <Section>
                        <SectionTitle>
                            {section[0].name}
                        </SectionTitle>
                        <Empty/> 
                        <InputTask id={section[0].section_id} addItem = {this.addItem}/>
                        <ItemContainer>
                            {section.map((item)=>{
                                return(
                                    <Item key={item.action_id} action={item.action_name} id={item.action_id} remove={()=>{this.removeItem(item.action_id)}}/>
                                );
                            })}
                        </ItemContainer>
                        <Empty/>
                    </Section>                        
                )}
            </Container>
        );
    }
}

export default Main;
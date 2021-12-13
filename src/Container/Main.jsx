import React from "react";
import styled from "styled-components";
import Item from "../Component/Todo/Item.jsx";
import InputTask from "../Component/Todo/InputTask.jsx";
import axios from "axios";
import BASE_API_URL from "../Util/Tools.js";

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
    text-align:center;
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

let all_actions = [];

class Main extends React.Component{   

    constructor(props){
        super(props);
        this.state = {
            sections : [],
            loading : true,
            filter : "added"
        }
    }

    componentDidMount(){
        this.fetchData();
    }

    fetchData = ()=>{
        axios({
            url:`${BASE_API_URL}item`,
            method:"POST",
            data : {
                // Isi pake cookie
                user:{
                    id:1
                }
            }
        }).then((res)=>{
            this.setState({
                sections:res.data.data,
                loading:false
            });
        });
    } 

    removeItem = (item_id,section_id,section_name)=>{
        let sections = this.state.sections;

        let filtered_sections = sections.map((section)=>{
            return section.filter((item)=>{
                return item.section_id !== section_id || item.action_id !== item_id
            });
        });
        
        filtered_sections.forEach((section)=>{
            if(section.length === 0){
                section.push({
                    section_name : section_name,
                    section_id : section_id
                });
            }
        });

        this.setState({
            sections : filtered_sections
        });
    }

    addItem = ()=>{
        
        this.setState({

        });
    }

    render(){
        if(this.state.loading){
            return(
                <Container>
                    <Section></Section>
                    <Section></Section>
                    <Section></Section>
                    <Section></Section>
                </Container>
            )
        }
        return(
            <Container>
                {this.state.sections.map((section)=>
                    <Section key={section.section_id}>
                        <SectionTitle>
                            {section[0].section_name}
                        </SectionTitle>
                        <Empty/> 
                        <InputTask id={section[0].section_id} addItem = {this.addItem}/>
                        <ItemContainer>
                            {
                                section.map((item)=>{
                                    if(item.action_name && item.status === this.state.filter){
                                        return(
                                            <Item key={item.action_id} action={item.action_name} 
                                                id={item.action_id} 
                                                remove={()=>{this.removeItem(item.action_id,item.section_id,item.section_name)}}/>
                                        );
                                    }
                                })
                            }
                        </ItemContainer>
                        <Empty/>
                    </Section>                        
                )}
            </Container>
        );
    }
}

export default Main;
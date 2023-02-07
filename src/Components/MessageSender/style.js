import styled from "styled-components";
import { mobile } from "../../Responsive";


const MessageContainer=styled.div`  
    display: flex;
    flex-direction: column;
    margin:50px 0px;
    background-color: white;
    border-radius: 15px;
    box-shadow: 0px 5px 7px -7px rgba(0,0,0,0.75);
    width: 100%;
    padding:5px;
    ${mobile({
          gap:'0px',
          width:'360px',
          margin:'20px 0px' ,  
          boxShadow:'none'       
         })}
   
`
const TopSection=styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    border-bottom:0.2px solid lightgrey;
    padding:15px;
    ${mobile({
          padding:'4px',
          display:'flex',
          justifyContent:'center',
          alignItems:'center'
         })}
   
   

`
const BottomSection=styled.div`
    display:flex;
    justify-content: space-around;
    align-items: center;
    ${mobile({
       padding:'0px 20px'        
         })}
  

`

const Button=styled.button` 
    height:40px;
    width:80px;
    background-color: #2e81f4;
    color:white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.1rem;
    border-radius:6px;
    border: none;
    cursor: pointer;
    ${mobile({
          height:'35px',
          width:'50px',
          fontSize:'0.5rem',

         })}
   
`

const Form=styled.form`
    flex:1;
    display:flex;
    justify-content: space-evenly;

`

const Textarea=styled.textarea`
        flex:1;
        border:none;
        background-color: rgb(244, 237, 237);;
        text-indent: 8px;
        font-size: 1.2rem;;
        padding:12px;
        margin:0px 20px;
        resize: none;
        overflow: hidden;
        word-wrap:break-word;
        width:60%;
        border-radius: 12px;
        height: 50px;
        font-family:'Roboto';
        &:focus{
                outline: none;
        }
        ${mobile({
          
          height:'35px',
          fontSize:'12px' ,         
          flex:'1',
          margin:'0px 10px'       
         })}
`

const UrlInput=styled.input`     
        border:none;
        background-color: rgb(244, 237, 237);;
        text-indent: 8px;
        font-size: 1.01rem;;
        padding:10px;
        word-wrap:break-word;
        width:15%;
        border-radius: 12px;
        &:focus{
            outline: none;
        }

`

const MessageSenderOptions=styled.div`
        padding: 20px;
        display: flex;
        align-items:center;
        color:gray;
        margin: 5px;
        gap:8px;
        &:hover{
            background-color: #eff2f5;
            border-radius: 20px;
        }
        h3{
            cursor: pointer;
            ${mobile({
         fontSize:'14px'         
         })}
        }  
        ${mobile({
          padding: '0px',
          width:'360px'          
         })}
`

const HiddenInput=styled.input`
        display:none;
`
const Emoji=styled.div`
            position: relative;
            padding: 0px 100px 50px 100px;
            width: 100%;
            top: 20px;
            left: 100px;
`


export {MessageContainer,TopSection,BottomSection,Form,Button,Textarea,UrlInput,MessageSenderOptions,HiddenInput,Emoji}
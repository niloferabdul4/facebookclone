import styled from "styled-components";

const CommentContainer=styled.div`
   display: flex;
   flex-direction:column;
   padding:20px;
   gap:20px;
  

`
const TopSection=styled.div`
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      margin: 20px 0px;
      padding:15px;
   
`

const BottomSection=styled.div`
        border: none;
        background-color: #eff2f5;
        color: white;
        padding: 15px;
        cursor: pointer;
        border-radius: 3px;
        display: flex;
        flex-direction: row;
        gap:20px;
      
    
`

const UserInfo=styled.div`
        flex:1;
        display:flex;
        flex-direction: column;
        gap: 6px;
        align-items: flex-start;
`

const UserName=styled.h4`
        font-weight:600;
        color:	#5A5A5A;
`
const Description=styled.p`
        text-align: justify;
        color:#5A5A5A;

`

const Textarea=styled.textarea`
        flex:1;
        border:none;
        background-color: rgb(244, 237, 237);;
        text-indent: 8px;
        font-size: 1.2rem;
        padding:10px;
        margin:0px 20px;
        word-wrap:break-word;
        width:60%;
        border-radius: 12px;
        resize: none;
        font-family:'Roboto';
        &:focus{
                outline: none;
        }
`


const Button=styled.button`
        border: none;
        background-color:#1b74e4; 
        color: white;
        padding: 10px;
        cursor:pointer;
        border-radius: 6px;
        width:90px;
        font-size:1.0rem;
      
        
`
const Date=styled.p`
       
        align-self: center;
        color: gray;
        font-size: 12px;
`

export {CommentContainer,TopSection,BottomSection,UserInfo,UserName,Description,Textarea,Button,Date}
import styled from "styled-components";
import { mobile } from "../../Responsive";

const CommentContainer=styled.div`
   display: flex;
   flex-direction:column;
   padding:20px;
   gap:20px;
   ${mobile({
          
          padding:'10px' ,  
          gap:'10px'  
         })}

`
const TopSection=styled.div`
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      margin: 20px 0px;
      padding:15px;
      ${mobile({
          margin:'10px 0px',
          padding:'5px' ,  
          gap:'10px'  
         })}

   
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
        ${mobile({
          
        fontSize:'15px'  
         })}

`
const Description=styled.p`
        text-align: justify;
        color:#5A5A5A;
        ${mobile({
          
          fontSize:'13px'  
           })}

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
        border-radius: 10px;
        resize: none;
        font-family:'Roboto';
        &:focus{
                outline: none;
        }
        ${mobile({
         fontSize:'1.0rem',
         margin:'0px 10px'
           })}
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
        ${mobile({
          
          fontSize:'0.96rem' 
           })}
      
        
`
const Date=styled.p`       
        align-self: center;
        color: gray;
        font-size: 12px;
        ${mobile({
          
          fontSize:'10px'  
           })}
`

export {CommentContainer,TopSection,BottomSection,UserInfo,UserName,Description,Textarea,Button,Date}
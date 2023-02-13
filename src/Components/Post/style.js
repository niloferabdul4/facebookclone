import styled from "styled-components";
import { mobile } from "../../Responsive";

const PostContainer=styled.div`
    width: 100%;
    margin-top: 15px;
    border-radius: 15px;
    background-color: white;
    box-shadow: 0px 5px 7px -7px rgba(0,0,0,0.75);
    ${mobile({
        
          width:'360px',
          margin:'15px 0px',
          borderRadius:'2px'
         })}

`
const TopPost=styled.div`
    width:100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px;
    ${mobile({
         
          width:'360px'          
         })}
`

const TopPostInfo=styled.div`
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap:8px;
    margin-left:6px;
  

`
const PostHeading=styled.h3`    
    font-weight:400;
    ${mobile({
         fontSize:'16px'         
         })}
`

const PostMessage=styled.p`
    font-size:18px;
    color:#333333;
    line-height:30px;
    padding: 10px;
    ${mobile({
         fontSize:'14px' ,
         padding:'4px'        
         })}

`

const CenterPost=styled.div`
    width:100%;
    padding:10px;
    flex:1;
    flex-grow: 2;


`

const PostImage=styled.img`
    width:100%;
`

const BottomPost=styled.div`
    padding-top: 10px;
    cursor: pointer;
    padding: 15px 25px;    
    color:	#5A5A5A;
    //min-height:80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p{
        font-size: 18px;
        ${mobile({
       fontSize:'14px' ,
        paddingBottom:'0px'        
         })}
    }
  
`
const PostOptionLeft=styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    
   
`

const PostOptionRight=styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    

`


const BottomFooterPost=styled.div`
    padding-top: 10px;  
    display: flex;
    justify-content: space-evenly;
    cursor: pointer;
    color:	#5A5A5A;
    ${mobile({
        width:'360px' , 
        padding:'0px'      
         })}

`

const PostOption=styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    flex: 1;
    p{
        margin-left: 10px;
        font-size: 18px;
        ${mobile({
       fontSize:'14px',
       padding: '0px'
         })}
    }
    &:hover{
        background-color: #eff2f5;
        border-radius: 10px;
        
    }
    ${mobile({
       padding:'0px' ,
         
         })}
  

`

export {PostContainer, TopPost,TopPostInfo,CenterPost,PostHeading,PostMessage,
       PostImage,BottomPost,BottomFooterPost,PostOption,PostOptionLeft,PostOptionRight}
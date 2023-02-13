import styled from "styled-components";
import { mobile } from "../../Responsive";

const NavbarContainer=styled.div`
    height:60px;
    width: 100%;
    display:flex;
    flex-direction: row;
    padding:25px;
    border:0.06px solid lightgrey;
    position:sticky;
    top:0;
    background-color: white;
    z-index: 999;
        ${mobile({
       height:'40px',
       width:'380px',
       display:'flex',
       justifyContent:'space-between',
      
    })}

`

const LeftSection=styled.div`  
      flex:0.1% ; 
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 20px; 
      ${mobile({
       flex:'0.2'

    })}
 
`
const CenterSection=styled.div`
      display: flex;
      flex: 0.7%;
      justify-content:space-around;
      ${mobile({
       display:'none' 
    

    })}
     
`

const RightSection=styled.div`
      flex:0.1%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: 10px; 
      ${mobile({
          

         })} 
      
`

const RightSectionMenus=styled.span`
    ${mobile({
          display:'none'

         })} 


`

const Logo=styled.h3`
      font-family:'Open Sans';
      color:'#5A5A5A'
      ${mobile({
     
      margin:'4px'

    })}

`
const Search=styled.div`
        display: flex;
        align-items: center;
        gap: 10px;     
        border-radius: 5px;
        padding: 2px;
        border: 0.2px solid lightgrey;
     
        
`

const Input=styled.input`
        border:none;
        width: 300px;
        height:24px;
        text-indent: 6px;
        font-size: 1.05rem;
        ${mobile({       
            width:'100px',
            fontSize:'0.96rem'
   })}
      
 `

const User=styled.span`
        display:flex;
        justify-content: flex-end;
        align-items: center;      
        
   
`

const Logout=styled.h3`
        font-weight:400;
        color:darkslateblue;
        margin-right:10px;
        ${mobile({
          
          marginRight:'5px',
          fontSize:'15px'
                  
        })}



`
const NavMenus=styled.div`
        display:flex;
        align-items: center;
        justify-content: flex-start;
        color:	${props=>props.id==='active'? '#1b74e4' : '#5A5A5A'};        
        &:hover 
        {
         color: #1b74e4;             
         border-radius: 2px;  
        
        }  
       
`

export {NavbarContainer,LeftSection,RightSection,CenterSection,RightSectionMenus,Logo,Search,Input,User,Logout,NavMenus}
import styled from "styled-components";
import { mobile } from "../../Responsive";

const LeftbarContainer=styled.div`
        padding: 25px 10px;
        flex:0.2;
        height: calc(100vh - 50px);
        position: sticky;
        top: 50px;
       
        &:hover{
                overflow-y: scroll;  
        }    
            
        ::-webkit-scrollbar{
        width: 5px;
        }

        ::-webkit-scrollbar-track{
        background-color: #f1f1f1;
        }

        ::-webkit-scrollbar-thumb{
        background-color: lightgray;
        }
        ${mobile({
        display:'none'

         })}

`

const Wrapper=styled.div`
        display: flex;
        flex-direction: column;
        justify-content:flex-start;
        align-items: center;
        padding:10px;  
        

`

const MenuItems=styled.div`
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        width:100%;
        border-bottom: 0.3px solid lightgrey;
        padding: 10px 0px;      

`

const MenuUser=styled.div`
        display: flex;
        flex-direction:row;
        justify-content: flex-start;
        align-items: center;    
        margin: 10px;
        width:100%;
        gap:10px;
       

`

const LogoutContainer=styled.div`
        display: flex;
        flex-direction:row;
        justify-content: flex-start;
        align-items: center;
        padding:10px 10px;
        margin: 6px;
        gap:15px;
        width:100%;
        cursor:pointer;
        &:hover{
        background-color: lightgrey;
        border-radius: 20px; 
        }
        h3{
                font-size: 1.1rem;      
                font-weight:400;
        }      

    
`

const Image=styled.img`
        border-radius: 50%;
        width:30px;
        height:30px;
        object-fit : cover;   

`

const ItemWrapper=styled.span`
        display: flex;
        flex-direction:row;
        justify-content: flex-start;
        align-items: center;
        padding:10px 10px;
        margin: 6px;
        gap:15px;
        width:100%;
        cursor:pointer;
        &:hover{
        background-color: lightgrey;
        border-radius: 20px;        

    }

`
const MenuIcon=styled.img`
        color: blue;
        width:30px;
        height:30px;
       
    

`
const MenuTitle=styled.h3`
        font-size: 18px;      
        font-weight:400;
       
`

const ShowMoreButton=styled.div`
       
        border-radius: 5px;
        padding: 10px;
        margin: 20px;
        font-size: 1.15rem;        
        border: none;
        cursor: pointer;
        display:flex;
        gap:6px;

`
export {LeftbarContainer,Wrapper,MenuItems,LogoutContainer,MenuUser,Image,ItemWrapper,MenuIcon,MenuTitle,ShowMoreButton}
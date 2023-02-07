import styled from "styled-components";
import { mobile } from "../../Responsive";
const RightBarContainer=styled.div`
        flex:0.25;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        padding: 10px;
        height: calc(100vh - 50px);
        position: sticky;
        top: 50px;
        overflow-y: scroll;     
            
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

const MenuTitle=styled.p`       
        font-size: 20px;
        font-weight: 600;
        margin:10px 0px;
        color:	#5A5A5A;
        flex:0.5%;
       
`
const MenuIcons=styled.div`   
       font-weight: 600;
       color:	#5A5A5A;
       flex:0.5%;
          
`

const Container=styled.div`
       display:flex;
       flex-direction: column;
       align-items: flex-start;
       margin:20px 0px;
       border-bottom: 0.3px solid lightgrey;
                    
`
const OnlineFriendsWrapper=styled.div`
        display: flex;
        flex-direction:row;
        justify-content:flex-start;
        align-items: center;     
        width:100%;
        padding:2px 30px 0px 10px; 
        cursor:pointer;     
        &:hover{
        background-color: lightgrey;
        border-radius: 20px;        

    }

`
const FriendsWrapper=styled.div`
        display: flex;
        flex-direction:row;
        justify-content:space-between;
        align-items: center;     
        width:100%;
        cursor:pointer;
        padding:2px 30px 0px 10px;  
        &:hover{
        background-color: lightgrey;
        border-radius: 20px;  
          

    }

`

const PersonName=styled.h3`
      font-weight:400;
      margin-right: 10px;
      position:relative; 
      display:flex;
      align-items :center ;
      flex:1;

`

const ImgContainer=styled.div`
     margin-right: 10px;
     position:relative; 
     display:flex;
     align-items :center ;
  

`

const OnlineStatus=styled.div`
    height:15px;
    width: 15px;
    border-radius: 50%;
    background-color: limegreen;
    position: absolute;
    top:8px;
    left:40px;
    border: 2px solid white;
`

const Left=styled.div`
     display:flex;
     align-items :center ;
     flex:1;
     margin-right: 20px;;
`

const Right=styled.div` 
    justify-content: center;
    margin-left: 20px;

`

const AddFrndButton=styled.button` 
    height:30px;
    width:70px;
    background-color: teal;
    color:white;
    font-size: 0.80rem;
    border-radius:10px;
    border: none;
    cursor: pointer;  

`
const TopSection=styled.div`
     width:100%;
     display: flex;
     flex-direction: row;
     justify-content:space-between;
     align-items: center;
     color:#5A5A5A;
     margin:20px 0px;

`

const VideContainer=styled.div`
    height:500px;
    width:100%;

`
export {RightBarContainer,
        Container,
        OnlineFriendsWrapper,
        FriendsWrapper,
        Left,Right,
        ImgContainer,
        PersonName,
        MenuTitle,
        MenuIcons,
        OnlineStatus,
        AddFrndButton,
        TopSection,
        VideContainer
    }
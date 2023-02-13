import styled from "styled-components";
import { mobile } from "../../Responsive";

const LoginContainer=styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgb(193, 190, 255);  
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({
         gap:'0px',
         width:'380px',
             
         })}

  `


const Card=styled.div`
  width:700px;
  height:500px;
  background-color: white;
  display: flex;
  flex-direction: row;

  ${mobile({
         height:'500px',
         width:'280px' ,
         flexDirection:'column',
         borderRadius:'6px'
         })}

`
const LeftSection=styled.div`
  flex:0.55;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(rgba(39, 11, 96, 0.5), rgba(39, 11, 96, 0.5)),
        url("https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600")
          center;
  background-size: cover;
  color:white;
  padding: 30px;
  gap:25px;  
  ${mobile({
         padding:'15px'
         })}

 
`

const RightSection=styled.div`
  flex:0.45;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  ${mobile({
        padding: '15px'
         
         })}

`
const MainTitle=styled.h1`
  font-weight:600 ;
  margin:10px;
  ${mobile({
        fontSize:'24px'
         })}

`

const Text=styled.h3`
  font-weight: 400;
  text-align: justify;
  ${mobile({
        fontSize:'16px'
         })}
`

const SubTitle=styled.h2`
  margin:10px;
  font-weight:400;
  color:darkslateblue;
  ${mobile({
        fontSize:'20px'
         })}

`
const Button=styled.button`
  background-color: ${props=>props.id==='login' ? 'darkslateblue' : 'grey'};
  color:white;
  margin: 20px;
  width:80%;
  padding:12px;
  font-size: 1.1rem;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  border: none;
  cursor:pointer;
  ${mobile({
        fontSize:'0.96rem'
         })}

`

export {LoginContainer,Card,LeftSection,RightSection,MainTitle,SubTitle,Text,Button}
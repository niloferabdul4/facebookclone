
import styled from "styled-components";
import { mobile } from "../../Responsive";


const ReelsContainer=styled.div`
    display:flex;
    flex-direction:row;
    justify-content: center;
    margin:20px;
    align-items: center; 
     ${mobile({       
      
      margin:'10px 0px'         
     })}

`

const StoryContainer=styled.div`
    position: relative;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 120px;
    height: 200px;
    box-shadow: 0px 5px 17px -7px rgba(0,0,0, 0.75);
    border-radius: 10px;
    margin-right: 10px;
    transition: transform 100ms ease-in;
    cursor: pointer;     
    &:hover {
        transform: scale(1.07);
    }
    ${mobile( {
    width: '80px',
    height: '130px',
   
    })
  }

`


const StoryTitle=styled.h3`
    position: absolute;
    bottom: 20px;
    left: 20px;
    color: white;
    font-weight:400;
    ${mobile({       
        
       fontSize:'12px'
            
                  })}
 
`


export {ReelsContainer,StoryContainer,StoryTitle}
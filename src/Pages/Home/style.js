import styled from "styled-components";
import { mobile } from "../../Responsive";

const HomeContainer=styled.div`      
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 100%;
    position: relative;
    height: calc(100vh - 50px);
    ${mobile({
         gap:'0px',
        // padding:'10px',          
          margin:'15px 0px' ,
          flex:'1'      
         })}

`
export {HomeContainer}


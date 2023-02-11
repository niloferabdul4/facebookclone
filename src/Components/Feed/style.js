import styled from "styled-components";
import { mobile } from "../../Responsive";

const FeedContainer=styled.div`   
    flex:0.7;
    padding: 60px 100px;
    position: relative;
    overflow-x: auto;
    height: inherit;
 
    &::-webkit-scrollbar {
    display: none;
  }
  ${mobile({
          gap:'0px',
           padding:'0px 0px',
           margin:'10px',
           flex:'1'
         })}

    `
    export default FeedContainer;
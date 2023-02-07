import React from 'react';
import * as C from'./style'
import Leftbar from '../../Components/Leftbar/Leftbar';
import Rightbar from '../../Components/Rightbar/Rightbar';
import Feed from '../../Components/Feed/Feed';

const Home = () => {
       return (
      <>     
     
        <C.HomeContainer> 
            <Leftbar /> 
            <Feed />                                           
            <Rightbar />
        </C.HomeContainer>
        </>
    );
}

export default Home;

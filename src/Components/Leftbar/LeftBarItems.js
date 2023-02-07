import React from 'react';
import * as C from './style';

const LeftBarItems = ({icons,title}) => {
    return (
      <>      
         <C.ItemWrapper>         
              <C.MenuIcon src={icons} />
              <C.MenuTitle>{title}</C.MenuTitle>   
        </C.ItemWrapper>
      
        </>
    );
}

export default LeftBarItems;

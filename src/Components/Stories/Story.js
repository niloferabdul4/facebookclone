import { Avatar } from '@mui/material';
import React from 'react';
import * as C from './style'

const Story = ({image,profileSrc,title}) => {
   
    return (
        <C.StoryContainer style={{ backgroundImage: `url(${image})`}} >
            <Avatar style={{margin: '10px', border: '5px solid #2e81f4'}}  src={profileSrc} />
            <C.StoryTitle>{title}</C.StoryTitle>      
        </C.StoryContainer>
    );
}

export default Story;

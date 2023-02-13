import { Avatar } from '@mui/material';
import React from 'react';
import * as C from './style'

const Story = ({image,profileSrc,title}) => {

    const styles={   
                    margin: '4px',
                    border: '5px solid #2e81f4',
                   
                 }
   
    return (
        <C.StoryContainer style={{ backgroundImage: `url(${image})`}} >
            <Avatar style={styles}  src={profileSrc} />
            <C.StoryTitle>{title}</C.StoryTitle>      
        </C.StoryContainer>
    );
}

export default Story;

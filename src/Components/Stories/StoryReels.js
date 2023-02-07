import React from 'react';
import Story from './Story';
import { nanoid } from 'nanoid';
import * as C from './style'
import { story_data } from '../../data';

const StoryReels = () => {
    return (
        <C.ReelsContainer>
            {story_data.map(item=>{return <Story  key={nanoid()} 
                                                  image={item.image}
                                                  profileSrc={item.profileSrc}
                                                  title={item.title}
                                                />})}

        </C.ReelsContainer>
    );
}

export default StoryReels;

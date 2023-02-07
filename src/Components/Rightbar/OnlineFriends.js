import React from 'react';
import { Avatar } from '@mui/material';
import * as C from './style'

const OnlineFriends = ({onlineUsers}) => {
      return (
        <>
            <C.OnlineFriendsWrapper >
                 <C.ImgContainer>
                        <Avatar style={{margin: '10px', border: '5px solid #2e81f4'}} src={onlineUsers.profilePic} />
                        <C.OnlineStatus></C.OnlineStatus>
                 </C.ImgContainer>                
                 <C.PersonName> {onlineUsers.username}</C.PersonName>                                              

            </C.OnlineFriendsWrapper>
                
        </>
    );
}

export default OnlineFriends;

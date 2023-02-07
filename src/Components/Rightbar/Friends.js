import React from 'react';
import { Avatar } from '@mui/material';
import * as C from './style'

const Friends = ({Users}) => {
 
    return (
        <>
            <C.FriendsWrapper id='friends' >
                 <C.Left>
                        <Avatar style={{margin: '10px', border: '5px solid #2e81f4'}} src={Users.profilePic}  />
                        <C.PersonName> {Users.username}</C.PersonName>    
                 </C.Left>                
                <C.Right>
                    <C.AddFrndButton>Follow</C.AddFrndButton>
                </C.Right>                                            
            </C.FriendsWrapper>                
        </>
    );
}

export default Friends;

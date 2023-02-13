import React from 'react';
import onlinestatus_data from '../../data';
import OnlineFriends from './OnlineFriends';
import Suggested from './Suggested';
import { SuggestedUsers } from '../../data';
import VideocamIcon from '@mui/icons-material/Videocam';
import SearchIcon from '@mui/icons-material/Search';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import * as C from './style'

const Rightbar = () => {
    return (
    <>
        
        <C.RightBarContainer> 
            {/*
            <VideContainer>
                     <iframe width="100%" height="300" src="https://www.youtube.com/embed/4-Yv4PzseHU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </VideContainer>
    */}
            <C.Container>
                <C.TopSection>
                    <C.MenuTitle>Online Contacts</C.MenuTitle>
                    <C.MenuIcons>
                        <VideocamIcon style={{marginRight:'10px'}} />
                        <SearchIcon style={{marginRight:'10px'}}/>
                        <MoreHorizIcon style={{marginRight:'10px'}}/>
                    </C.MenuIcons>                
                </C.TopSection>                
                {onlinestatus_data.map(item=>{return <OnlineFriends key={item.id} onlineUsers={item} />})}               
            </C.Container>        
         
             <C.Container>
                <C.MenuTitle>Suggested For You</C.MenuTitle>
                {SuggestedUsers.map(item=>{return <Suggested key={item.id} Users={item} />})}               
            </C.Container>     
        </C.RightBarContainer>
        </>
    );
}

export default Rightbar;

import React,{useContext} from 'react';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FlagIcon from '@mui/icons-material/Flag';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import { Link } from 'react-router-dom';
import { NavbarContainer,LeftSection,RightSection,CenterSection,Logo,Search,Input,User,NavMenus } from './style';
import {Avatar, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import { AppContext } from '../../Context/AppContext';

const Navbar = () => {

    const{user}=useContext(AppContext)
    const styles={
        fontSize:'32px'
       

    }

    return (
        <>
            <NavbarContainer>
                 {/* Navbar is split into 3 areas : center, left & right */}
                <LeftSection>
                        <Link to ='/' style={{textDecoration:'none'}}>
                        <Logo>Socio</Logo> 
                        </Link>
                        <Search>
                            <SearchOutlinedIcon />
                            <Input type='text' placeholder="search"  />                       
                        </Search> 
                    </LeftSection>
                    <CenterSection>

                        <NavMenus id='active'>
                                <HomeOutlinedIcon style={styles} />
                         </NavMenus>
                        <NavMenus>
                                <FlagIcon style={styles}  />
                        </NavMenus>                        
                        <NavMenus>
                            <StorefrontOutlinedIcon style={styles} />
                        </NavMenus> 
                        <NavMenus>
                        <MailOutlineOutlinedIcon style={styles} />
                        </NavMenus>                        
                        <NavMenus>
                            <PeopleAltOutlinedIcon style={styles} />
                        </NavMenus>

                    </CenterSection>
                        
                            
                <RightSection>

                     <User>                    
                            <Avatar src={user.photoURL}  />
                    </User>                
                   
                    
                    <IconButton>
                        <AddIcon />                
                    </IconButton>
                    <IconButton>
                        <ForumOutlinedIcon/>                
                    </IconButton>
                    <IconButton>
                        <NotificationsActiveOutlinedIcon />                
                    </IconButton>
                    <IconButton>
                        <ExpandMoreOutlinedIcon />                
                    </IconButton>
                
                </RightSection>
            </NavbarContainer>
        </>
    );
}

export default Navbar;

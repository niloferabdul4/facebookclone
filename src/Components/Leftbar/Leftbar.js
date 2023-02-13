import React,{useContext, useState} from 'react';
import LeftBarItems from './LeftBarItems';
import { nanoid } from 'nanoid';
import * as C from './style'
import leftbar_items from './MenuItems';
import { AppContext } from '../../Context/AppContext';
import { Avatar } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import { auth } from '../../Firebase/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Leftbar = () => {
    const{user,setUser}=useContext(AppContext)
   const [expandMenu,setExpandMenu]=useState(false)
    const navigate=useNavigate()

    const handleLogout=()=>{
        signOut(auth)
        .then((authUser)=>{  
               setUser(null)
               navigate('/login')
            
               
                })
        .catch((error)=>alert(error.message))
      
    }
   

    return (
        <C.LeftbarContainer>
            <C.Wrapper>             
                 <C.MenuUser>                     
                    <Avatar src={user.photoURL} />
                    <h3 style={{fontWeight:400}}>{user.displayName}</h3>
                 </C.MenuUser>
                 <C.MenuItems>
                    {leftbar_items.slice(0,4).map(item=>{return <LeftBarItems key={nanoid()} icons={item.Icon}  title={item.Title}
                                                    />
                                            })}       
                 
                 </C.MenuItems>
           
                 <C.MenuItems>  
                                   
                    {leftbar_items.slice(5,9).map(item=>{return <LeftBarItems key={nanoid()} icons={item.Icon}  title={item.Title}
                                                        />
                                                })}

                    <C.LogoutContainer>
                                <ExitToAppOutlinedIcon style={{marginLeft:'0px' ,color:'darkslateblue' ,display:'flex',justifyContent:'flex-start'}} />
                                <h3 onClick={handleLogout}>Logout</h3>
                    </C.LogoutContainer>
                   {!expandMenu ?  
                    (<C.ShowMoreButton onClick={()=>setExpandMenu(!expandMenu)} >                      
                                <ExpandMoreIcon />See More                      
                    </C.ShowMoreButton>   
                    )
                    :
                    (<C.ShowMoreButton onClick={()=>setExpandMenu(!expandMenu)} >                      
                                <ExpandLessIcon />See Less                      
                    </C.ShowMoreButton>   
                    )
                   }
      
                 </C.MenuItems>

            {expandMenu&&
                <C.MenuItems>                                    
                    {leftbar_items.slice(9,12).map(item=>{return <LeftBarItems key={nanoid()} icons={item.Icon}  title={item.Title}/> })}      
                </C.MenuItems>   
                 
                 }
                              
            </C.Wrapper>              
        </C.LeftbarContainer>
    );
}

export default Leftbar;

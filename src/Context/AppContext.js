import { onAuthStateChanged } from 'firebase/auth';
import React, { createContext,useState,useEffect } from 'react';
import { auth } from '../Firebase/firebase';
export const AppContext=createContext()


export const AppProvider = ({children}) => {
              const [user,setUser]=useState({})
              const [posts,setPosts]=useState([])

    useEffect(()=>{
        const unSub=onAuthStateChanged(auth,(user)=>{setUser(user)});
        return ()=>{
            unSub();
        }
    },[]);


              return (
               
                    <AppContext.Provider value={{user,setUser,posts,setPosts}}>                
                        {children}
                    </AppContext.Provider>            
              
            );
        }



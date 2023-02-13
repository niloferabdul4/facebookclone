import React from 'react';
import * as C from './style'
import { useNavigate } from 'react-router-dom';
import {signInWithPopup } from 'firebase/auth';
import { useContext } from 'react';
import { AppContext} from '../../Context/AppContext';
import { auth,provider } from '../../Firebase/firebase';

const Login = () => {
   
    const navigate=useNavigate()
    const {user,setUser}=useContext(AppContext)
        const handleLogin=async()=>
        {                    
                await signInWithPopup(auth,provider)
                .then((authUser)=>{  
                    console.log(authUser)
                       setUser(authUser.user)
                       navigate('/')
                       localStorage.setItem('email',user)
                       
                        })
              .catch((error)=>alert(error.message))
        }  
             
    return (
        <>
        <C.LoginContainer>
           <C.Card>
                <C.LeftSection>
                    <C.MainTitle>Socio</C.MainTitle>
                    <C.Text>Connect with friends and the world around you on Socio.</C.Text>
                </C.LeftSection>
                <C.RightSection>
                    <C.SubTitle>Login</C.SubTitle>
                    <C.Button id='login' type='submit'  onClick={handleLogin}>Sign In With Google</C.Button>                   
                   {/* <Button type='submit' onClick={()=>{navigate('/register')}} >Create A New Account</Button>*/}                
                </C.RightSection>
           </C.Card>     
       </C.LoginContainer>
       </>
    );
}

export default Login;

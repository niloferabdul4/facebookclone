import { addDoc, collection} from '@firebase/firestore';
import { db } from '../../Firebase/firebase';
import { Avatar } from '@mui/material';
import React, { useContext, useState } from 'react';
import { AppContext } from '../../Context/AppContext';
import * as C from './style'



const Comments = ({postId,setCommentBoxOpen,showAllComments,commentBoxOpen,commentsList,setCommentsList}) => {
    const {user}=useContext(AppContext)  
    const [input,setInput]=useState('')      
  
    const handleSubmit=async(event)=>{     
        event.preventDefault() 
        setCommentBoxOpen(false)
        await addDoc(collection(db,'posts', postId,'comments'),{                                                          // add a document //                  
                                                                input:input,
                                                                username:user.displayName,
                                                                photoURL:user.photoURL,
                                                                userId:user.uid,
                                                               
    })                       
     setCommentBoxOpen(false)
     setInput('')    
     
    }

    return (
        <>    
       <C.CommentContainer>     
              {commentBoxOpen &&  <C.TopSection>
                    <Avatar src={user.photoURL} />                  
                    <C.Textarea type='text' rows={1} placeholder='Write a comment' onChange={(event)=>setInput(event.target.value)}/>
                    {input!=='' && <C.Button type='submit' onClick={handleSubmit}>Send</C.Button> }              
                </C.TopSection>
              } 
          
            {showAllComments && (
            <>
            {commentsList.sort((a, b) => b.data.timestamp - a.data.timestamp)
                .map((cmt)=>(
                    <>
                    <C.BottomSection key={cmt.id}>
                        <Avatar src={cmt.data.photoURL}/>
                        <C.UserInfo>
                            <C.UserName>{cmt.data.username}</C.UserName>
                            <C.Description>{cmt.data.input}</C.Description>
                        </C.UserInfo>
                   </C.BottomSection>
                  </>
                ))}
                </>)}               
                </C.CommentContainer>                   
      
        </>
    )
    }
export default Comments;

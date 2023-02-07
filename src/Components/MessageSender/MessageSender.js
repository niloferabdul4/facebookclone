import React,{useState,useContext} from 'react';
import VideocamIcon from '@mui/icons-material/Videocam';
import CollectionsIcon from '@mui/icons-material/Collections';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { AppContext } from '../../Context/AppContext';
import {  addDoc, collection} from 'firebase/firestore';
import { db, storage } from '../../Firebase/firebase';
import { getDownloadURL } from '@firebase/storage';
import { uploadBytesResumable } from '@firebase/storage';
import { ref } from '@firebase/storage';
import { uuidv4 } from '@firebase/util';
import Picker from '@emoji-mart/react';
import { Avatar} from '@mui/material';
import * as C from './style'


const MessageSender = () => {        
        const [input,setInput]=useState('')
        const [image,setImage]=useState('')
        const [showEmoji,setShowEmoji]=useState(false)
        //const [imageUrl,setImageUrl]=useState('')
        const [error,setError]=useState(false)
        const {user}=useContext(AppContext)
        
    
    const handleSubmit=(event)=>
    {
        event.preventDefault();   
        // we use some DB here to post anything in the feed (here we programmatically push all data to DB)         
        const postRef=collection(db,'posts')                
        if(image==='')                                                                      // if no image 
        {
            addDoc(postRef,{ uid: user.uid,   
                                            body: input,
                                            timestamp: new Date(),
                                            profilePic:user.photoURL,
                                            username: user.displayName,                                  
                                        
                                            })
        }  
        else                                                                               // if there is an image 
        {         
          // Create a reference to image                                                                 
            const storageRef = ref(storage, `images/${image}` + uuidv4());                           // store image in images folder in storage)

            // Upload the file and metadata
            const uploadTask = uploadBytesResumable(storageRef, image);
            
            
            uploadTask.on(
                (error) => {                                                              // Handle unsuccessful uploads
                  setError(true);
                },
                () => {
                  getDownloadURL(uploadTask.snapshot.ref).then( (url) => {            // Handle successful uploads on complete,now we can get the download URL/
                    addDoc(postRef,{  
                        uid: user.uid, 
                        body: input,
                        timestamp: new Date(),
                        profilePic:user.photoURL,
                        username: user.displayName, 
                        photo:url                                                                      
                    
                        })
          
        } )} )           
     
    }
    
    setInput("");
    setImage('') 
    setShowEmoji(false) 
   
}
    const uploadFile=()=>{
        document.getElementById('imageFile').click();         // click the file with id 'imageFile' ie) input choose file

    }

    const handleFileChange=(event)=>{
        if(event.target.files[0]){
            setImage(event.target.files[0])
           
        }
    }
    const addEmoji = (e) => {
        let sym = e.unified.split("-");
        let codesArray = [];
        sym.forEach((el) => codesArray.push("0x" + el));
        let emoji = String.fromCodePoint(...codesArray);
        setInput(input + emoji);
      };

    return (
        <C.MessageContainer>
            <C.TopSection>
                <Avatar src={user.photoURL} />
                <C.Form >
                    <C.Textarea value={input} rows={2}  type='text' onChange={(event)=>{setInput(event.target.value)}} placeholder={`What's on your mind?,${user.displayName}`} />
                   {/*<UrlInput value={imageUrl} onChange= {(event)=> setImageUrl(event.target.value)} placeholder="Image URL (Optional)"/>*/}
                    <C.Button type='submit' onClick={handleSubmit} >Send</C.Button>
                </C.Form>                
            </C.TopSection>            
            <C.BottomSection>
                  <C.MessageSenderOptions>
                     <VideocamIcon style={{color:'red'}}/>
                     <h3>Live Video</h3>
                  </C.MessageSenderOptions>                
                <C.MessageSenderOptions onClick={uploadFile} >
                    <CollectionsIcon style={{color:'green'}}/>
                    <h3 >Photos/Videos</h3>
                </C.MessageSenderOptions>
                <C.HiddenInput type='file' id='imageFile' onChange={handleFileChange} />
                <C.MessageSenderOptions onClick={()=>setShowEmoji(!showEmoji)}>
                    <EmojiEmotionsIcon  style={{color:'orange'}}/>
                    <h3>Feeling/Activity</h3>                    
                </C.MessageSenderOptions>  
                
            </C.BottomSection>
            {showEmoji && (<C.Emoji>
                <Picker theme={'dark'} onEmojiSelect={addEmoji} />
                </C.Emoji>)}
        </C.MessageContainer>
    );
}

export default MessageSender;

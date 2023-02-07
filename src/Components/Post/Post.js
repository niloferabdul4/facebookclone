import React,{useState,useContext, useEffect} from 'react';
import { Avatar } from '@mui/material';
import Comments from '../Comments/Comments';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined'
//import ShareOutlinedIcon from '@mui/icons-material/ShareOutlinedIcon';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import {  collection, deleteDoc, doc, onSnapshot, setDoc } from '@firebase/firestore';
import { db } from '../../Firebase/firebase';
import { AppContext } from '../../Context/AppContext';
import * as C from './style'
import ReactTimeago from 'react-timeago';


const Post = ({postId,photo,profilePic,username,timestamp,body}) => {   

    const [likes, setLikes] = useState([]);
    const [liked, setLiked] = useState(false);
    const [commentBoxOpen,setCommentBoxOpen]=useState(false)
    const [showAllComments,setShowAllComments]=useState(false)
    const [commentsList,setCommentsList] =useState([])   
    const {user}=useContext(AppContext)

    useEffect(() => {
        const unSub = onSnapshot(
          collection(db, "posts", postId, "likes"),
          (snapshot) => setLikes(snapshot.docs)
        );
        return () => {
          unSub();
        };
      }, [postId]);
    

      /**** Check if likes already exist in our collection  *******/
      
     // if it is already liked by the current user (if liked post id and user id is same)
     // find the index of post if its id = user id  (if true--> return index  if false--->return -1//  
     //  eg setLiked(-1 !== -1)  
    
     useEffect(() => 
    {
        setLiked(likes.findIndex((like) => like.id === user?.uid)!==-1  )          
     }, [likes, user.uid]);
    
   

    useEffect(()=>{
        const unSub=onSnapshot(collection(db,'posts',postId,'comments'),(snapShot)=>
        {setCommentsList(snapShot.docs.map((snapShot)=>({id:snapShot.id, data:snapShot.data()})))})
        return () => {
            unSub();
          };
    },[postId])
    

    const likePost = async () => {
            //setLiked(prevLiked=>!prevLiked)
          
            if (liked)
            {
                await deleteDoc(doc(db, "posts", postId, "likes", user.uid));
            } 
            else
            {
                await setDoc(doc(db, "posts", postId, "likes", user.uid), {userId: user.uid});
            }
        };
  
    return (
        <C.PostContainer>
            <C.TopPost>
                <Avatar src={profilePic} />
                <C.TopPostInfo>
                    <C.PostHeading>{username}</C.PostHeading>
                    <ReactTimeago  style={{fontSiize: '12px', color:'gray' }} date={new Date(timestamp?.toDate()).toLocaleString()} />
                </C.TopPostInfo>
            </C.TopPost>
            <C.CenterPost>
                 <C.PostMessage>{body}</C.PostMessage>
                 <C.PostImage src={photo}  />     
            </C.CenterPost>
              
            <C.BottomPost>                
                <C.PostOptionLeft >  
                    {
                      likes.length > 0 &&  (<>
                                            <ThumbUpIcon style={{color:'#1b74e4'}}  onClick={likePost}/>
                                            <p>{likes.length}</p>
                                            </>
                                           )
                    }                 
                          
                </C.PostOptionLeft>
                <C.PostOptionRight >                    
                    <span onClick={()=>setShowAllComments(!showAllComments)}>
                        <p >{commentsList.length>0 && commentsList.length} comments</p>                         
                    </span>                                                 
                    <p>shares</p>                 
                </C.PostOptionRight>                  
         </C.BottomPost>
         <hr style={{color:'#dadada' ,margin:'10px'}}></hr>
            <C.BottomFooterPost>                
                <C.PostOption onClick={likePost}>
                            {liked ?(<ThumbUpIcon style={{color:'#1b74e4'}} />) : (<ThumbUpAltOutlinedIcon  />)}
                            <p>Like</p>
                </C.PostOption>
                <C.PostOption  onClick={()=>{setCommentBoxOpen(!commentBoxOpen)}}>
                    <ChatBubbleOutlineIcon />
                    <p>Comment</p>
                </C.PostOption> 
                <C.PostOption>
                    <ShareOutlinedIcon />
                    <p>Share</p>
                </C.PostOption>
                      
         </C.BottomFooterPost>
            <Comments postId={postId}   commentBoxOpen={commentBoxOpen} 
                                        setCommentBoxOpen={setCommentBoxOpen} 
                                        showAllComments={showAllComments}
                                        setShowAllComments={setShowAllComments}
                                        commentsList={commentsList}
                                        setCommentsList={setCommentsList}
            />
           </C.PostContainer>
    );
}

export default Post;

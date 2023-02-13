import React,{useEffect,useContext}  from 'react';
import { db } from '../../Firebase/firebase';
import { onSnapshot,collection } from 'firebase/firestore';
import { AppContext } from '../../Context/AppContext';
import Post from '../../Components/Post/Post';
import FeedContainer from './style';
import MessageSender from '../MessageSender/MessageSender';
import StoryReels from '../Stories/StoryReels';

const Feed = () => {

    const {posts,setPosts}=useContext(AppContext)
     
    useEffect(() => {
      const unSub = onSnapshot(collection(db, "posts"), (post) => {
        setPosts(post.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
      });
      return () => {
        unSub();
      };
    }, []);
    return (
        <FeedContainer>
            <StoryReels/>
             <MessageSender />        
            {posts
            .sort((a, b) => b.data.timestamp - a.data.timestamp)                             // sort posts by newest first ///
            .map(item=>{return <Post key={item.id} 
                                        postId={item.id} 
                                        profilePic={item.data.profilePic}
                                        body={item.data.body}
                                        timestamp={item.data.timestamp}
                                        username={item.data.username} 
                                        photo={item.data.photo} 
                                        
                                            />
                                            })}         
        </FeedContainer>
    );
}

export default Feed;

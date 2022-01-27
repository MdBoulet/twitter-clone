import { StarPurple500 } from '@mui/icons-material';
import { collection, onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import db from './firebase';
import './Home.css';
import Post from './Post';
import TweetBox from './TweetBox';

function Home() {

    const [posts, setPost] = useState([]);

    useEffect(() => {
        onSnapshot(collection(db, 'posts'), (snapshot) => {
            setPost(snapshot.docs.map(doc => doc.data()))
        })
    },[]);


    return (
        <div className='home'>
            <div className="home__header">
                <h2>Home</h2>
                <StarPurple500 className='star_color'/>
            </div>
            <TweetBox />
            
            {
                posts.map(post => {
                    return <Post 
                            displayName={post.displayName} 
                            userName={post.userName} 
                            verified={post.verified} 
                            text={post.text} 
                            image={post.image} 
                            avatar={post.avatar} 
                        />
                })
            }
        </div>
    )
}

export default Home

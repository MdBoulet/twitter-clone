import { ChatBubbleOutline, FavoriteBorder, IosShare, Repeat, Verified } from '@mui/icons-material';
import { Avatar, getAvatarGroupUtilityClass } from '@mui/material';
import React from 'react';
import './Post.css';

function Post({displayName, userName, verified, text, image, avatar}) {
    return (
        <div className='post'>
            <Avatar src={avatar} />
            <div className="post__content">
                <h3>{displayName} <span className='username'> { verified && <Verified className="verified" />} @{userName}</span> </h3>
                <p>{text}</p>
                <br />
                <img src={image} alt="" />
                <div className="footer__post">
                    <ChatBubbleOutline />
                    <Repeat />
                    <FavoriteBorder />
                    <IosShare />
                </div>
            </div>
        </div>
    )
}

export default Post

import { Search } from '@mui/icons-material';
import React from 'react';
import { TwitterTimelineEmbed, TwitterTweetEmbed } from 'react-twitter-embed';
import './Widget.css';

function Widget() {
    return (
        <div className='widget'>
            <div className="search_input">
                <Search />
                <input type="text" placeholder='Search Twitter'/>
            </div>

            <TwitterTimelineEmbed className="timeline"
                sourceType="profile"
                screenName="elonmusk"
                options={{height: 400}}
            />

            <TwitterTweetEmbed
                tweetId={'1484453889671942144'}
            />
        </div>
    )
}

export default Widget

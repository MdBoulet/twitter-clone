import { BookmarkBorder, ExploreOutlined, Home, ListAlt, MailOutlined, MoreHoriz, NotificationsOutlined, PermIdentityOutlined, Twitter } from '@mui/icons-material';
import { Button } from '@mui/material';
import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';

function Sidebar() {
    return (
        <div className='sidebar'>

            <Twitter className='twitter__icon' />

            <SidebarOption active={true} Icon={Home} text="Home" />
            <SidebarOption Icon={ExploreOutlined} text="Explore" />
            <SidebarOption Icon={NotificationsOutlined} text="Notifications" />
            <SidebarOption Icon={MailOutlined} text="Messages" />
            <SidebarOption Icon={BookmarkBorder} text="Bookmarks" />
            <SidebarOption Icon={ListAlt} text="Lists" />
            <SidebarOption Icon={PermIdentityOutlined} text="Profile" />
            <SidebarOption Icon={MoreHoriz} text="More" />

            <Button className='sidebar_tweetButton' fullWidth>Tweet</Button>
        </div>
    )
}

export default Sidebar

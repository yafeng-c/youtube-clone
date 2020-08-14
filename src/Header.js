import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import youtube from './imgs/youtube.png';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';



function Header() {
    const [inputSearch, setInputSearch] = useState('');

    return (
        <div className="header">
            <div className="header_left">
                <MenuIcon />
                <Link to="/">
                    <img className="header_logo"
                    src={youtube} alt="YouTube Logo" />
                </Link>   
            </div>
            <div className="header_mid">
                <input type="text"
                 placeholder="Search"
                 value={inputSearch}
                 onChange={e=>setInputSearch(e.target.value)}
                />
                <Link to={`/search/${inputSearch}`}>
                    <SearchIcon className="searchButton" />
                </Link>
            </div>   
            <div className="header_right">
                <VideoCallIcon className="header_icon" />
                <AppsIcon className="header_icon" />
                <NotificationsIcon className="header_icon" />
                <Avatar />
            </div>           
        </div>
    )
}

export default Header

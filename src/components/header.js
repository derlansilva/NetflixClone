import React from "react";
import './header.css'
import profile from '../images/profile.jpg'
export default  ({black}) => {
    return(

        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="netflix"/>
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src={profile}/>
                </a>
            </div>
        </header>

    )
}
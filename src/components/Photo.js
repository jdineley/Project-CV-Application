import React from "react";
import Avatar from '../assets/profileAvatar.jpg'


export default function Photo() {

    return (
        <div className="photo--container">
            <img src={Avatar} alt="profile"/>
        </div>

    )
}
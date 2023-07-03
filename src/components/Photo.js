import React from "react";
import Avatar from '../assets/profileAvatar.jpg'


export default function Photo({personalData}) {

    return (
        <div className="photo--container">
            <img src={personalData.image} alt="profile"/>
        </div>

    )
}
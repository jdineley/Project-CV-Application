import React from "react";

export default function Title({personalData}) {

    return (
        <div className="title--container">
            <div className="title--container--name">{personalData.firstName} <br/> {personalData.lastName}</div>
            <div className="title--container--contact">
                <div className="title--container--contact--tel">{personalData.mobile}</div>
                <div className="title--container--contact--seperator">|</div>
                <div className="title--container--contact--email">{personalData.email}</div>
            </div>
            <div className="title--container--address">
                <div className="title--container--address--road">{personalData.road}</div>
                <div className="title--container--address--city">{personalData.city}</div>
                <div className="title--container--address--postcode">{personalData.postCode}</div>
            </div>
        </div>
            
        ) 
}
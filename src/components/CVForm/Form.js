import React from "react";

import "../../styles/form.css"

export default function Form({handleChange, themesArray, handleThemeSelect}) {

    const themesElements = themesArray.map(theme => {
        return <div key={theme} onClick={handleThemeSelect}>{theme}</div>
    })

    return (
        <div className="form--container">
            <div className="form--container--layoutSelect">
                {themesElements}
            </div>
            <form>
                <div className="form--container--personal">
                    <div className="form--container--personal--header">Personal Information</div>
                    <input placeholder="First name" name="firstName" onChange={handleChange}/>
                    <input placeholder="Last name" name="lastName" onChange={handleChange}/>
                    <input placeholder="Mobile" name="mobile" onChange={handleChange}/>
                    <input placeholder="Email" name="email" onChange={handleChange}/>
                    <input placeholder="House number and Road" name="road" onChange={handleChange}/>
                    <input placeholder="City" name="city" onChange={handleChange}/>
                    <input placeholder="Post Code" name="postCode" onChange={handleChange}/>
                    <input type="file" placeholder="image" name="image" accept=".jpg, .jpeg, .png" onChange={handleChange}/>
                </div>
            </form>
        </div>
    )
}



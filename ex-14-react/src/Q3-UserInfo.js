import React from "react";

function UserInfo({name, mail, bio}){
    return(
        <div>
        <p>Name: {name}</p>
        <p>Email: {mail}</p>
        <p>Bio: {bio}</p>
    </div>
    )
}

export default UserInfo;
import React from "react";

function ProfileImage({imageURL}){
    return(
        <div>
            <img src={imageURL} style={{width:"50%"}} />
        </div>
    )
}

export default ProfileImage;
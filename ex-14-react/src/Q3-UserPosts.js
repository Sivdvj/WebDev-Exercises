import React from "react";

function UserPosts({posts}){
    return(
        <div>
            <p>User Posts</p>
            <ul>
                {posts.map((posts, index)=>(
                    <li>{posts}</li>
                ))}
            </ul>
        </div>
    )
}

export default UserPosts;
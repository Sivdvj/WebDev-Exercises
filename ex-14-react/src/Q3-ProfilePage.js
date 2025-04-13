import React from "react"
import ProfileImage from "./Q3-ProfileImage";
import UserInfo from "./Q3-UserInfo";
import UserPosts from "./Q3-UserPosts";
function ProfilePage(){
    const user={
        url: "/Images/flower.jpg",
        n: "Sivaranjani",
        m: "sivaranjani.dvj@gmail.com",
        b: "Web Developer | Tea Lover",
        posts: [
            "Just finished a 3d rendering",
            "Just finished a react project",
            "Just won a coding challenge"
        ]
    };
    return(
        <div>
            <ProfileImage imageURL={user.url} />
            <UserInfo name={user.n} mail={user.m} bio={user.b} />
            <UserPosts posts={user.posts} />
        </div>
    );
}

export default ProfilePage;
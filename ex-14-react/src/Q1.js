import React from "react"
import fromSrc from "../src/Images/flower.jpg"
function Q1(){
    return(
        <>
            <h2>From Src</h2>
            <img src={fromSrc} alt="flower" width="50%"/>
            <h2>From Public</h2>
            <img src="/Images/flower.jpg" alt="flower" width="70%"/>
        </>
    );
}

export default Q1;
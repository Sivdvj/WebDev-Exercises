import React from "react";

function q1(){
    const isMorning=true;
    return(
        <>
            <h2>Time-Based Greeting</h2>
            <p>{isMorning?"Good Morning":"Good Evening"}</p>
        </>
    );
}

export default q1;
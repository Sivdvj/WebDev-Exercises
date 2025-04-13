import React from "react";

function q1(){
    const Str="React";
    const RevStr=Str.split("").reverse().join("");
    const isPalindrome=(Str.toLowerCase()===RevStr.toLowerCase());
    return(
        <>
            <h2>Palindrome Checker</h2>
            <p>Original String: {Str}</p>
            <p>Reversed String: {RevStr}</p>
            <p>The String is {isPalindrome?'a palindrome':'not a palindrome'}</p>
        </>
    );
}

export default q1;
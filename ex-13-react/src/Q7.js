import React from "react";

function q1(){
    const num=18;
    const isPrime=(x)=>{
        if(x<2) return false;
        for(let i=2; i<=Math.sqrt(x); i++){
            if(x%2===0) return false;
        }
        return true;
    };

    return(
        <div>
            <h2>Prime Number Checker</h2>
            <p>
                The number {num} is {isPrime(num)?'a prime number': 'not a prime number'}.
            </p>
        </div>
    );
}

export default q1;
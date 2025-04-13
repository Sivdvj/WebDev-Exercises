import React from "react";

function q1(){
    const n1=5;
    const n2=7;
    const sumOfSquares=(n1*n1)+(n2*n2);
    return(
        <div>
            <h2>Sum of Squares</h2>
            <p>
                The sum of squares of {n1} and {n2} is: {sumOfSquares}
            </p>
        </div>
    );
}
export default q1;
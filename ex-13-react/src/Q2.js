import React from "react";

function FruitList() {
    const fruits = ["Apple", "Banana", "Cherry", "Orange", "Coconut"];
    
    return (
        <ul>
            {fruits.map((fruit, index)=>( 
                <li key={index}>{fruit}</li>
            ))}
        </ul>
    );
}

export default FruitList;

import React, {useState, useReducer } from "react";


function Counter(){
    const [count,setCount]=useState(0);
    const add=()=>{
        setCount(count+1);
    };
    const subt=()=>{
        setCount(count-1)
    };

    
    const reducer=(state, action)=>{
        switch (action){
            case "increment":
                return state+1;
            case "decrement":
                return state-1;
            default:
                return state;
        }
    }
    const [c, dispatch]=useReducer(reducer, 0);
    return(
        <div>
            <h2>Counter with useState</h2><br/>
            <button onClick={add}>Increment</button><span>&nbsp;&nbsp;</span>
            <button onClick={subt}>Decrement</button><br/>
            <p>The count is {count}</p>
            <br/><br/>
            <h2>Counter with useReducer</h2><br/>
            <button onClick={()=>dispatch('increment')}>Increment</button><span>&nbsp;&nbsp;</span>
            <button onClick={()=>dispatch('decrement')}>Decrement</button><br/>
            <p>The count is {c}</p>
        </div>
    );
}

export default Counter;
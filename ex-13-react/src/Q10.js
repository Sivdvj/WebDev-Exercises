import React, {useState} from "react"

function Q10(){
    const [number, setNumber]=useState(null);
    const generate= ()=>{
        let num=Math.floor(Math.random()*100)+1;
        setNumber(num);
    }
    return(
        <div>
            <h2>Random Number Generator</h2>
            {number!=null&&<p>Random value: {number}</p>}
            <button onClick={generate}>Generate number</button>
        </div>
    );
}
export default Q10;
import React, {useRef} from "react";

function Q8(){
    const inputref=useRef(null);
    const foc=()=>{
        inputref.current.focus();
    }
    return(
        <div>
            <input type="text" ref={inputref} placeholder="Enter text" />
            <button onClick={foc}>Focus</button>
        </div>
    );
}

export default Q8;
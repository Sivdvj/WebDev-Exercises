import React, {useState, useRef} from "react";

function Q12ii(){
    const nameref=useRef(null);
    const mailref=useRef(null);

    const [formdata, setformdata]=useState(null);

    const handleSubmit=(e)=>{
        e.preventDefault();
        const n=nameref.current.value;
        const m=mailref.current.value;
        setformdata({name:n, mail:m});
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name:</label><input type="text" ref={nameref} /><br/>
                <label>Email:</label><input type="email" ref={mailref} /><br/>
                <button type="submit">Submit</button>
            </form>
            {formdata && (
                <div>
                    <p>Name: {formdata.name}</p>
                    <p>Email: {formdata.mail}</p>
                </div>
            )}
        </div>
    )
}

export default Q12ii;
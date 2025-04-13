import React, {useState} from "react";

function Q12i(){

    const [formdata, setFormdata]=useState({
        name:"", mail:""
    });

    const handleSubmit=(e)=>{
        e.preventDefault();
        alert(JSON.stringify(formdata, null, 2));
    }
    const setData=(e)=>{
        setFormdata({...formdata, [e.target.name]:e.target.value});
    }
    return(
        <form onSubmit={handleSubmit}>
            <label>Name:</label><input type="text" value={formdata.name} name="name" onChange={setData} /><br/><br/>
            <label>Email:</label><input type="email" value={formdata.mail} name="mail" onChange={setData} /><br/><br/>
            <button type="submit">submit</button>
            <p>Name: {formdata.name}</p>
            <p>Email: {formdata.mail}</p>
        </form>
    )
}

export default Q12i;
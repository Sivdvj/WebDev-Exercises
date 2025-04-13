import React, {useState} from "react";

function Q2(){
    const [formdata, setFormData]=useState({
        username:"",
        password:"",
        city:"",
        server:"",
        role:"",
        signon:[]
    });

    const setData=(e)=>{
        setFormData({...formdata, [e.target.name]: e.target.value});
    }

    const handleRadioChange=(e)=>{
        setFormData({...formdata, role: e.target.value});
    }

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            signon: checked
                ? [...prevState.signon, value]
                : prevState.signon.filter((item) => item !== value)
        }));
    };

    const handleSubmit=(e)=>{
        e.preventDefault();
        alert(JSON.stringify(formdata, null, 2));
    }

    const reset=()=>{
        setFormData({
            username:"",
            password:"",
            city:"",
            server:"",
            role:"",
            signon:[]
        });
    };
    return(
        <form style={{margin:"20px"}} onSubmit={handleSubmit}>
            <h2 style={{margin:"20px"}}>Novell Service Login</h2>
            <label>Username:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input type="text" name="username" onChange={setData} value={formdata.username} /><br/><br/>
            <label>Password:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input type="password" name="password" onChange={setData} value={formdata.password} /><br/><br/>
            <label>City of<br/>Employment:&nbsp;&nbsp;</label>
            <input type="text" name="city" onChange={setData} value={formdata.city} /><br/><br/>
            <label>Web Server:&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <select name="server" value={formdata.server} onChange={setData} >
                <option value="" >--Choose a server--</option>
                <option value="server1" >Server 1</option>
                <option value="server2" >Server 2</option>
            </select><br/><br/>
            <label>Please specify your role:</label><br/>
            <input type="radio" name="role" value="Admin" checked={formdata.role==="Admin"} onChange={handleRadioChange} /><label>Admin</label>
            <input type="radio" name="role" value="Engineer" checked={formdata.role==="Engineer"} onChange={handleRadioChange} /><label>Engineer</label>
            <input type="radio" name="role" value="Manager" checked={formdata.role==="Manager"} onChange={handleRadioChange} /><label>Manager</label>
            <input type="radio" name="role" value="Guest" checked={formdata.role==="Guest"} onChange={handleRadioChange} /><label>Guest</label>
            <br/><br/>
            <label>Single Sign-on to the following:</label><br/>
            <input type="checkbox" value="Mail" checked={formdata.signon.includes('Mail')} onChange={handleCheckboxChange} /><label>Mail</label>
            <input type="checkbox" value="Payroll" checked={formdata.signon.includes('Payroll')} onChange={handleCheckboxChange} /><label>Payroll</label>
            <input type="checkbox" value="Self-service" checked={formdata.signon.includes('Self-service')} onChange={handleCheckboxChange} /><label>Self-service</label>
            <br/><br/>
            <button type="submit">Login</button><span>&nbsp;&nbsp;</span>
            <button type="button" onClick={reset}>Reset</button>
        </form>
    )
}
export default Q2;
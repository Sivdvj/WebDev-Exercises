import React from "react";

class UserGreeting extends React.Component{
    
    render(){
        const FirstName=this.props.fn;
        const LastName=this.props.ln;
        return(
            <p>Hello, {FirstName} {LastName}</p>
        )
    }
}

export default UserGreeting;
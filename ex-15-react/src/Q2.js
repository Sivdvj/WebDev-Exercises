import React from "react";

function StyledButton(){
    const stylebutton={
        backgroundColor: "red",
        padding: "10px",
        color: "white",
        fontSize: "10px",
        margin: "30px"
    }

    return(
        <>
            <button style={stylebutton}>Click me</button>
        </>
    );
}

export default StyledButton;
import React from "react";

function StyledButton(){
    return(
        <>
            <style>
                {`
                    .b{
                        background-color: yellow;
                        padding:50px;
                        fonst-size: 10px;
                        margin:20px;
                    }

                    .b:hover{
                        background-color: black
                        color:  white;
                    }
                `}
            </style>
            <button className='b'>Button</button>
        </>
    )
}
export default StyledButton;
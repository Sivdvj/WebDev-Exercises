import React from "react";

// //without jsx
// function q1(){
//     const element=React.createElement('h1', null, 'Hello, React!');
//     return element;
// }
// export default q1;


// //with jsx
// function q2(){
//     return <h1>Hello, React!</h1>;
// }
// export default q2;

//stored in a variable
function q3(){
    const msg=<h1>Hello, React!</h1>;
    return msg;
}
export default q3;
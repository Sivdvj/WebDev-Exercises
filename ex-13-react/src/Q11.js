import React,{useState} from "react"

// function Q11(){
//     const year=2024;
//     const check= (a)=>{
//         return (a%4===0 && a%100!==0)||(year%400===0)
//     };
//     const result=check(year);
//     return(
//         <div>
//             <h2>Leap Year Checker</h2>
//             <p>The year {year} is {result?'a':'not a'} leap year</p>
//         </div>
//     )
// }

//input from user
function Q11(){
    const [year, setYear]=useState(null);
    const check= (a)=>{
        return (a%4===0 && a%100!==0)||(year%400===0)
    };
    
    return(
        <div>
            <h2>Leap Year Checker</h2>
            <input value={year} placeholder="Enter a year" onChange={(e)=>setYear(e.target.value)}/>
            {year&&<p>The year {year} is {check(year)?'a':'not a'} leap year</p>}
        </div>
    )
}

export default Q11;
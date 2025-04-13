import React, {useState} from "react";

function Content(){
    const jokes=[
        "Why don’t scientists trust atoms? Because they make up everything!",
        "Why did the scarecrow win an award? Because he was outstanding in his field!",
        "Why don’t skeletons fight each other? They don’t have the guts."
    ];
    const [joke, setJokes]=useState('Click the button for a joke!');
    const getRandom=()=>{
        const random=Math.floor(Math.random()*jokes.length);
        setJokes(jokes[random]);
    };
    return(
        <main>
            <p>{joke}</p>
            <button onClick={getRandom}>Get a Joke</button>
        </main>
    );
}

export default Content;
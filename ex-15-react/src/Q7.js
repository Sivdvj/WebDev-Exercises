import React, { useState, useEffect } from "react";

const RandomJoke = () => {
  const [joke, setJoke] = useState("Loading joke...");

  const fetchJoke = async () => {
    try {
      const response = await fetch("https://official-joke-api.appspot.com/jokes/random");
      const data = await response.json();
      setJoke(`${data.setup} - ${data.punchline}`);
    } catch (error) {
      setJoke("Failed to fetch a joke. Try again!");
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Random Joke Generator</h2>
      <p>{joke}</p>
      <button onClick={fetchJoke}>Get New Joke</button>
    </div>
  );
};

export default RandomJoke;

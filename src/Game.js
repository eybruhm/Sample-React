import React, { useState, useEffect } from 'react';
import words from './words.json'; // Import the JSON file

function Game({ goBackToStart }) { // Receive goBackToStart function as a prop
  const [word, setWord] = useState(''); // Current word to type
  const [input, setInput] = useState(''); // User's input
  const [score, setScore] = useState(0); // Player's score
  
  // Function to generate a new random word
  const generateWord = () => {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    setWord(randomWord);
  };

  // Function to handle the score update
const updateScore = (wordLength) => {
    let newScore = score;
  
    if (wordLength >= 10) {
      newScore += 0.01; // Add 0.01 for 10+ letters
    } else if (wordLength <= 9 && wordLength >= 5) {
      newScore += 0.001; // Add 0.001 for 5-9 letters
    } else if (wordLength <= 4) {
      newScore += 0.0001; // Add 0.0001 for 4 or fewer letters
    }
  
    // Update score with proper rounding
    setScore(Math.round(newScore * 1000) / 1000);
  };
  
  // Handle user input and word matching
  const handleChange = (e) => {
    const userInput = e.target.value.trim().toLowerCase();
    setInput(userInput);
  
    if (userInput === word.toLowerCase()) {
      updateScore(word.length); // Update score first
      setInput(''); // Clear the input field
      generateWord(); // Generate the new word afterward
    }
  };
  
  

  // Generate the first word on component mount
  useEffect(() => {
    generateWord();
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>TypR</h1>
      <h2>Type this word:</h2>
      <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{word}</p>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        style={{ padding: '10px', fontSize: '18px' }}
      />
      <h2 style={{ marginTop: '20px' }}>$txt: {score}</h2> {/* Display the score */}
      <button onClick={goBackToStart}>Back</button> {/* Back button to go to start screen */}
    </div>
  );
}

export default Game;

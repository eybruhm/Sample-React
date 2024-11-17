import React, { useState } from 'react';
import './App.css';
import { TonConnectUIProvider } from '@tonconnect/ui-react'; // Import TonConnect UI Provider
import Start from './Start'; // Import your Start component
import Game from './Game';

// Your manifest URL
const manifestUrl = 'http://localhost:3000//tonconnect-manifest.json';

function App() {
  const [showGame, setShowGame] = useState(false); // State to control which component to show

  // Function to switch to the game screen
  const startGame = () => {
    setShowGame(true);
  };

  // Function to switch back to the start screen
  const goBackToStart = () => {
    setShowGame(false);
  };

  return (
    // Wrap the entire app with TonConnectUIProvider and pass the manifestUrl
    <TonConnectUIProvider manifestUrl={manifestUrl}>
      <div className="App">
        {showGame ? (
          <Game goBackToStart={goBackToStart} /> // Pass goBackToStart to Game component
        ) : (
          <Start startGame={startGame} /> // Pass startGame to Start component
        )}
      </div>
    </TonConnectUIProvider>
  );
}

export default App;

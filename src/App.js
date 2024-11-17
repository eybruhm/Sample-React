import React, { useState } from 'react';
import './App.css';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import Start from './Start';
import Game from './Game';
import Blank from './Blank';

const manifestUrl = 'http://sample-react-rose.vercel.app/tonconnect-manifest.json';

function App() {
  const [screen, setScreen] = useState('start'); // Track which screen to display

  const startGame = () => setScreen('game'); // Navigate to Game
  const goBackToStart = () => setScreen('start'); // Navigate back to Start
  const navigateToShop = () => setScreen('blank'); // Navigate to Blank for Shop
  const navigateToTasks = () => setScreen('blank'); // Navigate to Blank for Tasks

  return (
    <TonConnectUIProvider manifestUrl={manifestUrl}>
      <div className="App">
        {screen === 'start' && (
          <Start 
            startGame={startGame} 
            navigateToShop={navigateToShop} 
            navigateToTasks={navigateToTasks} 
          />
        )}
        {screen === 'game' && <Game goBackToStart={goBackToStart} />}
        {screen === 'blank' && <Blank goBackToStart={goBackToStart} />}
      </div>
    </TonConnectUIProvider>
  );
}

export default App;


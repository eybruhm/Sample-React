import logo from './logo.svg';
import React from 'react';
import './App.css';
import { TonConnectUIProvider } from '@tonconnect/ui-react'; // Import TonConnect UI Provider
import Start from './Start'; // Import your Start component

// Your manifest URL
const manifestUrl = 'https://your-app-url/tonconnect-manifest.json';

function App() {
  return (
    // Wrap the entire app with TonConnectUIProvider and pass the manifestUrl
    <TonConnectUIProvider manifestUrl={manifestUrl}>
      <div className="App">
        <Start /> {/* Your Start component */}
      </div>
    </TonConnectUIProvider>
  );
}

export default App;


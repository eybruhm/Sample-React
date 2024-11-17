import React, { useEffect, useState } from 'react';
import { TonConnectButton, useTonConnectUI } from '@tonconnect/ui-react'; // Correct imports
import startIcon from './img-start-icon.gif';
import typRLogo from './typr-logo.png';
import './Start.css';

function Start({ startGame }) { // Receive startGame function as a prop
  const [walletConnected, setWalletConnected] = useState(false);

  const { state, open, close } = useTonConnectUI(); // Get TonConnect UI hook

  useEffect(() => {
    if (state?.status === 'connected') {
      setWalletConnected(true); // Set state when wallet is connected
    } else {
      setWalletConnected(false); // Reset state if not connected
    }
  }, [state]);

  const connectToWallet = () => {
    open(); // Open wallet connection modal
  };

  return (
    <div className="Start-Box">
      <button className="Start-Button-Account">Profile</button>
      <img src={typRLogo} className="Start-Animation-Icon" alt="Icon" />
      <button className="Start-Button-Start" onClick={startGame}>Start</button> {/* Start the game */}
      <div className="Start-Navigation-Container">
        <button className="Start-Button-Shop">Shop</button>
        <button className="Start-Button-Tasks">Tasks</button>
        <TonConnectButton className="ton-connect-button" /> {/* Use TON Connect Button */}
      </div>
    </div>
  );
}

export default Start;

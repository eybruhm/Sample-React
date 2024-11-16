import React, { useEffect, useState } from 'react';
import { TonConnectButton, useTonConnectUI } from '@tonconnect/ui-react'; // Correct imports
import startIcon from './img-start-icon.gif';

function Start() {
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
      <img src={startIcon} className="Start-Animation-Icon" alt="Icon" />
      <button className="Start-Button-Start" onClick={connectToWallet}>
        {walletConnected ? 'Wallet Connected' : 'Connect to TON Wallet'}
      </button>

      <div className="Start-Navigation-Container">
        nav container
        <button className="Start-Button-Shop">Shop</button>
        <button className="Start-Button-Tasks">Tasks</button>
        <button className="Start-Button-Wallet">TON</button>
      </div>

      <TonConnectButton className="ton-connect-button" /> {/* Use TON Connect Button */}
    </div>
  );
}

export default Start;

import React, { useEffect, useState } from 'react';
import { TonConnectButton, useTonConnectUI } from '@tonconnect/ui-react';
import startIcon from './img-start-icon.gif';
import typRLogo from './typr-logo.png';
import pfp from './Byte-size.jpg';
import './Start.css';

function Start({ startGame, navigateToShop, navigateToTasks }) {
  const [walletConnected, setWalletConnected] = useState(false);

  const { state, open } = useTonConnectUI();

  useEffect(() => {
    setWalletConnected(state?.status === 'connected');
  }, [state]);

  return (
    <div className="Start-Box">
      <img src={pfp} className="Start-Button-Account" alt="Profile" />
      <img src={typRLogo} className="Start-Animation-Icon" alt="Icon" />
      <button className="Start-Button-Start" onClick={startGame}>
        Start
      </button>
      <div className="Start-Navigation-Container">
        <button className="Start-Button-Shop" onClick={navigateToShop}>
          Shop
        </button>
        <button className="Start-Button-Tasks" onClick={navigateToTasks}>
          Tasks
        </button>
        <TonConnectButton className="ton-connect-button" />
      </div>
    </div>
  );
}

export default Start;

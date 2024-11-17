import React from 'react';
import './Blank.css'; // Import the CSS file for styling

function Blank({ goBackToStart }) {
  return (
    <div className="blank-container">
      <h1 className="blank-title">Oops!</h1>
      <p className="blank-message">
        This page isn't available yet—our team is still working hard to bring it to you!
      </p>
      <button className="blank-button" onClick={goBackToStart}>
        Go Back
      </button>
    </div>
  );
}

export default Blank;

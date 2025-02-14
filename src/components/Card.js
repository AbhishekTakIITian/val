import React, { useState } from 'react';
import '../styles/Card.css';

function Card() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="valentine-bg">
      <div className={`valentine-card ${isOpen ? 'open' : ''}`} 
           onClick={() => setIsOpen(!isOpen)}>
        <div className="card-front">
          <div className="heart"></div>
          <h2 className="front-text">Happy Valentine's Day!</h2>
          <p className="flip-instruction">Click to open ❤️</p>
        </div>
        <div className="card-inside">
          <div className="card-content">
            <h1 className="card-title">Happy Valentine's Day!</h1>
            <h3 className="card-subtitle">Dear Manu (Kitty ji),</h3>
            <p className="card-text">
                Every moment with you feels like a beautiful dream come true.
                You make my heart skip a beat and bring joy to my life in ways
                I never thought possible.
            </p>
            <p className="card-text">
              Your smile brightens my darkest days, and your love makes my heart soar.
              You're not just my valentine, you're my everything.
            </p>
            <p className="card-text fw-bold">
              Will you be my Valentine? 💝
            </p>
            <div className="signature">
                With all my love,<br />
                Always Yours <br/>
                Rasmalai / Teddy 🧸 <br/>
                Abhi(Boka)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
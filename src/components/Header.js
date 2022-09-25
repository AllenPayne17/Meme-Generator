import React from "react";
import Logo from './images/trollFace.png';

export default function Header() {
    return (
      <header className="header">
        <img className="logo" src={Logo} alt="logo" />
        <h2 className="logo--title">Meme Generator</h2>
      </header>
    );
  }
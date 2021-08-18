import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div>
        <ul>
          <li>
            <Link to="/game">Start</Link>
          </li>
          <li>
            <Link to="/how-to-play">How to Play</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

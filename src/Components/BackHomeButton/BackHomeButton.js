import React from "react";
import { Link } from "react-router-dom";

export default function BackHomeButton() {
  return (
    <button>
      <Link to="/">BACK</Link>
    </button>
  );
}

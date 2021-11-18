import React from "react";

export default function Card() {
  return (
    <div className="card">
      <img class="topCardImage" src={"assets/interview.png"} />
      <p>Question 1</p>
      <h1>What is the symbol for the EOS Blockchain?</h1>
      <div className="button-wrapper">
        <button>Chestahedron</button>
        <button>Tetrahedron</button>
        <button>Dodecahedron</button>
        <button>Polyhedron</button>
      </div>
    </div>
  );
}

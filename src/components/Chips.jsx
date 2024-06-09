import React, { useState } from "react";
import { Link } from "react-router-dom";

const Chips = () => {
  const [chipsIMG, setChipsIMG] = useState([
    "https://images.unsplash.com/photo-1585220202939-c10ec7c6dc4e?q=80&w=1639&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ]);

  const addChips = () => {
    setChipsIMG([
      ...chipsIMG,
      "https://images.unsplash.com/photo-1585220202939-c10ec7c6dc4e?q=80&w=1639&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ]);
  };
  return (
    <div>
      <ol>
        <li>
          {chipsIMG.map((img) => {
            return <img src={img} alt="" srcset="" className="chip-img" />;
          })}
        </li>
      </ol>
      <button onClick={addChips}>More Chips</button>
      <Link to="/">Home</Link>
    </div>
  );
};

export default Chips;

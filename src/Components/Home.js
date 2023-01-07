import React from "react";
import { useState } from "react";

const Home = () => {
  const [color, setColor] = useState("14");
  return (
    <div>
      <input type="text" placeholder="Input year of birth" />
      <h1>This is {color}</h1>
      <button
        onClick={() => {
          const today = new Date().getHours();
          console.log(today);
          setColor(today);
        }}
      >
        Click
      </button>
    </div>
  );
};

export default Home;

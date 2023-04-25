import React from "react";

export const Home = () => {
  return (
    <div>
      Home
      <input
        type="text"
        name="name"
        onChange={(event) => {
          console.log(event.target.value);
          localStorage.setItem("input", event.target.value);
        }}
      ></input>
    </div>
  );
};

export default Home;

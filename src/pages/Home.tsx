import React, { useEffect } from "react";
import axios from "axios";

export const Home = () => {
  const fetchData = async () => {
    const response = await axios.get("https://restcountries.com/v3.1/all");
    setCountry(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    void fetchData();
  }, []);

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
function setCountry(data: unknown) {
  console.log(data);
}

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let data: any[];

export const Home = () => {
  const [countries, setCountries] = useState([]);
  const getCountries = async () => {
    const response = await axios.get("https://restcountries.com/v3.1/all");
    data = response.data;
    setCountries(data);
  };

  useEffect(() => {
    void getCountries();
  }, []);

  // eslint-disable-next-line react/jsx-key
  const listItems = countries?.map((number) => (
    <div className="card" key={number.cca2}>
      <img className="img-flag" key={number.cca2} src={number.flags.png} />
      <div className="name-flag" key={number.cca3}>
        {number.name.common}
      </div>
    </div>
  ));

  return (
    <>
      <div>
        <input
          type="text"
          name="name"
          onChange={(event) => {
            console.log(event.target.value);
            localStorage.setItem("input", event.target.value);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            data = countries?.filter((e) => e.region === "Europe");
            console.log(data);
          }}
        ></input>
        <div className="container-flags" key="{listItems}">
          {listItems}
        </div>
      </div>
    </>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";

// get api
export const Home = () => {
  const [countries, setCountries] = useState([]);
  const getCountries = async () => {
    const response = await axios.get("https://restcountries.com/v3.1/all");
    setCountries(response.data);
  };

  useEffect(() => {
    void getCountries();
  }, []);

  // filter array
  const [value, setValue] = useState("");
  const filteredCountries = countries.filter((country) => {
    return country.name.common.toLowerCase().includes(value.toLowerCase());
  });

  // eslint-disable-next-line react/jsx-key
  const listItems = filteredCountries?.map((number) => (
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
            setValue(event.target.value);
            localStorage.setItem("input", event.target.value);
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

import React, { useEffect, useState } from "react";
import './Programmers.css'
const Programmers = () => {
  const [programmers, setProgrammers] = useState([]);
  useEffect(() => {
    fetch("./programmersFakeData.json")
      .then((response) => console.log(response.json()))
      .then((data) => console.log(data));
  }, []);

  return (
    <div>
      <h1>hi</h1>
    </div>
  );
};

export default Programmers;

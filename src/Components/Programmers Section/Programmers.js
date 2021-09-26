import React, { useEffect, useState } from "react";
import Cart from "../AddToCart/Cart";
import Programmer from "../Programmer/Programmer";
import "./Programmers.css";

const Programmers = () => {
  const [programmers, setProgrammers] = useState([]);
  useEffect(() => {
    fetch("./programmersFakeData.json")
      .then((response) => response.json())
      .then((data) => setProgrammers(data));
  }, []);

  const [cart, setCart] = useState([]);
  const eventHandlerAddToCart = (programmerData) => {
    // console.log(programmerData.name);

    const matchKey = cart.find((data) => data.key === programmerData.key);
    // console.log(matchKey);
    if (matchKey === undefined) {
      const newCart = [...cart, programmerData];
      setCart(newCart);
    } else {
      alert(
        "You Are Already Added " +
          '"' +
          programmerData.name +
          '"' +
          " To The Cart"
      );
    }
  };

  return (
    <div className="divided">
      <div>
        <h2 className="mb-5">Total Programmers : {programmers.length}</h2>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          {programmers.map((programmerdata) => (
            <Programmer
              data={programmerdata}
              key={programmerdata.key}
              addToCart={eventHandlerAddToCart}
            ></Programmer>
          ))}
        </div>
      </div>

      <div className="mt-5 ms-3">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Programmers;

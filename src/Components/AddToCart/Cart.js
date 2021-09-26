import React from "react";
import Selected from "../Selected Engineer/Selected";
import "./Cart.css";

const Cart = (Props) => {
  //   console.log(Props.cart);
  const { cart } = Props;
  //   console.log(cart);
  let total = 0;
  for (const cost of cart) {
    total = total + cost.salary;
  }
  return (
    <div>
      <div className="mt-5 card h-100 bg-selected-card">
        <div className='p-4 bg-selecte-card-header'>
          <h2 className="mt-4 programmers-added">
            <i class="fas fa-user"></i><span className="fw-bold">Programmers Added : </span>{Props.cart.length}
          </h2>
          <h2 className="mb-5 programmers-added">
          <span className="fw-bold">Total Cost </span>(<i class="fas fa-dollar-sign"></i>) : {total}
          </h2>
        </div>
        <div>
          {cart.map((selectData) => (
            <Selected data={selectData} key={selectData.key}></Selected>
          ))}
          <button className="btn btn-primary w-100">Selected Cofirm</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

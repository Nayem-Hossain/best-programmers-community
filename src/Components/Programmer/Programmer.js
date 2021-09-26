import React from "react";
import "./Programmer.css";

const Programmer = (Props) => {
//   console.log(Props.data.name);
//   console.log(Props);
  const { name, company, role, age, nationality, salary, image } =
    Props.data;
  return (
      <div className="col">
        <div className="card h-100">
          <img src={image} className="card-img-top rounded-circle imageCut mx-auto d-block img-fluid" alt="profile pic" />
          <div className="card-body">
            <h5 className="card-title"><span className="fw-bold">Name : </span>{name}</h5>
            <p className="card-text"><span className="fw-bold">Company : </span>{company}</p>
            <p className="card-text"><span className="fw-bold">Role : </span>{role}</p>
            <p className="card-text"><span className="fw-bold">Salary : $</span>{salary}</p>
            <p className="card-text"><span className="fw-bold">Age : </span>{age}</p>
            <p className="card-text"><span className="fw-bold">Nationality : </span>{nationality}</p>
          </div>
          <button onClick={()=>{Props.addToCart(Props.data)}} className='btn btn-outline-info p-2 cursor-pointer'><i class="fas fa-cart-plus me-2"></i>Add to Cart for Hire</button>
        </div>
      </div>
  );
};

export default Programmer;

import React from "react";
import './Selected.css';

const Selected = (Props) => {
  const { data } = Props;
  return (
    <div>
      <div className="card mb-3 bg-selected-programmer-card">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={data.image}
              className="img-fluid rounded-start imgcut"
              alt={data.name}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{Props.data.name}</h5>
              <p className="card-text">From : {Props.data.company}</p>
              <button className="btn btn-outline-dark mb-0">delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
};

export default Selected;

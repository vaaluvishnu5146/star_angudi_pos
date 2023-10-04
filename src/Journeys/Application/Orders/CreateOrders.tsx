import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CreateCart from "../../../Components/Modals/CreateCart";

export default function CreateOrders() {
  const [orderModel, setOrderModal] = useState(false);
  const navigate = useNavigate();
  const journeys = [
    {
      title: "Create New Cart",
      callback: () => setOrderModal(true),
    },
    {
      title: "Manage Cart",
      callback: () => {
        navigate("/orders/manageorders");
      },
    },
  ];

  function createCart() {
    console.log("Cart");
    setOrderModal(false);
  }

  return (
    <div className="page container d-flex align-items-center justify-content-center">
      <div className="container">
        <h2 className="fw-bold mb-3">Select Your Journey</h2>
        <ul className="row p-0">
          {journeys.map((d, i) => (
            <div key={`${d.title}-${i}-journey`} className="col-2">
              <div className="card option-card" onClick={d.callback}>
                <div className="card-body d-flex align-items-center justify-content-center">
                  <h4>{d.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </ul>
        <CreateCart
          title="Create Cart"
          isOpen={orderModel}
          toggle={() => setOrderModal(false)}
          onSubmit={createCart}
        />
      </div>
    </div>
  );
}

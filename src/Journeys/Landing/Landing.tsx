import React from "react";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  function handleLogin() {
    navigate("/orders");
  }

  return (
    <div
      className="row h-full"
      style={{
        margin: "0px",
      }}
    >
      <div className="col-6 g-0">
        <div className="container">Sliders</div>
      </div>
      <div className="col-6 g-0">
        <div className="container d-flex align-items-center justify-content-center h-100">
          <div className="card">
            <button className="btn btn-success" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

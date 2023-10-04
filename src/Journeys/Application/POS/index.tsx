import React from "react";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import POSLayout from "./POS";

export default function index() {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <Sidebar />
      <POSLayout />
    </div>
  );
}

import React from "react";
import { Outlet } from "react-router-dom";
import AppLayout from "../AppLayout";

export default function index() {
  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
}

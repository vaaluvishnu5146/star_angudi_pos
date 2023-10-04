import AppLayout from "../AppLayout";
import { Outlet } from "react-router-dom";

export default function Catalogue() {
  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
}

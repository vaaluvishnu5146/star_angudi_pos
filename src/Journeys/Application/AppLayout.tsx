import React, { ReactNode } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import POSLayout from "./POS";

type Props = {
  children: ReactNode;
};

export default function AppLayout({ children }: Props) {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <Sidebar />
      <main className="w-full p-x-20 p-y-20 h-full overflow-y-scroll">
        {children}
      </main>
    </div>
  );
}

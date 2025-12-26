import React from "react";
import { Outlet } from "react-router-dom";
import AdminsideBar from "./sideBar";
import Adminheader from "./header";

const adminViewLayout = () => {
  return (
    <div className="flex min-h-screen w-full">
      {/* {Admin SIdebar} */}
      <AdminsideBar/>
      <div className="flex flex-1 flex-col">
        <Adminheader/>
        <main className="flex flex-1 bg-muted/40 p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default adminViewLayout;

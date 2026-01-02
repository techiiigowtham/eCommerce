import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminsideBar from "./sideBar";
import Adminheader from "./header";

const adminViewLayout = () => {
  const [openSidebar, setOpenSidebar] = useState(false)
  return (
    <div className="flex min-h-screen w-full">
      {/* {Admin SIdebar} */}
      <AdminsideBar open={openSidebar} setOpen={setOpenSidebar}/>
      <div className="flex flex-1 flex-col">
        <Adminheader setOpen={setOpenSidebar}/>
        <main className="flex bg-muted/40 p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default adminViewLayout;

import Navbar from "@/components/navigation/navbar";
import React from "react";
import SideBar from "@/components/navigation/sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <SideBar>
        <Navbar />
        <main>{children}</main>
      </SideBar>
    </>
  );
};

export default Layout;

import Navbar from "@/components/navigation/navbar";
import React from "react";
import SideBar from "@/components/navigation/sidebar";
import { useTheme } from "@mui/material";

const Layout = ({ children }) => {
  const theme = useTheme();
  return (
    <div
      style={{
        backgroundColor: theme.palette.background.default,
        height: "100vh",
      }}
    >
      <Navbar />

      <main>{children}</main>
    </div>
  );
};

export default Layout;

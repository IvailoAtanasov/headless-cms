import React from "react";
import { Box } from "@mui/system";

const AuthLayout = ({ children }) => {
  return (
    <>
      <Box
        sx={{
          height: "100vh",
          width: "100%",
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)) , url(/login-background.jpg)",
          //   backgroundImage: `url("/login-background.jpg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: "0.9",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: "-1",
          overflow: "hidden",
        }}
      >
        {children}
      </Box>
    </>
  );
};

export default AuthLayout;

import { Box, Typography, Avatar, Alert, Slide } from "@mui/material";

import React from "react";

export const AuthForm = ({ title, handleSubmit, onSubmit, children }) => {
  return (
    <Slide
      direction="left"
      mountOnEnter
      unmountOnExit
      in={true}
      timeout={{ enter: 600, exit: 100 }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          height: "100%",
          width: "80rem",

          flex: "1 1 0%",
          "@media only screen and (min-width: 600px)": {
            marginBottom: "4rem",
          },
        }}
      >
        <Avatar
          alt="brimeks logo"
          src="/brimeks-logo.png"
          sx={{
            width: "11rem",
            height: "8rem",
            backgroundColor: "#ffffff",
            top: "5rem",
            position: "relative",
          }}
        />
        <Box
          sx={{
            maxWidth: "24rem",
            padding: "2.5rem",
            margin: "1rem",
            backgroundColor: "rgba(255,255,255, 0.25)",
            borderRadius: "0.25rem",
            "@media only screen and (min-width: 600px)": {
              maxWidth: "25rem",
            },
            boxShadow:
              "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "#ffffff",
              display: "flex",
              justifyContent: "center",
              marginTop: "3rem",
            }}
          >
            {title}
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            sx={{ mt: 1 }}
          >
            {/* {authError && (
              <Alert severity="error">
                {authError.name === "NotAuthorizedException"
                  ? "Невалидно потребителско име или парола"
                  : authError.name === "CodeMismatchException"
                  ? "Грешен код за потвърждение"
                  : authError.name === "InvalidPasswordException"
                  ? "Използвайте парола с повече от 8 символа, малки и големи букви и специални символи"
                  : "Нещо се обърка... Опитай пак :)"}
              </Alert>
            )} */}
            {children}
          </Box>
        </Box>
      </Box>
    </Slide>
  );
};

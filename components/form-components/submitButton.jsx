import React from "react";
import { Button } from "@mui/material";

export const SubmitButton = ({ title }) => {
  return (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      sx={{ mt: 3, mb: 2, backgroundColor: "black" }}
    >
      {title}
    </Button>
  );
};

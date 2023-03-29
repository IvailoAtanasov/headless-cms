import React from "react";
import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";
import { ColorModeContext, useMode } from "@/utils/theme";

export const Input = ({ name, label, errors, control, ...rest }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          margin="normal"
          fullWidth
          label={label}
          error={!!errors[name]}
          helperText={errors[name] && errors[name]?.message}
          {...rest}
        />
      )}
    />
  );
};

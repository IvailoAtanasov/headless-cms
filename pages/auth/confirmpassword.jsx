import React, { useState, useEffect } from "react";

import AuthLayout from "@/layouts/AuthLayout";

// import { ConfirmPasswordValidationSchema } from "../utils/validation/validationSchema";

import { useForm } from "react-hook-form";

// import { yupResolver } from "@hookform/resolvers/yup";

import { AuthForm } from "@/components/form-components/auth";
import { Input } from "@/components/form-components/input";
import { SubmitButton } from "@/components/form-components/submitButton";

// import { confirmPasswordWithAws } from "../utils/aws/amplify-utils";

import { Alert } from "@mui/material";

const ConfirmPassword = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm();

  const [onSubmitErrors, setOnsubmitErrors] = useState("");
  const [success, setSuccess] = useState();

  //   useEffect(() => {
  //     if (isSubmitSuccessful) {
  //       reset();
  //     } // eslint-disable-next-line
  //   }, [isSubmitSuccessful]);

  const onSubmit = async (data) => {
    // const { username, code, password } = data;
    // await confirmPasswordWithAws(username, code, password)
    //   .then((data) => {
    //     console.log(data);
    //     setSuccess(data);
    //     setTimeout(() => {
    //       navigate("/");
    //     }, 1500);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     setOnsubmitErrors(err);
    //     setTimeout(() => {
    //       setOnsubmitErrors("");
    //     }, 5000);
    //   });
    console.log("submit");
  };

  return (
    <AuthForm
      title="Въведете нова парола"
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      onSubmitErrors={onSubmitErrors}
    >
      {success && (
        <Alert severity="success">Успешнo възтановяване на парола.</Alert>
      )}
      <Input
        control={control}
        name={"username"}
        label={"Потребителско име"}
        errors={errors}
        sx={{
          backgroundColor: "#ffffff",
          borderRadius: "0.25rem",
          fontWeight: "bold",
        }}
        variant="filled"
        inputProps={{
          autoComplete: "off",
        }}
      />
      <Input
        control={control}
        name={"password"}
        label={"Нова парола"}
        errors={errors}
        sx={{
          backgroundColor: "#ffffff",
          borderRadius: "0.25rem",
        }}
        variant="filled"
        type="password"
        inputProps={{
          autoComplete: "new-password",
        }}
      />
      <Input
        control={control}
        name={"newpassword"}
        label={"Потвърдете парола"}
        errors={errors}
        sx={{
          backgroundColor: "#ffffff",
          borderRadius: "0.25rem",
        }}
        variant="filled"
        type="password"
        inputProps={{
          autoComplete: "new-password",
        }}
      />

      <Input
        control={control}
        name={"code"}
        label={"Код за потвърждение"}
        errors={errors}
        sx={{
          backgroundColor: "#ffffff",
          borderRadius: "0.25rem",
        }}
        variant="filled"
        type="code"
        inputProps={{
          autoComplete: "off",
        }}
      />

      <SubmitButton title="Потвърди" />
    </AuthForm>
  );
};

export default ConfirmPassword;

ConfirmPassword.getLayout = function getLayout(confirm) {
  return <AuthLayout>{confirm}</AuthLayout>;
};

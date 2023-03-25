import React, { useState, useEffect } from "react";
import AuthLayout from "@/layouts/AuthLayout";

// import { ResetPasswordValidationSchema } from "../utils/validation/validationSchema";

import { useForm } from "react-hook-form";

// import { yupResolver } from "@hookform/resolvers/yup";

import { AuthForm } from "@/components/form-components/auth";

import { Input } from "@/components/form-components/input";

import { SubmitButton } from "@/components/form-components/submitButton";

// import { resetPasswordWithAws } from "../utils/aws/amplify-utils";

import { Alert } from "@mui/material";

const ResetPassword = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm();

  const [onSubmitErrors, setOnsubmitErrors] = useState("");
  const [success, setSuccess] = useState(false);

  //   useEffect(() => {
  //     if (isSubmitSuccessful) {
  //       reset();
  //     } // eslint-disable-next-line
  //   }, [isSubmitSuccessful]);

  const onSubmit = async (data) => {
    // const { username } = data;

    // await resetPasswordWithAws(username)
    //   .then((res) => {
    //     setSuccess(true);
    //     setTimeout(() => {
    //       navigate("/auth/confirmpassword");
    //     }, 3000);
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
      title="Възтанови парола"
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      onSubmitErrors={onSubmitErrors}
    >
      {success && (
        <Alert severity="success">
          Успешна заявка за възтановяване на парола е изпратена на имейл адресът
          ви.
        </Alert>
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

      <SubmitButton title="Потвърди" />
    </AuthForm>
  );
};

export default ResetPassword;

ResetPassword.getLayout = function getLayout(reset) {
  return <AuthLayout>{reset}</AuthLayout>;
};

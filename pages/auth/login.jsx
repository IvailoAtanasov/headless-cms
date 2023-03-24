import React from "react";
import AuthLayout from "../../layouts/AuthLayout";
import Layout from "@/layouts/Layout";
import { AuthForm } from "@/components/form-components/auth";
import { Input } from "@/components/form-components/input";
import { SubmitButton } from "@/components/form-components/submitButton";
import { Grid, FormControlLabel, Checkbox } from "@mui/material";
import { useForm } from "react-hook-form";
import Link from "next/link";

const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm();

  const onSubmit = () => {
    // const { username, password } = data;

    // await signInWithAws(username, password)
    //   .then((res) => {

    //     if (res.challengeName === "NEW_PASSWORD_REQUIRED") {
    //       navigate("/auth/newpassword");
    //     } else {
    //       navigate("/");
    //     }
    //   })
    //   .catch((err) => {
    //     setOnsubmitErrors(err);
    //     setTimeout(() => {
    //       setOnsubmitErrors("");
    //     }, 5000);
    //   });
    console.log("submit");
  };
  const onSubmitErrors = () => {
    console.log("submit error");
  };

  return (
    <AuthForm
      title="Вписване"
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      onSubmitErrors={onSubmitErrors}
    >
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
        label={"Парола"}
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

      <FormControlLabel
        sx={{
          "& .css-1nx5sq4-MuiTypography-root": {
            color: "#ffffff",
          },
          "& .css-ahj2mt-MuiTypography-root": {
            color: "white",
          },
        }}
        control={<Checkbox value="remember" />}
        label="Запомни ме"
      />

      <SubmitButton title="Вход" />

      <Grid container>
        <Grid item xs>
          <Link
            href="/auth/resetpassword"
            style={{ textDecoration: "none", color: "#ffffff" }}
          >
            Забравена парола?
          </Link>
        </Grid>
      </Grid>
    </AuthForm>
  );
};

export default Login;

Login.getLayout = function getLayout(login) {
  return (
    <Layout>
      <AuthLayout>{login}</AuthLayout>
    </Layout>
  );
};

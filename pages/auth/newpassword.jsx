import React, { useState, useEffect } from "react";
import Layout from "@/layouts/Layout";
import AuthLayout from "@/layouts/AuthLayout";

// import { NewPasswordValidationSchema } from "../utils/validation/validationSchema";

import { useForm } from "react-hook-form";

// import { yupResolver } from "@hookform/resolvers/yup";

import { AuthForm } from "@/components/form-components/auth";
import { Input } from "@/components/form-components/input";
import { SubmitButton } from "@/components/form-components/submitButton";

//import { completeNewPasswordWithAws } from "../utils/aws/amplify-utils";

const NewPasswordPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm();

  const [onSubmitErrors, setOnsubmitErrors] = useState("");

  //const currentUser = useSelector(selectCurrentUser);

  //   useEffect(() => {
  //     if (isSubmitSuccessful) {
  //       reset();
  //     } // eslint-disable-next-line
  //   }, [isSubmitSuccessful]);

  const onSubmit = async (data) => {
    // const { newpassword } = data;
    // console.log(data);
    // await completeNewPasswordWithAws(currentUser, newpassword)
    //   .then((data) => {
    //     navigate("/");
    //     // at this time the user is logged in if no MFA required
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
      title="Паролата ви е изтекла! Моля въведете нова"
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      onSubmitErrors={onSubmitErrors}
    >
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

      <SubmitButton title="Потвърди" />
    </AuthForm>
  );
};

export default NewPasswordPage;

NewPasswordPage.getLayout = function getLayout(newpass) {
  return (
    <Layout>
      <AuthLayout>{newpass}</AuthLayout>
    </Layout>
  );
};

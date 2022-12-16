import React, { useState } from "react";
import { Container, Box, Typography, Theme, Divider } from "@mui/material";
import { GoogleSigninButton } from "./inc/google-signin-button";
import CustomInput from "@/components/ui-components/common/inputs/custom-input";
import CustomButton from "@/components/ui-components/common/buttons/custom-button";
import Link from "next/link";
import { useContextDetails } from "src/context/ContextProvider";
import { SnackbarModal } from "@/components/ui-components/snackbar";
import { useRouter } from "next/router";
import { SingleCardWrapper } from "@/components/ui-components/common/layouts/single-card-wrapper";
import {
  CreateUserDocument,
  GetUserDocument,
} from "src/services/users.services";

const SignIn = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [snackbarDetails, setSnackbarDetails] = useState<any | {}>({
    isError: false,
    openModal: false,
    text: "",
  });
  const [loginDetails, setLoginDetails] = useState<any | {}>({
    email: "",
    password: "",
  });
  const { LogIn, googleSignIn, cartDispatch, user }: any = useContextDetails();

  const handleGoogleSignIn = async () => {
    setSnackbarDetails((prev: any) => ({ ...prev, isError: false, text: "" }));
    setLoading(true);
    await googleSignIn().then(
      (res: any) => {
        CreateUserDocument(res.user);
        getCartPrefillDetails(res.user);
        setSnackbarDetails({
          openModal: true,
          isError: false,
          text: "Logged in successfuly",
        });
        setLoading(false);
        router.push("/home");
      },
      (error: any) => {
        setLoading(false);
        setSnackbarDetails({
          openModal: true,
          isError: true,
          text: error.message,
        });
      }
    );
  };

  const handleSignIn = async () => {
    setLoading(true);
    setSnackbarDetails((prev: any) => ({ ...prev, isError: false, text: "" }));
    await LogIn(loginDetails.email, loginDetails.password).then(
      (res: any) => {
        getCartPrefillDetails(res.user);
        setSnackbarDetails({
          openModal: true,
          isError: false,
          text: "Logged in successfuly",
        });
        if (router.query.cart) {
          router.push("/cart");
        } else {
          router.push("/home");
        }
        setLoading(false);
      },
      (error: any) => {
        setLoading(false);
        setSnackbarDetails({
          openModal: true,
          isError: true,
          text: error.message,
        });
      }
    );
  };

  const handleChange = (value: string, type: string) => {
    setLoginDetails({ ...loginDetails, [type]: value });
  };

  const getCartPrefillDetails = async (user: any) => {
    await GetUserDocument(user).then((res: any) => {
      cartDispatch({
        type: "REPLACE-ALL-ITEMS",
        payload: res.cart,
      });
    });
  };

  return (
    <>
      <SnackbarModal
        open={snackbarDetails.openModal}
        isError={snackbarDetails.isError}
        text={snackbarDetails.text}
        handleClose={() =>
          setSnackbarDetails((prev: any) => ({ ...prev, openModal: false }))
        }
      />

      <SingleCardWrapper>
        <Typography
          fontSize="1.3em"
          fontWeight={600}
          lineHeight={"30px"}
          color={(theme: Theme) => theme.palette.primary.main}
          textAlign="center"
          mb={1}
        >
          SignIn
        </Typography>
        <Typography
          fontSize="0.8em"
          fontWeight={500}
          lineHeight={"24px"}
          letterSpacing={"0.01em"}
          color={(theme: Theme) => theme.palette.secondary.main}
          textAlign="center"
        >
          Please select one of the options to sign in below
        </Typography>
        <Box my={2}>
          <GoogleSigninButton
            handleClick={handleGoogleSignIn}
            loading={loading}
          />
        </Box>
        <Divider>
          <Typography
            fontSize="1em"
            letterSpacing={"0.01em"}
            color={(theme: Theme) => theme.palette.secondary.light}
          >
            or
          </Typography>
        </Divider>
        <Box my={2}>
          <CustomInput
            label="Email"
            onChange={(value: string) => handleChange(value, "email")}
            disabled={loading}
            placeholder={"Enter your registered email"}
          />
        </Box>
        <Box>
          <CustomInput
            label="Password"
            onChange={(value: string) => handleChange(value, "password")}
            disabled={loading}
            placeholder={"Enter your password"}
          />
        </Box>
        <Box mt={1}>
          <Typography
            fontSize="0.8em"
            fontWeight={500}
            lineHeight={"24px"}
            letterSpacing={"0.01em"}
            color={(theme: Theme) => theme.palette.secondary.light}
            textAlign="end"
          >
            <Link href="/forgotpassword" legacyBehavior>
              Forgot Password?
            </Link>
          </Typography>
        </Box>
        <Box mt={3}>
          <CustomButton
            label={"Sign in to continue"}
            onClick={handleSignIn}
            disabled={loading}
          />
        </Box>
        <Typography
          fontSize="0.8em"
          fontWeight={500}
          lineHeight={"24px"}
          letterSpacing={"0.01em"}
          color={(theme: Theme) => theme.palette.secondary.main}
          textAlign="center"
          mt={2}
        >
          Don’t have an account yet?{" "}
          <Typography
            component="span"
            fontSize={13}
            fontWeight={600}
            lineHeight={"24px"}
            letterSpacing={"0.01em"}
            sx={{ textDecoration: "underline" }}
            color={(theme: Theme) => theme.palette.primary.light}
          >
            <Link href="/signup" legacyBehavior>
              Sign Up
            </Link>
          </Typography>
        </Typography>
      </SingleCardWrapper>
    </>
  );
};

export default SignIn;

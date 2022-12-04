import React, { useState } from "react";
import { Container, Box, Typography, Theme, Divider } from "@mui/material";
import { GoogleSigninButton } from "./inc/google-signin-button";
import CustomInput from "@/components/ui-components/common/custom-input";
import CustomButton from "@/components/ui-components/common/custom-button";
import Link from "next/link";
import { useUserAuth } from "src/context/ContextProvider";
import { SnackbarModal } from "@/components/ui-components/snackbar";
import { useRouter } from "next/router";

const SignIn = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [snackText, setSnackText] = useState<any>("");
  const [openSnackModal, setOpenSnackModal] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [loginDetails, setLoginDetails] = useState<any | {}>({
    email: "",
    password: "",
  });
  const { LogIn, googleSignIn }: any = useUserAuth();
  const handleGoogleSignIn = async () => {
    setIsError(false);
    setLoading(true);
    setSnackText("");
    await googleSignIn().then(
      (res: any) => {
        setSnackText("Logged in successfuly");
        setOpenSnackModal(true);
        setLoading(false);
        router.push("/home");
      },
      (error: any) => {
        setLoading(false);
        setSnackText(error.message);
        setIsError(true);
        setOpenSnackModal(true);
      }
    );
  };

  const handleSignIn = async () => {
    setLoading(true);
    setIsError(false);
    setSnackText("");
    await LogIn(loginDetails.email, loginDetails.password).then(
      (res: any) => {
        setSnackText("Logged in successfuly");
        setOpenSnackModal(true);
        setLoading(false);
        router.push("/home");
      },
      (error: any) => {
        setLoading(false);
        setSnackText(error.message);
        setIsError(true);
        setOpenSnackModal(true);
      }
    );
  };

  const handleChange = (value: string, type: string) => {
    setLoginDetails({ ...loginDetails, [type]: value });
  };

  return (
    <>
      <SnackbarModal
        open={openSnackModal}
        isError={isError}
        text={snackText}
        handleClose={() => setOpenSnackModal(false)}
      />

      <Container
        maxWidth="sm"
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Box mb={{ xs: 3, sm: 0 }}>
          <img src="/logo.gif" alt="" width={200} />
        </Box>

        <Box
          minWidth={410}
          boxShadow={"0px 1px 8px rgba(0, 0, 0, 0.04)"}
          border={"1px solid #EFEFEF"}
          borderRadius={2}
          px={4}
          py={2}
        >
          <Typography
            fontSize={22}
            fontWeight={700}
            lineHeight={"30px"}
            letterSpacing={"-0.02em"}
            color={(theme: Theme) => theme.palette.primary.main}
            textAlign="center"
            mb={1}
          >
            SignIn
          </Typography>
          <Typography
            fontSize={13}
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
              fontSize={15}
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
              fontSize={13}
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
            fontSize={13}
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
              fontWeight={500}
              lineHeight={"24px"}
              letterSpacing={"0.01em"}
              color={(theme: Theme) => theme.palette.primary.main}
            >
              <Link href="/signup" legacyBehavior>
                Sign Up
              </Link>
            </Typography>
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default SignIn;

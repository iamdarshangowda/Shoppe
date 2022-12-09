import React, { useState } from "react";
import { Container, Box, Typography, Theme } from "@mui/material";
import CustomInput from "@/components/ui-components/common/inputs/custom-input";
import CustomButton from "@/components/ui-components/common/buttons/custom-button";
import Link from "next/link";
import { SnackbarModal } from "@/components/ui-components/snackbar";
import { useContextDetails } from "src/context/ContextProvider";
import { useRouter } from "next/router";
import { SingleCardWrapper } from "@/components/ui-components/common/layouts/single-card-wrapper";

const SignUp = () => {
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
  const { SignUp }: any = useContextDetails();

  const handleSignUp = async () => {
    setSnackbarDetails((prev: any) => ({ ...prev, isError: false, text: "" }));
    setLoading(true);
    await SignUp(loginDetails.email, loginDetails.password).then(
      (res: any) => {
        setSnackbarDetails({
          openModal: true,
          isError: false,
          text: "Signed up successfuly",
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

  const handleChange = (value: string, type: string) => {
    setLoginDetails({ ...loginDetails, [type]: value });
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
          fontWeight={700}
          lineHeight={"30px"}
          letterSpacing={"-0.02em"}
          color={(theme: Theme) => theme.palette.primary.main}
          textAlign="center"
          mb={1}
        >
          SignUp
        </Typography>
        <Box my={3}>
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
        <Box mt={3}>
          <CustomButton
            label={"Sign up to continue"}
            onClick={handleSignUp}
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
          my={2}
        >
          Already have an account?{" "}
          <Typography
            component="span"
            fontSize={13}
            fontWeight={600}
            lineHeight={"24px"}
            letterSpacing={"0.01em"}
            sx={{ textDecoration: "underline" }}
            color={(theme: Theme) => theme.palette.primary.light}
          >
            <Link href="/signin" legacyBehavior>
              Sign In
            </Link>
          </Typography>
        </Typography>
      </SingleCardWrapper>
    </>
  );
};

export default SignUp;

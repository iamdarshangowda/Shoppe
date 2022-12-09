import React, { useState } from "react";
import { Container, Box, Typography, Theme } from "@mui/material";
import CustomInput from "@/components/ui-components/common/inputs/custom-input";
import CustomButton from "@/components/ui-components/common/buttons/custom-button";
import Link from "next/link";
import { SnackbarModal } from "@/components/ui-components/snackbar";
import { useContextDetails } from "src/context/ContextProvider";
import { useRouter } from "next/router";

const ForgotPassword = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [snackbarDetails, setSnackbarDetails] = useState<any | {}>({
    isError: false,
    openModal: false,
    text: "",
  });
  const [email, setEmail] = useState<any>("");
  const { forgotPassword }: any = useContextDetails();

  const handleForgotPassword = async () => {
    setLoading(true);
    setSnackbarDetails((prev: any) => ({ ...prev, isError: false, text: "" }));
    await forgotPassword(email).then(
      (res: any) => {
        setLoading(false);
        setSnackbarDetails({
          openModal: true,
          isError: false,
          text: "Reset link set to your email",
        });
        setTimeout(() => {
          router.push("/signin");
        }, 1000);
      },
      (error: any) => {
        setSnackbarDetails({
          openModal: true,
          isError: true,
          text: error.message,
        });
        setLoading(false);
      }
    );
  };

  const handleChange = (value: string) => {
    setEmail(value);
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
      <Container
        maxWidth="sm"
        sx={{
          mt: 4,
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
            Forgot Password?
          </Typography>
          <Typography
            fontSize={13}
            fontWeight={500}
            lineHeight={"24px"}
            letterSpacing={"0.01em"}
            color={(theme: Theme) => theme.palette.secondary.main}
            textAlign="center"
          >
            Please enter your registered email
          </Typography>
          <Box my={3}>
            <CustomInput
              label="Email"
              onChange={(value: string) => handleChange(value)}
              disabled={loading}
              placeholder={"Enter your registered email"}
            />
          </Box>
          <Box mt={3}>
            <CustomButton
              label={"Send Password Reset Link"}
              onClick={handleForgotPassword}
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
            my={2}
          >
            Already have an account?{" "}
            <Typography
              component="span"
              fontSize={13}
              fontWeight={500}
              lineHeight={"24px"}
              letterSpacing={"0.01em"}
              color={(theme: Theme) => theme.palette.primary.main}
            >
              <Link href="/signin" legacyBehavior>
                Sign In
              </Link>
            </Typography>
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default ForgotPassword;

import React, { useState, useContext } from "react";
import { Container, Box, Typography, Theme, Divider } from "@mui/material";
import CustomInput from "@/components/ui-components/common/custom-input";
import CustomButton from "@/components/ui-components/common/custom-button";
import Link from "next/link";
import { SnackbarModal } from "@/components/ui-components/snackbar";
import { useUserAuth } from "src/context/ContextProvider";
import Router, { useRouter } from "next/router";

const ForgotPassword = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [snackText, setSnackText] = useState<any>("");
  const [openSnackModal, setOpenSnackModal] = useState<boolean>(false);
  const [email, setEmail] = useState<any>("");
  const { forgotPassword }: any = useUserAuth();

  const handleForgotPassword = async () => {
    setLoading(true);
    setSnackText("");
    await forgotPassword(email).then(
      (res: any) => {
        setLoading(false);
        setSnackText("Reset link set to your email");
        setTimeout(() => {
          router.push("/signin");
        }, 2000);
      },
      (error: any) => {
        setOpenSnackModal(true);
        setLoading(false);
        setSnackText(error.message);
      }
    );
  };

  const handleChange = (value: string) => {
    setEmail(value);
  };

  return (
    <>
      <SnackbarModal
        open={openSnackModal}
        isError={true}
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

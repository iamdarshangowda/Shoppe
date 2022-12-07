import React, { useState, useContext } from "react";
import { Container, Box, Typography, Theme, Divider } from "@mui/material";
import CustomInput from "@/components/ui-components/common/inputs/custom-input";
import CustomButton from "@/components/ui-components/common/buttons/custom-button";
import Link from "next/link";
import { SnackbarModal } from "@/components/ui-components/snackbar";
import { useContextDetails } from "src/context/ContextProvider";
import { useRouter } from "next/router";

const SignUp = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [snackText, setSnackText] = useState<any>("");
  const [openSnackModal, setOpenSnackModal] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [loginDetails, setLoginDetails] = useState<any | {}>({
    email: "",
    password: "",
  });
  const { SignUp }: any = useContextDetails();

  const handleSignUp = async () => {
    setIsError(false);
    setLoading(true);
    setSnackText("");
    await SignUp(loginDetails.email, loginDetails.password).then(
      (res: any) => {
        setSnackText("Signed up successfuly");
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

export default SignUp;

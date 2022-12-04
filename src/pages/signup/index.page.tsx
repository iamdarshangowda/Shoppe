import React, { useState } from "react";
import { Container, Box, Typography, Theme, Divider } from "@mui/material";
import CustomInput from "@/components/ui-components/common/custom-input";
import CustomButton from "@/components/ui-components/common/custom-button";
import Link from "next/link";

const SignIn = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [loginDetails, setLoginDetails] = useState<any | {}>({
    email: "",
    password: "",
  });
  const handleGoogleSignIn = () => {};

  const handleSignIn = () => {};

  const handleChange = (value: string, type: string) => {
    setLoginDetails({ ...loginDetails, [type]: value });
  };

  return (
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
      <Typography
        fontSize={35}
        fontWeight={500}
        color="#A18A68"
        letterSpacing={10}
        textTransform="uppercase"
        mb={{ xs: 4, sm: 0 }}
      >
        Shoppe
      </Typography>

      <Box
        minWidth={410}
        boxShadow={"0px 1px 8px rgba(0, 0, 0, 0.04)"}
        border={"1px solid #EFEFEF"}
        borderRadius={2}
        px={4}
        py={2}
      >
        <Typography
          fontSize={24}
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
            onClick={handleSignIn}
            disabled={loading}
          />
        </Box>
        <Typography
          fontSize={15}
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
            fontSize={15}
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
  );
};

export default SignIn;

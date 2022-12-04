import React from "react";
import { LoadingButton } from "@mui/lab";
import { Typography, Theme } from "@mui/material";

interface Props {
  handleClick: () => void;
  loading: boolean;
}

export const GoogleSigninButton: React.FunctionComponent<Props> = ({
  handleClick,
  loading,
}) => {
  return (
    <LoadingButton
      variant="contained"
      onClick={handleClick}
      loading={loading}
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        width: "100%",
        height: "48px",
        border: "1px soild #D2D6DC",
        backgroundColor: "#FFFFFF",
        borderRadius: "24px",
        "&:hover": {
          background: "#FFFFFF",
        },
      }}
    >
      <img src="/icons/google.png" alt="google icon" width={24} height={24} />
      <Typography
        fontSize={"15px"}
        fontWeight={700}
        color={(theme: Theme) => theme.palette.secondary.main}
        textTransform="none"
        mx="auto"
      >
        Continue with Google
      </Typography>
    </LoadingButton>
  );
};

import React from "react";
import { Grid, Typography, Box, Theme } from "@mui/material";

interface Props {
  userData?: any;
}

export const ProfileData: React.FunctionComponent<Props> = ({ userData }) => {
  return (
    <Grid container spacing={4} sx={{ maxWidth: "650px" }}>
      <Grid
        item
        xs={12}
        sm={6}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          fontSize="0.9em"
          fontWeight={600}
          color={(theme: Theme) => theme.palette.secondary.main}
        >
          First Name:
        </Typography>
        <Typography
          fontSize="0.9em"
          fontWeight={600}
          color={(theme: Theme) => theme.palette.primary.main}
          sx={{ whiteSpace: "initial" }}
        >
          {userData?.first_name}
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          fontSize="0.9em"
          fontWeight={600}
          color={(theme: Theme) => theme.palette.secondary.main}
        >
          Last Name:
        </Typography>
        <Typography
          fontSize="0.9em"
          fontWeight={600}
          color={(theme: Theme) => theme.palette.primary.main}
        >
          {userData?.last_name}
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          fontSize="0.9em"
          fontWeight={600}
          color={(theme: Theme) => theme.palette.secondary.main}
        >
          Email:
        </Typography>
        <Typography
          fontSize="0.9em"
          fontWeight={600}
          color={(theme: Theme) => theme.palette.primary.main}
          sx={{ wordWrap: "break-word", whiteSpace: "pre-wrap" }}
          maxWidth={250}
        >
          {userData?.email}
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          fontSize="0.9em"
          fontWeight={600}
          color={(theme: Theme) => theme.palette.secondary.main}
        >
          Phone:
        </Typography>
        <Typography
          fontSize="0.9em"
          fontWeight={600}
          color={(theme: Theme) => theme.palette.primary.main}
        >
          {userData?.phone}
        </Typography>
      </Grid>
    </Grid>
  );
};

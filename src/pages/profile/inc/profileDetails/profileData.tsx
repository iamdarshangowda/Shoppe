import React from "react";
import { Grid, Typography, Box, Theme } from "@mui/material";

export const ProfileData = () => {
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
          Darshan
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
          Gowda
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
        >
          darshan@gmail.com
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
          8884335220
        </Typography>
      </Grid>
    </Grid>
  );
};

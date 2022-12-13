import React from "react";
import { Grid, Typography, Box, Theme } from "@mui/material";

interface Props {
  userData?: any;
}

export const AddressData: React.FunctionComponent<Props> = ({ userData }) => {
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
          Name:
        </Typography>
        <Typography
          fontSize="0.9em"
          fontWeight={600}
          color={(theme: Theme) => theme.palette.primary.main}
          sx={{ whiteSpace: "initial" }}
        >
          {userData?.name}
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
      <Grid
        item
        xs={12}
        sm={6}
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          fontSize="0.9em"
          fontWeight={600}
          color={(theme: Theme) => theme.palette.secondary.main}
        >
          Pincode
        </Typography>
        <Typography
          fontSize="0.9em"
          fontWeight={600}
          color={(theme: Theme) => theme.palette.primary.main}
          sx={{ wordWrap: "break-word", whiteSpace: "pre-wrap" }}
        >
          {userData?.pincode}
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          fontSize="0.9em"
          fontWeight={600}
          color={(theme: Theme) => theme.palette.secondary.main}
        >
          City/District/Town
        </Typography>
        <Typography
          fontSize="0.9em"
          fontWeight={600}
          color={(theme: Theme) => theme.palette.primary.main}
        >
          {userData?.city}
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          fontSize="0.9em"
          fontWeight={600}
          color={(theme: Theme) => theme.palette.secondary.main}
        >
          Address (Area and Street)
        </Typography>
        <Typography
          fontSize="0.9em"
          fontWeight={600}
          color={(theme: Theme) => theme.palette.primary.main}
          textAlign="center"
          maxWidth={250}
        >
          {userData?.street}
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          fontSize="0.9em"
          fontWeight={600}
          color={(theme: Theme) => theme.palette.secondary.main}
        >
          Landmark
        </Typography>
        <Typography
          fontSize="0.9em"
          fontWeight={600}
          color={(theme: Theme) => theme.palette.primary.main}
        >
          {userData?.landmark}
        </Typography>
      </Grid>
    </Grid>
  );
};

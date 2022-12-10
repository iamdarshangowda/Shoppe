import React from "react";
import { Grid, Typography, Box, Theme } from "@mui/material";

export const AddressData = () => {
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
          Darshan Gowda
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
          560069
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
          Jayanagar
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
          4th Floor, White Building, Opposite Bharghavi PG, Christ Furniture,
          28th Main Road, Block 9, Jayanagar, Bengaluru, Karnataka
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
          Ragigudda Temple
        </Typography>
      </Grid>
    </Grid>
  );
};

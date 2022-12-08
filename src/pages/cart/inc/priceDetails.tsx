import React from "react";
import { Box, Typography, Theme, Grid, Divider } from "@mui/material";

export const PriceDetails = () => {
  return (
    <Grid container sx={{ px: 3 }} spacing={2}>
      <Grid item xs={6}>
        <Typography
          my={3}
          fontSize="1em"
          fontWeight={400}
          color={(theme: Theme) => theme.palette.secondary.main}
        >
          SUBTOTAL
        </Typography>
        <Typography
          my={3}
          fontSize="1em"
          fontWeight={400}
          color={(theme: Theme) => theme.palette.secondary.main}
        >
          SHIPPING
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography
          my={3}
          fontSize="1em"
          fontWeight={500}
          color={(theme: Theme) => theme.palette.primary.main}
        >
          $ 65,00
        </Typography>
        <Typography
          my={3}
          fontSize="1em"
          fontWeight={400}
          color={(theme: Theme) => theme.palette.primary.main}
        >
          Shipping costs will be calculated once you have provided address.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Divider />
      </Grid>
      <Grid item xs={6}>
        <Typography
          my={3}
          fontSize="1em"
          fontWeight={600}
          color={(theme: Theme) => theme.palette.primary.main}
        >
          TOTAL
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography
          my={3}
          fontSize="1em"
          fontWeight={600}
          color={(theme: Theme) => theme.palette.primary.main}
        >
          $ 87,00
        </Typography>
      </Grid>
    </Grid>
  );
};

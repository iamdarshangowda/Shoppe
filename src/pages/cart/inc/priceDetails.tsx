import React from "react";
import { Box, Typography, Theme, Grid, Divider } from "@mui/material";
import CustomButton from "@/components/ui-components/common/buttons/custom-button";
import { PricerWithCommas } from "@/utils/dataModifiers";

interface Props {
  subTotal: any;
  isLogin: any;
  handleLogin: () => void;
}
export const PriceDetails: React.FunctionComponent<Props> = ({
  subTotal,
  isLogin,
  handleLogin,
}) => {
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
          INR {PricerWithCommas(subTotal.toFixed(2))}
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
          TOTAL <Typography fontSize="0.7em">(incl. GST)</Typography>
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography
          my={3}
          fontSize="1em"
          fontWeight={600}
          color={(theme: Theme) => theme.palette.primary.main}
        >
          INR {PricerWithCommas((subTotal + subTotal * (18 / 100)).toFixed(2))}
        </Typography>
      </Grid>
      <Grid>
        {isLogin?.email ? (
          <CustomButton label="Checkout" />
        ) : (
          <CustomButton label="Login to Checkout" onClick={handleLogin} />
        )}
      </Grid>
    </Grid>
  );
};

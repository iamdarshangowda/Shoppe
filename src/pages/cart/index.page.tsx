import React from "react";
import { Box, Typography, Theme, Grid } from "@mui/material";
import { useContextDetails } from "src/context/ContextProvider";
import { SingleItem } from "./inc/singleItem";

const Cart = () => {
  const {
    cartState: { cart },
  }: any = useContextDetails();
  console.log(cart);

  const handleChange = () => {};
  return (
    <Box>
      <Typography
        fontSize="2em"
        fontWeight={500}
        color={(theme: Theme) => theme.palette.primary.light}
        textAlign="center"
      >
        Shopping Cart
      </Typography>
      <Grid container>
        <Grid item xs={12} sm={6}>
          {cart.map((item: any, index: number) => (
            <Box key={index} my={3}>
              <SingleItem handleChange={handleChange} cartDetails={item} />
            </Box>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Cart;

import React from "react";
import { Box, Typography, Theme, Grid } from "@mui/material";
import { useContextDetails } from "src/context/ContextProvider";
import { SingleItem } from "./inc/singleItem";
import { PriceDetails } from "./inc/priceDetails";
import { useRouter } from "next/router";
import { EmptyStateCard } from "@/components/ui-components/common/cards/empty-state-card";

const Cart = () => {
  const {
    cartState: { cart },
    cartDispatch,
    user,
  }: any = useContextDetails();
  const router = useRouter();

  const cartCount = cart.reduce(
    (total: number, current: any) => Number(current.qty) + total,
    0
  );

  const cartTotalPrice = cart.reduce(
    (total: number, current: any) =>
      Number(current.price) * Number(current.qty) + total,
    0
  );

  const handleLogin = () => {
    localStorage.setTime("cart", JSON.stringify(cart));
    router.push(`/signin?cart=true`);
  };

  const handleChange = (value: number, item: any) => {
    let productDetails: any = {};
    productDetails.qty = value;
    cartDispatch({
      type: "ADD-TO-CART",
      payload: item,
      cartUpdate: productDetails,
    });
  };

  const handleRemoveItem = (item: any) => {
    cartDispatch({
      type: "REMOVE-FROM-CART",
      payload: item,
    });
  };

  return (
    <>
      {cart.length > 0 ? (
        <Box>
          <Typography
            fontSize="2em"
            fontWeight={500}
            color={(theme: Theme) => theme.palette.primary.light}
            textAlign="center"
          >
            Cart Details
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              {cart.map((item: any, index: number) => (
                <Box key={index} my={3}>
                  <SingleItem
                    handleChange={handleChange}
                    handleRemoveItem={handleRemoveItem}
                    cartDetails={item}
                  />
                </Box>
              ))}
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography
                fontSize="1.3em"
                fontWeight={400}
                my={3}
                sx={{ px: 3 }}
                color={(theme: Theme) => theme.palette.primary.main}
              >
                Cart totals
              </Typography>
              <PriceDetails
                subTotal={cartTotalPrice}
                isLogin={user}
                handleLogin={handleLogin}
              />
            </Grid>
          </Grid>
        </Box>
      ) : (
        <EmptyStateCard text={"No Items Added to Cart"} />
      )}
    </>
  );
};

export default Cart;

import React from "react";
import { Card, CardMedia, CardContent, Typography, Theme } from "@mui/material";
import { useContextDetails } from "src/context/ContextProvider";

interface Props {
  productDetails: any;
}

export const ListingCard: React.FunctionComponent<Props> = ({
  productDetails,
}) => {
  // if add cart is added in listing use below data
  // const {
  //   cartState: { cart },
  //   cartDispatch,
  // }: any = useContextDetails();

  return (
    <Card
      sx={{
        width: {
          xs: 170,
          sm: 200,
          "&:hover": {
            cursor: "pointer",
          },
        },
        height: 350,
      }}
    >
      <CardMedia
        component="img"
        height={200}
        image={productDetails?.image}
        alt=""
      />
      <CardContent>
        <Typography
          fontSize={15}
          fontWeight={500}
          color={(theme: Theme) => theme.palette.primary.light}
        >
          {productDetails?.title.substring(0, 60)}
        </Typography>
        <Typography fontSize={20} fontWeight={500} color="#A18A68">
          ${productDetails?.price}
        </Typography>
      </CardContent>
    </Card>
  );
};

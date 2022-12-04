import React from "react";
import { Card, CardMedia, CardContent, Typography, Theme } from "@mui/material";

interface Props {
  img: string;
  productName: string;
  productPrice: string;
}

export const ListingCard: React.FunctionComponent<Props> = ({
  img,
  productName,
  productPrice,
}) => {
  return (
    <Card sx={{ width: { xs: 170, sm: 200 }, height: 350 }}>
      <CardMedia component="img" height={200} image={img} alt="" />
      <CardContent>
        <Typography
          fontSize={15}
          fontWeight={500}
          color={(theme: Theme) => theme.palette.primary.light}
        >
          {productName.substring(0, 60)}
        </Typography>
        <Typography fontSize={20} fontWeight={500} color="#A18A68">
          ${productPrice}
        </Typography>
      </CardContent>
    </Card>
  );
};

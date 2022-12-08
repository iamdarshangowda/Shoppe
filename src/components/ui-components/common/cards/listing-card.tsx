import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Theme,
  Chip,
} from "@mui/material";
import { useContextDetails } from "src/context/ContextProvider";
import SellIcon from "@mui/icons-material/Sell";
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
        boxShadow: "0 0 2px",
        position: "relative",
        width: {
          xs: 170,
          sm: 220,
          "&:hover": {
            cursor: "pointer",
          },
        },
        height: 340,
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
          fontSize="0.9em"
          fontWeight={500}
          color={(theme: Theme) => theme.palette.primary.light}
        >
          {productDetails?.title.substring(0, 40)}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          position: "absolute",
          left: "10px",
          bottom: "10px",
        }}
      >
        <Chip
          label={`$${productDetails?.price}`}
          icon={<SellIcon />}
          sx={{
            fontSize: "20px",
            fontWeight: 500,
            color: "#A18A68",
            cursor: "pointer",
          }}
        />
      </CardActions>
    </Card>
  );
};

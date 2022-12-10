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
        maxWidth: 220,
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",

        "&:hover": {
          cursor: "pointer",
          boxShadow: "0 0 3px",
        },
      }}
    >
      <CardMedia
        component="img"
        height={200}
        image={productDetails?.image}
        alt=""
      />
      <CardContent>
        <Typography fontSize="0.9em" fontWeight={500} color="#562B08">
          {productDetails?.title.substring(0, 40)}
        </Typography>
      </CardContent>
      <CardActions>
        <Chip
          label={`$${productDetails?.price}`}
          icon={<SellIcon />}
          sx={{
            fontSize: "20px",
            fontWeight: 500,
            color: "#C58940",
            cursor: "pointer",
            bgcolor: "#FAEAB1",
          }}
        />
      </CardActions>
    </Card>
  );
};

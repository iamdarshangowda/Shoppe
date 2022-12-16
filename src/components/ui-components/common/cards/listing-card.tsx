import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Chip,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import SellIcon from "@mui/icons-material/Sell";
import { PricerWithCommas } from "@/utils/dataModifiers";
interface Props {
  productDetails: any;
}

export const ListingCard: React.FunctionComponent<Props> = ({
  productDetails,
}) => {
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
        image={productDetails?.image[0]}
        alt=""
      />
      <CardContent>
        <Chip
          label={productDetails?.brand.toUpperCase()}
          size="small"
          sx={{
            fontSize: "0.7em",
            fontWeight: 500,
            color: "#285430 ",
            cursor: "pointer",
            bgcolor: "#A4BE7B",
          }}
        />
        <Typography fontSize="0.9em" fontWeight={500} color="#562B08" mt={1}>
          {productDetails?.title.substring(0, 40)}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Chip
          label={`INR ${PricerWithCommas(productDetails.price)}`}
          icon={<SellIcon sx={{ fontSize: "1.2em" }} />}
          sx={{
            fontSize: "0.9em",
            fontWeight: 500,
            color: "#C58940",
            cursor: "pointer",
            bgcolor: "#FAEAB1",
          }}
        />
        <Chip
          label={productDetails?.rating?.rate}
          icon={<StarIcon sx={{ fontSize: "1.2em" }} />}
          sx={{
            fontSize: "0.8em",
            fontWeight: 500,
            color: "#C58940",
            cursor: "pointer",
            bgcolor: "#FAF8F1",
          }}
        />
      </CardActions>
    </Card>
  );
};

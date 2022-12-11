import React from "react";
import {
  Box,
  Grid,
  Typography,
  Rating,
  Divider,
  Theme,
  IconButton,
  Tooltip,
  Chip,
} from "@mui/material";
import CustomButton from "@/components/ui-components/common/buttons/custom-button";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import GroupedButtons from "@/components/ui-components/common/buttons/grouped-button";
import SellIcon from "@mui/icons-material/Sell";
import { PricerWithCommas } from "@/utils/dataModifiers";

interface Props {
  productDetails: any;
  handleBack: () => void;
  rating: number;
  handleProductCount: (value: number) => void;
  cartCount: number;
  handleAddtoCart: () => void;
  handleRemovefromCart: () => void;
}

export const SingleProductView: React.FunctionComponent<Props> = ({
  productDetails,
  handleBack,
  rating,
  handleProductCount,
  cartCount,
  handleAddtoCart,
  handleRemovefromCart,
}) => {
  const formatPrice = PricerWithCommas(productDetails?.price);

  return (
    <Grid container mb={4} spacing={2}>
      <Grid item xs={12} mb={1}>
        <CustomButton
          label="back"
          onClick={handleBack}
          height={"38px"}
          sx={{ maxWidth: "90px" }}
          icon={<ArrowBackIosIcon />}
        />
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box maxWidth={400} maxHeight={450}>
          <img
            src={productDetails?.image?.[0]}
            alt=""
            width="100%"
            height="100%"
          />
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box display="flex" flexDirection="column" gap={2}>
          <Typography
            fontSize="1.625em"
            fontWeight={400}
            color={(theme: Theme) => theme.palette.primary.main}
          >
            {productDetails?.title}
          </Typography>
          <Chip
            label={`INR ${formatPrice}`}
            icon={<SellIcon />}
            sx={{
              fontSize: "1.1em",
              fontWeight: 500,
              color: "#A18A68",
              maxWidth: "150px",
            }}
          />
          <Typography
            fontSize="1em"
            fontWeight={400}
            color={(theme: Theme) => theme.palette.primary.light}
          >
            {productDetails?.description}
          </Typography>
          <Box display="flex" gap={2}>
            <Rating value={Number(productDetails?.rating?.rate)} readOnly />
            <Divider orientation="vertical" flexItem />
            <Typography
              fontSize="1em"
              fontWeight={400}
              color={(theme: Theme) => theme.palette.secondary.light}
            >
              {productDetails?.rating?.count} customer review
            </Typography>
          </Box>
          <Box
            display="flex"
            gap={2}
            justifyContent={{ xs: "center", sm: "flex-start" }}
            alignItems={"center"}
            mt={1}
          >
            <GroupedButtons
              handleChange={handleProductCount}
              cartCount={cartCount}
            />
            <Box display="flex" justifyContent={"space-between"} gap={1}>
              <CustomButton
                label="ADD TO CART"
                onClick={handleAddtoCart}
                sx={{ width: { xs: "130px", sm: "180px", md: "200px" } }}
              />
              <Tooltip title="Remove Item from Cart">
                <IconButton onClick={handleRemovefromCart}>
                  <DeleteIcon sx={{ fontSize: "30px" }} />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

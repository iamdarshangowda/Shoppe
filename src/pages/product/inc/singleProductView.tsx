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
  return (
    <Grid container mb={4}>
      <Grid item xs={12}>
        <CustomButton
          label="back"
          onClick={handleBack}
          height={"38px"}
          sx={{ maxWidth: "90px" }}
          icon={<ArrowBackIosIcon />}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box display="flex" justifyContent="center">
          <img src={productDetails.image} alt="" width={300} />
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box display="flex" flexDirection="column" gap={2}>
          <Typography
            fontSize={26}
            fontWeight={400}
            color={(theme: Theme) => theme.palette.primary.main}
          >
            {productDetails?.title}
          </Typography>
          <Chip
            label={`$${productDetails?.price}`}
            icon={<SellIcon />}
            sx={{
              fontSize: "20px",
              fontWeight: 500,
              color: "#A18A68",
              maxWidth: "130px",
            }}
          />
          <Typography
            fontSize={16}
            fontWeight={400}
            color={(theme: Theme) => theme.palette.primary.light}
          >
            {productDetails?.description}
          </Typography>
          <Box display="flex" gap={2}>
            <Rating value={rating} readOnly />
            <Divider orientation="vertical" flexItem />
            <Typography
              fontSize={16}
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
                sx={{ width: { xs: "150px", sm: "200px" } }}
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

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
import CustomSelect from "@/components/ui-components/common/inputs/custom-select";

interface Props {
  productDetails: any;
  handleBack: () => void;
  rating: number;
  prefillData: any;
  handleAddtoCart: () => void;
  handleRemovefromCart: () => void;
  handleChange: (type: string, value: any) => void;
}

export const SingleProductView: React.FunctionComponent<Props> = ({
  productDetails,
  handleBack,
  rating,
  prefillData,
  handleAddtoCart,
  handleRemovefromCart,
  handleChange,
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
          <Box display="flex" gap={2}>
            <Box maxWidth={150} width="100%">
              <CustomSelect
                label="Select Size"
                data={productDetails?.size}
                onChange={(value: any) => handleChange("size", value)}
                value={prefillData?.size}
              />
            </Box>
            <Divider orientation="vertical" flexItem />
            <Box maxWidth={150} width="100%">
              <CustomSelect
                label="Select Color"
                data={productDetails?.color}
                onChange={(value: any) => handleChange("color", value)}
                value={prefillData?.color}
              />
            </Box>
          </Box>
          <Box
            display="flex"
            gap={2}
            justifyContent={{ xs: "center", sm: "flex-start" }}
            alignItems={"center"}
            mt={1}
          >
            <GroupedButtons
              handleChange={(value: any) => handleChange("qty", value)}
              cartCount={prefillData?.qty}
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

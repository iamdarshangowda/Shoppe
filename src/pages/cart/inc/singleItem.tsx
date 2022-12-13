import React from "react";
import {
  Box,
  Typography,
  Theme,
  Divider,
  Chip,
  IconButton,
} from "@mui/material";
import GroupedButtons from "@/components/ui-components/common/buttons/grouped-button";
import CloseIcon from "@mui/icons-material/Close";
import SellIcon from "@mui/icons-material/Sell";
import { PricerWithCommas } from "@/utils/dataModifiers";

interface Props {
  handleChange: (value: number, item: any) => void;
  handleRemoveItem: (item: any) => void;
  cartDetails: {
    image: string;
    price: string;
    title: string;
    qty: number;
    id: string;
    size: string;
    color: string;
  };
}

export const SingleItem: React.FunctionComponent<Props> = ({
  handleChange,
  cartDetails,
  handleRemoveItem,
}) => {
  return (
    <>
      <Box
        display="flex"
        gap={2}
        sx={{ position: "relative" }}
        maxHeight="120px"
      >
        <Box>
          <img
            src={cartDetails?.image?.[0]}
            alt=""
            width={120}
            style={{ maxHeight: "120px" }}
          />
        </Box>
        <Box
          display="flex"
          flexDirection={"column"}
          gap={2}
          maxWidth="400px"
          width="100%"
          justifyContent={"space-between"}
        >
          <Box display="flex" justifyContent={"space-between"} gap={2}>
            <Typography
              fontSize="1em"
              fontWeight={500}
              color={(theme: Theme) => theme.palette.primary.main}
            >
              {cartDetails?.title.substring(0, 50)}
            </Typography>
            <Box>
              <IconButton onClick={() => handleRemoveItem(cartDetails)}>
                <CloseIcon
                  sx={{
                    color: (theme: Theme) => theme.palette.primary.light,
                  }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box display="flex" gap={2}>
            <Typography
              fontSize="0.9em"
              fontWeight={400}
              color={(theme: Theme) => theme.palette.primary.main}
            >
              Size: {cartDetails?.size},
            </Typography>
            <Typography
              fontSize="0.9em"
              fontWeight={400}
              color={(theme: Theme) => theme.palette.primary.main}
            >
              Color: {cartDetails?.color}
            </Typography>
          </Box>
          <Box display="flex" justifyContent={"space-between"} gap={1}>
            <Chip
              label={`INR ${PricerWithCommas(cartDetails?.price)}`}
              icon={<SellIcon sx={{ fontSize: "18px" }} />}
              sx={{
                fontSize: "16px",
                fontWeight: 500,
                color: "#A18A68",
                maxWidth: "130px",
              }}
            />
            <GroupedButtons
              handleChange={(value: number) => handleChange(value, cartDetails)}
              cartCount={cartDetails?.qty}
              sx={{ height: "30px" }}
            />
          </Box>
        </Box>
      </Box>
      <Divider sx={{ mt: 2, maxWidth: "550px" }} />
    </>
  );
};

import React from "react";
import { Box, Typography, Theme, Divider, Chip } from "@mui/material";
import GroupedButtons from "@/components/ui-components/common/buttons/grouped-button";
import CloseIcon from "@mui/icons-material/Close";
import SellIcon from "@mui/icons-material/Sell";

interface Props {
  handleChange: (value: number) => void;
  cartDetails: { image: string; price: string; title: string; qty: number };
}

export const SingleItem: React.FunctionComponent<Props> = ({
  handleChange,
  cartDetails,
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
            src={cartDetails?.image}
            alt=""
            width={100}
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
              fontWeight={400}
              color={(theme: Theme) => theme.palette.primary.main}
            >
              {cartDetails?.title.substring(0, 50)}
            </Typography>
            <Box>
              <CloseIcon
                sx={{
                  color: (theme: Theme) => theme.palette.primary.light,
                }}
              />
            </Box>
          </Box>
          <Box display="flex" justifyContent={"space-between"} gap={1}>
            <Chip
              label={`$${cartDetails?.price}`}
              icon={<SellIcon sx={{ fontSize: "18px" }} />}
              sx={{
                fontSize: "16px",
                fontWeight: 500,
                color: "#A18A68",
                maxWidth: "130px",
              }}
            />
            <GroupedButtons
              handleChange={handleChange}
              cartCount={cartDetails?.qty}
              sx={{ height: "30px" }}
            />
          </Box>
        </Box>
        {/* <Box></Box> */}
      </Box>
      <Divider sx={{ mt: 2, maxWidth: "550px" }} />
    </>
  );
};

import React, { useState } from "react";
import {
  Box,
  Popover,
  Typography,
  IconButton,
  Badge,
  Divider,
  Theme,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { ItemBrief } from "./itemBrief";
import CustomButton from "@/components/ui-components/common/buttons/custom-button";

interface Props {
  cartCount: number;
  cartTotal: number;
  cart: [];
  handleCheckout: () => void;
  handleClearCart: () => void;
}

export const CartPopover: React.FunctionComponent<Props> = ({
  cartCount,
  cartTotal,
  cart,
  handleCheckout,
  handleClearCart,
}) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCartCheckout = () => {
    setAnchorEl(null);
    handleCheckout();
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <IconButton aria-describedby={id} onClick={handleClick}>
        <Badge badgeContent={cartCount} color="primary">
          <ShoppingCartIcon sx={{ fontSize: "30px" }} />
        </Badge>
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        {cart.length > 0 ? (
          <Box p={2}>
            {cart.map((item: any, index: number) => (
              <Box key={index}>
                <ItemBrief item={item} />
              </Box>
            ))}
            <Box display="flex" justifyContent={"space-between"} my={2}>
              <Typography fontSize="0.9em" fontWeight={600}>
                Total:
              </Typography>
              <Typography fontSize="0.9em" fontWeight={600}>
                ${cartTotal}
              </Typography>
            </Box>
            <Divider />
            <Box my={2}>
              <CustomButton
                label="Checkout"
                sx={{ height: "30px" }}
                onClick={handleCartCheckout}
              />
            </Box>
            <Box textAlign={"center"} my={1}>
              <Typography
                fontSize={13}
                color={(theme: Theme) => theme.palette.warning.main}
                onClick={handleClearCart}
                sx={{ textDecoration: "underline", cursor: "pointer" }}
              >
                Clear Cart
              </Typography>
            </Box>
          </Box>
        ) : (
          <Typography fontSize={18} p={2}>
            No Items Added
          </Typography>
        )}
      </Popover>
    </div>
  );
};

import React, { useEffect, useState } from "react";
import { Button, ButtonGroup } from "@mui/material";

interface Props {
  handleChange: (value: number) => void;
  cartCount: number;
  sx?: any;
}

const GroupedButtons: React.FunctionComponent<Props> = ({
  handleChange,
  cartCount,
  sx,
}) => {
  const handleIncrement = () => {
    handleChange(cartCount + 1);
  };
  const handleDecrement = () => {
    handleChange(cartCount - 1);
  };

  return (
    <ButtonGroup sx={sx}>
      <Button onClick={handleDecrement} disabled={cartCount <= 0}>
        -
      </Button>
      <Button disabled sx={{ color: "#242424 !important", fontWeight: 500 }}>
        {cartCount}
      </Button>
      <Button onClick={handleIncrement}>+</Button>
    </ButtonGroup>
  );
};

export default GroupedButtons;

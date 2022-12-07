import React, { useEffect, useState } from "react";
import { Button, ButtonGroup } from "@mui/material";

interface Props {
  handleChange: (value: number) => void;
  cartCount: number;
}

const GroupedButtons: React.FunctionComponent<Props> = ({
  handleChange,
  cartCount,
}) => {
  const handleIncrement = () => {
    handleChange(cartCount + 1);
  };
  const handleDecrement = () => {
    handleChange(cartCount - 1);
  };

  return (
    <ButtonGroup size="medium">
      <Button onClick={handleDecrement} disabled={cartCount <= 0}>
        -
      </Button>
      <Button disabled>{cartCount}</Button>
      <Button onClick={handleIncrement}>+</Button>
    </ButtonGroup>
  );
};

export default GroupedButtons;

import React, { useState } from "react";
import { Button, ButtonGroup } from "@mui/material";

interface Props {
  handleChange: (value: number) => void;
}

const GroupedButtons: React.FunctionComponent<Props> = ({ handleChange }) => {
  const [value, setValue] = useState<number>(0);

  const handleIncrement = () => {
    setValue((prev) => prev + 1);
    handleChange(value + 1);
  };
  const handleDecrement = () => {
    setValue((prev) => prev - 1);
    handleChange(value - 1);
  };

  return (
    <ButtonGroup size="small" aria-label="small outlined button group">
      <Button onClick={handleDecrement} disabled={value <= 0}>
        -
      </Button>
      <Button disabled>{value}</Button>
      <Button onClick={handleIncrement}>+</Button>
    </ButtonGroup>
  );
};

export default GroupedButtons;

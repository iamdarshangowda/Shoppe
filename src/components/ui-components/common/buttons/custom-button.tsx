import React from "react";
import { Button } from "@mui/material";

interface PrimaryButtonProps {
  label: string;
  onClick?: any;
  sx?: any;
  disabled?: boolean;
  variant?: VariantProps;
  color?: any;
  icon?: any;
}

type VariantProps = "text" | "outlined" | "contained" | undefined;

const CustomButton: React.FunctionComponent<PrimaryButtonProps> = ({
  label,
  onClick,
  sx,
  disabled,
  variant,
  color,
  icon,
}) => {
  return (
    <Button
      variant={variant ? variant : "contained"}
      onClick={onClick}
      type="submit"
      sx={{
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.12)",
        bgcolor: "#453825",
        textTransform: "none",
        fontWeight: 500,
        height: "48px",
        width: "100%",
        borderRadius: "30px",
        fontSize: "14px",
        "&:hover": {
          bgcolor: "#453825",
        },
        ...sx,
      }}
      disabled={disabled}
    >
      {icon}
      {label}
    </Button>
  );
};

export default CustomButton;

import React from "react";
import { Button } from "@mui/material";

interface PrimaryButtonProps {
  label: string;
  onClick?: () => void;
  sx?: any;
  disabled?: boolean;
  variant?: VariantProps;
  color?: string;
  icon?: any;
  height?: string;
}

type VariantProps = "text" | "outlined" | "contained" | undefined;
type SizeProps = "small" | "medium" | "large" | undefined;

const CustomButton: React.FunctionComponent<PrimaryButtonProps> = ({
  label,
  onClick,
  sx,
  disabled,
  variant,
  color,
  icon,
  height,
}) => {
  return (
    <Button
      variant={variant ? variant : "contained"}
      onClick={onClick}
      type="submit"
      sx={{
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.12)",
        bgcolor: "#C58940",
        textTransform: "none",
        fontWeight: 500,
        height: height ? height : "48px",
        minWidth: "80px",
        width: "100%",
        borderRadius: "30px",
        fontSize: "0.875em",
        "&:hover": {
          bgcolor: "#C69749",
        },
        ...sx,
      }}
      disabled={disabled}
      startIcon={icon}
    >
      {label}
    </Button>
  );
};

export default CustomButton;

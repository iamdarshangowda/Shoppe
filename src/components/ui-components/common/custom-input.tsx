import React from "react";
import { Box, Typography, TextField, InputLabel } from "@mui/material";

interface inputFieldProps {
  label?: string;
  fieldName?: string;
  required?: boolean;
  value?: any;
  type?: string;
  disabled?: boolean;
  onChange?: any;
  placeholder?: string;
}

const CustomInput: React.FunctionComponent<inputFieldProps> = ({
  label,
  fieldName,
  required,
  value,
  type,
  disabled,
  onChange,
  placeholder,
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event?.target.value);
  };

  return (
    <Box>
      {label ? (
        <InputLabel
          htmlFor={fieldName}
          sx={{
            fontSize: 14,
            fontWeight: 600,
            mb: 1,
          }}
        >
          {label}
          {required && <Typography component={"span"}>*</Typography>}
        </InputLabel>
      ) : null}
      <TextField
        fullWidth
        variant={"outlined"}
        id={fieldName}
        name={fieldName}
        disabled={disabled}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleInputChange}
        InputProps={{
          style: {
            borderRadius: "30px",
            fontSize: "16px",
            boxShadow: "none",
            paddingLeft: "10px",
          },
        }}
        sx={{
          [`& .MuiOutlinedInput-root`]: {
            height: "48px",
            fontSize: "15px !important",
            color: "#495057",
          },
        }}
      />
    </Box>
  );
};

export default CustomInput;

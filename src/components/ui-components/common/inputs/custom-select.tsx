import {
  Box,
  SelectChangeEvent,
  Theme,
  Select,
  Typography,
} from "@mui/material";
import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

interface props {
  label?: string;
  required?: boolean;
  fieldName?: string;
  data?: any;
  value?: any;
  onClick?: any;
  placeholder?: string;
  defaultValue?: any;
  onChange?: any;
  valueKey: string;
  displayValueKey: string;
  disabled?: boolean;
  multiple?: boolean;
}

const CustomSelect: React.FunctionComponent<props> = ({
  label,
  required,
  fieldName,
  data,
  value,
  onClick,
  placeholder,
  defaultValue,
  onChange,
  valueKey,
  displayValueKey,
  disabled,
  multiple,
}) => {
  const handleSelectChange = (event: SelectChangeEvent) => {
    if (multiple === true) {
      const {
        target: { value },
      } = event;
      onChange(typeof value === "string" ? value.split(",") : value);
      return;
    }
    onChange(event.target.value);
  };

  return (
    <Box sx={{ margin: "0 0 16px" }}>
      {label ? (
        <InputLabel
          htmlFor={fieldName}
          sx={{ mb: 1, fontWeight: 600, fontSize: "0.8em" }}
        >
          {label}
          {required && <Typography component={"span"}>*</Typography>}
        </InputLabel>
      ) : null}
      <Select
        fullWidth
        variant="outlined"
        id={fieldName}
        name={fieldName}
        onClick={onClick}
        value={value}
        disabled={disabled}
        onChange={handleSelectChange}
        multiple={multiple}
        sx={{
          height: "40px",
          minHeight: "auto",
          width: "100%",
          borderRadius: "24px",

          ["& .MuiSelect-outlined"]: {
            minHeight: "auto",
            height: "40px",
            fontSize: "15px !important",
            color: "#495057",
          },
        }}
      >
        <MenuItem value={""} disabled>
          {placeholder}
        </MenuItem>
        {data?.map((item: any, index: number) => (
          <MenuItem value={item[valueKey]} key={index}>
            {item[displayValueKey]}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};

export default CustomSelect;

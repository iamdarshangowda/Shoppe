import React from "react";
import { Box, Typography, Theme } from "@mui/material";
import CustomInput from "@/components/ui-components/common/custom-input";
import CustomSelect from "@/components/ui-components/common/custom-select";

const SortPrice = [{ label: "Acending" }, { label: "Decending" }];

export const Filters = () => {
  const handleSortProduct = () => {};

  return (
    <Box maxWidth={252}>
      <Box my={2}>
        <Typography
          fontSize={23}
          fontWeight={500}
          color={(theme: Theme) => theme.palette.primary.light}
        >
          Shop The Latest
        </Typography>
      </Box>
      <Box my={4}>
        <CustomInput
          placeholder="Search..."
          sx={{ height: "40px", border: "none" }}
        />
      </Box>
      <Box>
        <CustomSelect
          data={SortPrice}
          displayValueKey={"label"}
          defaultValue="default"
          placeholder={"Sort By"}
          valueKey={"label"}
          onChange={handleSortProduct}
        />
      </Box>
    </Box>
  );
};

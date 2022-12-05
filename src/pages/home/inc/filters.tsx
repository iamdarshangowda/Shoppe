import React from "react";
import { Box, Typography, Theme } from "@mui/material";
import CustomInput from "@/components/ui-components/common/inputs/custom-input";
import CustomSelect from "@/components/ui-components/common/inputs/custom-select";

const SortPrice = [
  { label: "Acending", key: "asc" },
  { label: "Decending", key: "desc" },
];

interface Props {
  handleSort: any;
  handleSearch: any;
}

export const Filters: React.FunctionComponent<Props> = ({
  handleSort,
  handleSearch,
}) => {
  return (
    <Box>
      <Box mb={2}>
        <Typography
          fontSize={23}
          fontWeight={500}
          color={(theme: Theme) => theme.palette.primary.light}
        >
          Filter Products
        </Typography>
      </Box>
      <Box mb={3}>
        <CustomInput
          placeholder="Search..."
          sx={{ height: "40px", border: "none" }}
          onChange={handleSearch}
        />
      </Box>
      <Box>
        <CustomSelect
          data={SortPrice}
          displayValueKey={"label"}
          defaultValue="default"
          placeholder={"Sort By"}
          valueKey={"key"}
          onChange={handleSort}
        />
      </Box>
    </Box>
  );
};

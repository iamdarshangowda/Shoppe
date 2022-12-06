import React from "react";
import { Box, Typography, Theme } from "@mui/material";
import CustomInput from "@/components/ui-components/common/inputs/custom-input";
import CustomSelect from "@/components/ui-components/common/inputs/custom-select";
import CustomButton from "@/components/ui-components/common/buttons/custom-button";
import { useRouter } from "next/router";

const SortPrice = [
  { label: "Price High to Low", key: "asc" },
  { label: "Price Low to High", key: "desc" },
];

interface Props {
  handleSort: (value: string) => void;
  handleSearch: (value: string) => void;
  clearFilters: () => void;
}

export const Filters: React.FunctionComponent<Props> = ({
  handleSort,
  handleSearch,
  clearFilters,
}) => {
  const router = useRouter();

  return (
    <Box>
      <Box mb={2} display="flex" justifyContent={"space-between"}>
        <Typography
          fontSize={23}
          fontWeight={500}
          color={(theme: Theme) => theme.palette.primary.light}
        >
          Filter Products
        </Typography>
        <CustomButton
          label="Clear Filters"
          sx={{ maxWidth: "120px" }}
          height={"38px"}
          onClick={clearFilters}
        />
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
          defaultValue=""
          placeholder={"Sort By"}
          valueKey={"key"}
          onChange={handleSort}
          value={router?.query.sortby ? router?.query.sortby : ""}
        />
      </Box>
    </Box>
  );
};

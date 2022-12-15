import React, { useState } from "react";
import { Box, Typography, Theme, useMediaQuery, Button } from "@mui/material";
import CustomInput from "@/components/ui-components/common/inputs/custom-input";
import CustomSelect from "@/components/ui-components/common/inputs/custom-select";
import CustomButton from "@/components/ui-components/common/buttons/custom-button";
import { useRouter } from "next/router";
import { useTheme } from "@mui/styles";

const CategoryListHC = [
  { label: "Accessories", key: "accessories" },
  { label: "Shoes", key: "shoes" },
  { label: "Clothes", key: "clothes" },
  { label: "Watches", key: "watches" },
];

const BrandListHC = [
  { label: "Nike", key: "nike" },
  { label: "Puma", key: "puma" },
  { label: "Casio", key: "casio" },
  { label: "Zara", key: "zara" },
  { label: "Mango", key: "mango" },
  { label: "Fendi", key: "fendi" },
  { label: "Fossil", key: "fossil" },
];

interface Props {
  handleCategory: (value: string) => void;
  handleSearch?: (value: string) => void;
  clearFilters: () => void;
  handleBrand: (value: string) => void;
}

export const Filters: React.FunctionComponent<Props> = ({
  handleCategory,
  handleSearch,
  clearFilters,
  handleBrand,
}) => {
  const theme: any = useTheme();
  const lessThanSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const [hide, setHide] = useState<boolean>(lessThanSmall ? true : false);
  const router = useRouter();

  const handleHide = () => {
    setHide(!hide);
  };

  return (
    <Box>
      <Box
        mb={2}
        display="flex"
        justifyContent={"space-between"}
        alignItems="center"
        flexWrap={"wrap"}
        gap={2}
      >
        {lessThanSmall ? (
          <Button onClick={handleHide} variant="outlined">
            {hide ? "Filter" : "Hide Filters"}
          </Button>
        ) : (
          <Typography
            fontSize="1em"
            fontWeight={500}
            color={(theme: Theme) => theme.palette.primary.light}
          >
            Filter Products
          </Typography>
        )}
      </Box>
      {hide ? null : (
        <>
          <Box mb={3}>
            <CustomButton
              label="Clear Filters"
              sx={{ minWidth: "120px" }}
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
          <Box mb={3}>
            <CustomSelect
              data={CategoryListHC}
              fieldName="category"
              displayValueKey={"label"}
              placeholder={"Sort By Category"}
              valueKey={"key"}
              onChange={handleCategory}
              //label={"Sort By Category"}
              value={
                router?.query.category ? router?.query.category : "default"
              }
            />
          </Box>
          <Box mb={3}>
            <CustomSelect
              data={BrandListHC}
              fieldName="brand"
              displayValueKey={"label"}
              placeholder={"Sort By Brand"}
              valueKey={"key"}
              onChange={handleBrand}
              //label={"Sort By Brand"}
              value={router?.query.brand ? router?.query.brand : "default"}
            />
          </Box>
        </>
      )}
    </Box>
  );
};

import React, { useState } from "react";
import { Box, Typography, Theme, useMediaQuery, Button } from "@mui/material";
import CustomInput from "@/components/ui-components/common/inputs/custom-input";
import CustomSelect from "@/components/ui-components/common/inputs/custom-select";
import CustomButton from "@/components/ui-components/common/buttons/custom-button";
import { useRouter } from "next/router";
import { useTheme } from "@mui/styles";

const CategoryList = [
  { label: "Accessories", key: "accessories" },
  { label: "Shoes", key: "shoes" },
  { label: "Clothes", key: "clothes" },
  { label: "Watches", key: "watches" },
];

const BrandList = [
  { label: "Nike", key: "nike" },
  { label: "Puma", key: "puma" },
  { label: "Casio", key: "casio" },
  { label: "Zara", key: "zara" },
  { label: "Mango", key: "mango" },
  { label: "Fendi", key: "fendi" },
  { label: "Fossil", key: "fossil" },
];

// const PriceList = [
//   { label: "Below 2,000", key: "0-2000" },
//   { label: "2000 - 5000", key: "2001-5000" },
//   { label: "5000 - 10000", key: "50001-10000" },
//   { label: "Above 10000", key: "10001" },
// ];

interface Props {
  handleCategory: (value: string) => void;
  handleSearch: (value: string) => void;
  clearFilters: () => void;
  handleBrand: (value: string) => void;
  handlePrice?: (value: number) => void;
}

export const Filters: React.FunctionComponent<Props> = ({
  handleCategory,
  handleSearch,
  clearFilters,
  handleBrand,
  handlePrice,
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
          <Box>
            <CustomSelect
              data={CategoryList}
              fieldName="category"
              displayValueKey={"label"}
              defaultValue=""
              placeholder={"Sort By Category"}
              valueKey={"key"}
              onChange={handleCategory}
              label={"Sort By Category"}
              value={router?.query.category ? router?.query.category : ""}
            />
          </Box>
          <Box>
            <CustomSelect
              data={BrandList}
              fieldName="brand"
              displayValueKey={"label"}
              defaultValue=""
              placeholder={"Sort By Brand"}
              valueKey={"key"}
              onChange={handleBrand}
              label={"Sort By Brand"}
              value={router?.query.brand ? router?.query.brand : ""}
            />
          </Box>
          {/* <Box>
            <CustomSelect
              data={PriceList}
              fieldName="price"
              displayValueKey={"label"}
              defaultValue=""
              placeholder={"Sort By Price"}
              valueKey={"key"}
              onChange={handlePrice}
              label={"Sort By Price"}
              value={router?.query.price ? router?.query.price : ""}
            />
          </Box> */}
        </>
      )}
    </Box>
  );
};

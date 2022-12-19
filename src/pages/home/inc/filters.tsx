import React, { useState, useEffect } from "react";
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
  handleQueryChange: (type: string, value: string) => void;
  handleSearch?: (value: string) => void;
  clearFilters: () => void;
  searchValue: string;
}

export const Filters: React.FunctionComponent<Props> = ({
  handleSearch,
  clearFilters,
  handleQueryChange,
  searchValue,
}) => {
  const theme: any = useTheme();
  const lessThanSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const [hide, setHide] = useState<boolean>(false);
  const router = useRouter();

  const handleHide = () => {
    setHide(!hide);
  };

  useEffect(() => {
    if (lessThanSmall) {
      setHide(true);
    }
  }, []);

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
              value={searchValue}
            />
          </Box>
          <Box mb={3}>
            <CustomSelect
              data={CategoryListHC}
              fieldName="category"
              displayValueKey={"label"}
              placeholder={"Sort By Category"}
              valueKey={"key"}
              onChange={(value: string) => handleQueryChange("category", value)}
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
              onChange={(value: string) => handleQueryChange("brand", value)}
              value={router?.query.brand ? router?.query.brand : "default"}
            />
          </Box>
        </>
      )}
    </Box>
  );
};

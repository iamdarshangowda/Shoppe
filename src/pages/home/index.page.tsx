import React, { useState, useEffect } from "react";
import { Box, Divider } from "@mui/material";
import { Filters } from "./inc/filters";
import { get } from "src/config/axiosClient";
import { ListingCard } from "@/components/ui-components/common/cards/listing-card";
import { debounce } from "@/utils/dataModifiers";

const Home = () => {
  const [productList, setProductList] = useState<any | []>([]);

  const getAllProducts = async (params?: any) => {
    console.log(params);
    await get("products", params).then(
      (res) => {
        setProductList(res.data);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const handleSearchDebounce = debounce((value: any) => {
    if (value.length > 0) {
      getProductsByCategory(value);
    } else {
      getAllProducts();
    }
  });

  const getProductsByCategory = async (value?: any) => {
    await get(`products/category/${value}`).then(
      (res) => {
        setProductList(res.data);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <Box display="flex" gap={4}>
      <Box
        width={"100%"}
        maxWidth={252}
        flexGrow={1}
        display={{ xs: "none", sm: "block" }}
      >
        <Filters
          handleSort={(value: string) => getAllProducts({ sort: value })}
          handleSearch={(value: string) => handleSearchDebounce(value)}
        />
      </Box>
      <Divider orientation="vertical" flexItem />
      {productList && (
        <Box
          display={"flex"}
          justifyContent={"flex-start"}
          gap={4}
          flexWrap={"wrap"}
        >
          {productList.map((item: any, index: number) => (
            <Box key={index}>
              <ListingCard
                img={item.image}
                productName={item.title}
                productPrice={item.price}
              />
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Home;

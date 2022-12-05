import React, { useState, useEffect } from "react";
import { Box, Divider, Skeleton, Theme } from "@mui/material";
import { Filters } from "./inc/filters";
import { get } from "src/config/axiosClient";
import { ListingCard } from "@/components/ui-components/common/cards/listing-card";
import { debounce } from "@/utils/dataModifiers";
import Link from "next/link";
import BackdropLoader from "@/components/ui-components/common/backdropLoader";

const Home = () => {
  const [productList, setProductList] = useState<any | []>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getAllProducts = async (params?: any) => {
    setLoading(true);
    await get("products", params).then(
      (res) => {
        setProductList(res.data);
        setLoading(false);
      },
      (error) => {
        setLoading(false);
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
    setLoading(true);
    await get(`products/category/${value}`).then(
      (res) => {
        setProductList(res.data);
        setLoading(false);
      },
      (error) => {
        setLoading(false);
      }
    );
  };

  const handleSingleProduct = () => {};

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <Box display={{ xs: "block", sm: "flex" }} gap={4}>
        <Box width={"100%"} maxWidth={{ xs: "100%", sm: 252 }} flexGrow={1}>
          <Filters
            handleSort={(value: string) => getAllProducts({ sort: value })}
            handleSearch={(value: string) => handleSearchDebounce(value)}
          />
        </Box>
        <Divider orientation="vertical" flexItem />
        {productList?.length > 0 ? (
          <Box
            display={"flex"}
            justifyContent={"flex-start"}
            gap={4}
            flexWrap={"wrap"}
          >
            {productList.map((item: any, index: number) => (
              <Box key={index}>
                <Link href={`/product/${item.id}`} legacyBehavior>
                  <ListingCard productDetails={item} />
                </Link>
              </Box>
            ))}
          </Box>
        ) : (
          <Skeleton variant="rectangular" width={"100%"} height={200} />
        )}
      </Box>
      <BackdropLoader open={loading} />
    </>
  );
};

export default Home;

import React, { useState, useEffect } from "react";
import { Box, Divider, Skeleton } from "@mui/material";
import { Filters } from "./inc/filters";
import { get } from "src/config/axiosClient";
import { ListingCard } from "@/components/ui-components/common/cards/listing-card";
import { debounce } from "@/utils/dataModifiers";
import Link from "next/link";
import BackdropLoader from "@/components/ui-components/common/backdropLoader";
import { useRouter } from "next/router";
import { NextPage } from "next";
import { useUserAuth } from "src/context/ContextProvider";

interface Props {
  query?: any;
}

const Home: NextPage<Props> = ({ query }) => {
  const router = useRouter();
  const [productList, setProductList] = useState<any | []>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { GlobalDetails, user }: any = useUserAuth();

  const getAllProducts = async (value: any) => {
    setLoading(true);
    await get("products", { sort: value }).then(
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
      getAllProducts(router.query.sortby);
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

  const handleSort = (value: string) => {
    router.replace(`${router.pathname}?sortby=${value}`);
    getAllProducts(value);
  };

  const handleClearFilters = () => {
    router.replace(`${router.pathname}`);
    getAllProducts("");
  };

  useEffect(() => {
    getAllProducts(router.query.sortby);
  }, [router.query.sortby]);

  const handleUserCartPrefillDetails = () => {
    if (localStorage.getItem("user")) {
      let savedUserData = localStorage.getItem("user");
      let parsedData = JSON.parse(savedUserData || "");
      if (user.email == parsedData.email) {
        GlobalDetails.dispatch({
          type: "cart-details",
          value: parsedData.cartData,
        });
      }
    }
  };

  useEffect(() => {
    handleUserCartPrefillDetails();
  }, []);

  return (
    <>
      <Box display={{ xs: "block", sm: "flex" }} gap={4}>
        <Box width={"100%"} maxWidth={{ xs: "100%", sm: 252 }} flexGrow={1}>
          <Filters
            handleSort={handleSort}
            handleSearch={(value: string) => handleSearchDebounce(value)}
            clearFilters={handleClearFilters}
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
              <Link href={`/product/${item.id}`} legacyBehavior key={index}>
                <Box>
                  <ListingCard productDetails={item} />
                </Box>
              </Link>
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

Home.getInitialProps = async ({ query }) => {
  return { query };
};

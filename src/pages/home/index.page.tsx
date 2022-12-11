import React, { useState, useEffect } from "react";
import { Box, Divider, Skeleton, Grid } from "@mui/material";
import { Filters } from "./inc/filters";
import { get } from "src/config/axiosClient";
import { ListingCard } from "@/components/ui-components/common/cards/listing-card";
import {
  debounce,
  FilterProductsByCategory,
  SearchProducts,
} from "@/utils/dataModifiers";
import Link from "next/link";
import BackdropLoader from "@/components/ui-components/common/backdropLoader";
import { useRouter } from "next/router";
import { NextPage } from "next";
import { useContextDetails } from "src/context/ContextProvider";
import ProductDataServices from "../../services/products.services";

interface Props {
  query?: any;
}

const Home: NextPage<Props> = ({ query }) => {
  const router = useRouter();
  const [productList, setProductList] = useState<any | []>([]);
  const [firestoneData, setFirestoneData] = useState<any | []>([]);

  const [loading, setLoading] = useState<boolean>(false);
  const {
    cartState: { cart },
  }: any = useContextDetails();
  // const getAllProducts = async (value: any) => {
  //   setLoading(true);
  //   await get("products", { sort: value }).then(
  //     (res) => {
  //       setProductList(res.data);
  //       setLoading(false);
  //     },
  //     (error) => {
  //       setLoading(false);
  //     }
  //   );
  // };

  // const handleSearchDebounce = debounce((value: any) => {
  //   if (value.length > 0) {
  //     getProductsByCategory(value);
  //   } else {
  //     getAllProducts(router.query.sortby);
  //   }
  // });

  // const getProductsByCategory = async (value?: any) => {
  //   setLoading(true);
  //   await get(`products/category/${value}`).then(
  //     (res) => {
  //       setProductList(res.data);
  //       setLoading(false);
  //     },
  //     (error) => {
  //       setLoading(false);
  //     }
  //   );
  // };

  // const handleSort = (value: string) => {
  //   router.replace(`${router.pathname}?sortby=${value}`);
  //   getAllProducts(value);
  // };

  // const handleClearFilters = () => {
  //   router.replace(`${router.pathname}`);
  //   getAllProducts("");
  // };

  // useEffect(() => {
  //   getAllProducts(router.query.sortby);
  // }, [router.query.sortby]);

  const handleClearFilters = () => {
    router.replace(`${router.pathname}`);
    getProductsFirebase("all");
  };

  const handleFilterByCategory = (category: string) => {
    if (router.query.brand) {
      router.replace(
        `${router.pathname}?category=${category}&brand=${router.query.brand}`
      );
    } else {
      router.replace(`${router.pathname}?category=${category}`);
    }
  };

  const handleFilterByBrand = (brand: string) => {
    if (router.query.category) {
      router.replace(
        `${router.pathname}?category=${router.query.category}&brand=${brand}`
      );
    } else {
      router.replace(`${router.pathname}?brand=${brand}`);
    }
  };

  const handleSearchDebounce = debounce((value: any) => {
    setLoading(true);
    if (value.length > 0) {
      setFirestoneData(SearchProducts(firestoneData, value));
    } else {
      getProductsFirebase("all");
    }
    setLoading(false);
  });

  const getProductsFirebase = async (category: any) => {
    setLoading(true);
    const shoes = await ProductDataServices.getProducts("shoes");
    const shoesArr = shoes.docs.map((doc: any) => ({
      ...doc.data(),
      id: doc.id,
    }));

    const clothes = await ProductDataServices.getProducts("clothes");
    const clothesArr = clothes.docs.map((doc: any) => ({
      ...doc.data(),
      id: doc.id,
    }));

    const accessories = await ProductDataServices.getProducts("Accessories");
    const accessoriesArr = accessories.docs.map((doc: any) => ({
      ...doc.data(),
      id: doc.id,
    }));

    const watches = await ProductDataServices.getProducts("watches");
    const watchesArr = watches.docs.map((doc: any) => ({
      ...doc.data(),
      id: doc.id,
    }));

    const allProducts = [
      ...shoesArr,
      ...clothesArr,
      ...accessoriesArr,
      ...watchesArr,
    ];

    if (category == "all") {
      setFirestoneData(allProducts);
    } else if (category == "shoes") {
      setFirestoneData(shoesArr);
    } else if (category == "clothes") {
      setFirestoneData(clothesArr);
    } else if (category == "watches") {
      setFirestoneData(watchesArr);
    } else if (category == "accessories") {
      setFirestoneData(accessoriesArr);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (router.query.category) {
      getProductsFirebase(router.query.category);
    } else {
      getProductsFirebase("all");
    }
  }, [router.query]);

  return (
    <>
      <Box display={{ xs: "block", sm: "flex" }} gap={4} mb={4}>
        <Box width={"100%"} maxWidth={{ xs: "100%", sm: 252 }} flexGrow={1}>
          <Filters
            handleCategory={handleFilterByCategory}
            handleSearch={(value: string) => handleSearchDebounce(value)}
            clearFilters={handleClearFilters}
            handleBrand={handleFilterByBrand}
          />
        </Box>
        <Divider orientation="vertical" flexItem sx={{ bgcolor: "#FAEAB1" }} />
        {/* {productList?.length > 0 ? (
          <Grid container spacing={2}>
            {productList.map((item: any, index: number) => (
              <Link href={`/product/${item.id}`} legacyBehavior key={index}>
                <Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
                  <ListingCard productDetails={item} />
                </Grid>
              </Link>
            ))}
          </Grid>
        ) : (
          <Skeleton variant="rectangular" width={"100%"} height={200} />
        )} */}
        {firestoneData.length > 0 ? (
          <Grid container spacing={2}>
            {firestoneData.map((item: any, index: number) => (
              <Link
                href={`/product/${item.id}?collection=${item.category}`}
                legacyBehavior
                key={index}
              >
                <Grid item xs={6} sm={6} md={4} lg={3} xl={2} key={index}>
                  <ListingCard productDetails={item} />
                </Grid>
              </Link>
            ))}
          </Grid>
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

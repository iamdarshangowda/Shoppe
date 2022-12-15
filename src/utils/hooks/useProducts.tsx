import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import ProductDataServices from "../../services/products.services";
import { debounce, SearchProducts } from "../dataModifiers";

interface ProductsProps extends React.FunctionComponent {
  searchValue?: string;
}

export const useProducts = (searchValue: ProductsProps) => {
  const router = useRouter();

  const [loading, setLoading] = useState<boolean>(false);
  const [firestoneData, setFirestoneData] = useState<any[]>([]);

  const handleSearchDebounce = debounce((value: any) => {
    if (value?.length > 0) {
      setLoading(true);
      setFirestoneData(SearchProducts(firestoneData, value));
      setLoading(false);
    } else {
      setLoading(true);
      getProductsByRouteCheck();
      setLoading(false);
    }
  });

  const getProductsFirebase = async (category: any, query?: any) => {
    setLoading(true);
    const shoes = await ProductDataServices.getProducts("shoes", query);
    const shoesArr = shoes.docs.map((doc: any) => ({
      ...doc.data(),
      id: doc.id,
    }));

    const clothes = await ProductDataServices.getProducts("clothes", query);
    const clothesArr = clothes.docs.map((doc: any) => ({
      ...doc.data(),
      id: doc.id,
    }));

    const accessories = await ProductDataServices.getProducts(
      "Accessories",
      query
    );
    const accessoriesArr = accessories.docs.map((doc: any) => ({
      ...doc.data(),
      id: doc.id,
    }));

    const watches = await ProductDataServices.getProducts("watches", query);
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

  const getProductsByRouteCheck = () => {
    if (router.query.category && router.query.brand) {
      getProductsFirebase(router.query.category, {
        type: "brand",
        key: router.query.brand,
      });
    } else if (router.query.brand) {
      getProductsFirebase("all", { type: "brand", key: router.query.brand });
    } else if (router.query.category) {
      getProductsFirebase(router.query.category);
    } else {
      getProductsFirebase("all");
    }
  };

  useEffect(() => {
    getProductsByRouteCheck();
  }, [router.query]);

  useEffect(() => {
    handleSearchDebounce(searchValue);
  }, [searchValue]);

  return { firestoneData, loading };
};

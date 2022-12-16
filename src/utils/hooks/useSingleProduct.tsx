import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import ProductDataServices from "../../services/products.services";

export const useSingleProduct = () => {
  const router = useRouter();
  const [firestoneSingleData, setFirestoneSingleData] = useState<any | {}>({});
  const [loading, setLoading] = useState<boolean>(false);

  const getSingleFirebaseProduct = async (collection: any, id: any) => {
    setLoading(true);
    const data: any = await ProductDataServices.getSingleProduct(
      collection,
      id
    );
    setFirestoneSingleData(data.data());
    setLoading(false);
  };

  useEffect(() => {
    getSingleFirebaseProduct(router.query.collection, router.query.id);
  }, [router.query]);

  return { firestoneSingleData, loading };
};

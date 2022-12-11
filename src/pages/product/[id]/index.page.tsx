import { SnackbarModal } from "@/components/ui-components/snackbar";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { get } from "src/config/axiosClient";
import { Container } from "@mui/material";
import BackdropLoader from "@/components/ui-components/common/backdropLoader";
import { NextPage } from "next";
import { useContextDetails } from "src/context/ContextProvider";
import { SingleProductView } from "../inc/singleProductView";
import ProductDataServices from "../../../services/products.services";
import { PricerWithCommas } from "@/utils/dataModifiers";

interface Props {
  query?: any;
}

const SingleProduct: NextPage<Props> = ({ query }) => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [rating, setRating] = useState<any>(0);
  const [openSnackModal, setOpenSnackModal] = useState<boolean>(false);
  const [firestoneSingleData, setFirestoneSingleData] = useState<any | {}>({});
  const [productDetails, setProductDetails] = useState<any | {}>({
    size: "",
    color: "",
    qty: 0,
    id: "",
  });
  const [snackText, setSnackText] = useState<any>("");
  const {
    cartState: { cart },
    cartDispatch,
    user,
  }: any = useContextDetails();
  const [cartCount, setCartCount] = useState<number>(0);

  // const [productDetails, setProductDetails] = useState<any | {}>({});
  //  const [snackText, setSnackText] = useState<any>("");
  // const getSingleProductDetail = async (id: any) => {
  //   setSnackText("");
  //   setLoading(true);
  //   await get(`products/${id}`).then(
  //     (res) => {
  //       setProductDetails(res.data);
  //       setRating(res.data?.rating?.rate);
  //       setLoading(false);
  //     },
  //     (error) => {
  //       setSnackText(error.message);
  //       setOpenSnackModal(true);
  //       setLoading(false);
  //     }
  //   );
  // };

  // useEffect(() => {
  //   getSingleProductDetail(query?.id);
  // }, [query?.id]);

  const handleProductCount = (value: number) => {
    setCartCount(value);
  };

  const handleAddtoCart = () => {
    productDetails.id = router.query.id;
    cartDispatch({
      type: "ADD-TO-CART",
      payload: firestoneSingleData,
      cartUpdate: productDetails,
    });
  };
  const handleRemovefromCart = () => {
    cartDispatch({
      type: "REMOVE-FROM-CART",
      payload: firestoneSingleData,
    });
    setCartCount(0);
  };

  const handleChange = (type: string, value: any) => {
    setProductDetails((prev: any) => ({ ...prev, [type]: value }));
  };

  const handleBack = () => {
    router.back();
  };

  const handleSetCartPrefill = () => {
    const currentProduct = cart.filter(
      (item: any) => item.id == router.query.id
    );
    if (currentProduct.length) {
      setProductDetails(currentProduct?.[0]);
    }
  };

  useEffect(() => {
    handleSetCartPrefill();
  }, []);

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
    getSingleFirebaseProduct(query.collection, query.id);
  }, [query?.id]);

  return (
    <>
      <SnackbarModal
        open={openSnackModal}
        isError={true}
        text={snackText}
        handleClose={() => setOpenSnackModal(false)}
      />
      <Container maxWidth="xl">
        <SingleProductView
          productDetails={firestoneSingleData}
          handleBack={handleBack}
          rating={rating}
          prefillData={productDetails}
          handleAddtoCart={handleAddtoCart}
          handleRemovefromCart={handleRemovefromCart}
          handleChange={handleChange}
        />
      </Container>
      <BackdropLoader open={loading} />
    </>
  );
};

export default SingleProduct;

SingleProduct.getInitialProps = ({ query }) => {
  return { query };
};

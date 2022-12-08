import { SnackbarModal } from "@/components/ui-components/snackbar";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { get } from "src/config/axiosClient";
import { Container } from "@mui/material";
import BackdropLoader from "@/components/ui-components/common/backdropLoader";
import { NextPage } from "next";
import { useContextDetails } from "src/context/ContextProvider";
import { SingleProductView } from "../inc/singleProductView";

interface Props {
  query?: any;
}

const SingleProduct: NextPage<Props> = ({ query }) => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [rating, setRating] = useState<any>(0);
  const [openSnackModal, setOpenSnackModal] = useState<boolean>(false);
  const [productDetails, setProductDetails] = useState<any | {}>({});
  const [snackText, setSnackText] = useState<any>("");
  const {
    cartState: { cart },
    cartDispatch,
    user,
  }: any = useContextDetails();
  const [cartCount, setCartCount] = useState<number>(0);

  const getSingleProductDetail = async (id: any) => {
    setSnackText("");
    setLoading(true);
    await get(`products/${id}`).then(
      (res) => {
        setProductDetails(res.data);
        setRating(res.data?.rating?.rate);
        setLoading(false);
      },
      (error) => {
        setSnackText(error.message);
        setOpenSnackModal(true);
        setLoading(false);
      }
    );
  };

  const handleProductCount = (value: number) => {
    setCartCount(value);
  };

  const handleAddtoCart = () => {
    cartDispatch({
      type: "ADD-TO-CART",
      payload: productDetails,
      qty: cartCount,
    });
  };

  const handleRemovefromCart = () => {
    cartDispatch({
      type: "REMOVE-FROM-CART",
      payload: productDetails,
    });
    setCartCount(0);
  };

  const handleBack = () => {
    router.back();
  };
  useEffect(() => {
    getSingleProductDetail(query?.id);
  }, [query?.id]);

  const handleSetCartPrefill = () => {
    const currentProduct = cart.filter(
      (item: any) => item.id == router.query.id
    );

    if (currentProduct.length) {
      setCartCount(currentProduct[0].qty);
    }
  };

  useEffect(() => {
    handleSetCartPrefill();
  }, []);

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
          productDetails={productDetails}
          handleBack={handleBack}
          rating={rating}
          handleProductCount={handleProductCount}
          cartCount={cartCount}
          handleAddtoCart={handleAddtoCart}
          handleRemovefromCart={handleRemovefromCart}
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

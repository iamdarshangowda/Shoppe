import { SnackbarModal } from "@/components/ui-components/snackbar";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import BackdropLoader from "@/components/ui-components/common/backdropLoader";
import { NextPage } from "next";
import { useContextDetails } from "src/context/ContextProvider";
import { SingleProductView } from "../inc/singleProductView";
import { useSingleProduct } from "@/utils/hooks/useSingleProduct";
import { UpdateUserCart } from "src/services/users.services";

interface Props {
  query?: any;
}

const SingleProduct: NextPage<Props> = ({ query }) => {
  const router = useRouter();
  const { firestoneSingleData, loading } = useSingleProduct();
  const [snackbarDetails, setSnackbarDetails] = useState<any | {}>({
    isError: false,
    openModal: false,
    text: "",
  });
  const [productDetails, setProductDetails] = useState<any | {}>({
    size: "",
    color: "",
    qty: 0,
    id: "",
  });
  const {
    cartState: { cart },
    cartDispatch,
    user,
  }: any = useContextDetails();

  //update if else check
  const handleAddtoCart = () => {
    if (user) {
      if (!productDetails.size) {
        setSnackbarDetails({
          openModal: true,
          isError: true,
          text: "Please select Size",
        });
      } else if (!productDetails.color) {
        setSnackbarDetails({
          openModal: true,
          isError: true,
          text: "Please select Color",
        });
      } else if (productDetails.qty <= 0) {
        setSnackbarDetails({
          openModal: true,
          isError: true,
          text: "Add Quantity",
        });
      } else {
        productDetails.id = router.query.id;
        const fireStoneData = { ...firestoneSingleData };
        fireStoneData.id = router.query.id;
        cartDispatch({
          type: "ADD-TO-CART",
          payload: fireStoneData,
          cartUpdate: productDetails,
        });
      }
    } else {
      setSnackbarDetails({
        openModal: true,
        isError: true,
        text: "Please Login to add Products",
      });
    }
  };

  const handleRemovefromCart = () => {
    const productDetails = { ...firestoneSingleData };
    productDetails.id = router.query.id;
    cartDispatch({
      type: "REMOVE-FROM-CART",
      payload: productDetails,
    });
    setProductDetails((prev: any) => ({ ...prev, qty: 0 }));
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

  useEffect(() => {
    if (user?.uid) UpdateUserCart(cart, user.uid);
  }, [cart]);

  return (
    <>
      <SnackbarModal
        open={snackbarDetails.openModal}
        isError={snackbarDetails.isError}
        text={snackbarDetails.text}
        handleClose={() =>
          setSnackbarDetails((prev: any) => ({ ...prev, openModal: false }))
        }
      />
      <Container maxWidth="xl">
        <SingleProductView
          productDetails={firestoneSingleData}
          handleBack={handleBack}
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

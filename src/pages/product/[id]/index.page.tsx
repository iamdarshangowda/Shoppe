import { SnackbarModal } from "@/components/ui-components/snackbar";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { get } from "src/config/axiosClient";
import {
  Box,
  Grid,
  Typography,
  Container,
  Rating,
  Divider,
  Theme,
} from "@mui/material";
import BackdropLoader from "@/components/ui-components/common/backdropLoader";
import { NextPage } from "next";
import GroupedButtons from "@/components/ui-components/common/buttons/grouped-button";
import CustomButton from "@/components/ui-components/common/buttons/custom-button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useUserAuth } from "src/context/ContextProvider";
import { validateHeaderValue } from "http";

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
  const { GlobalDetails, user }: any = useUserAuth();
  const [productCart, setProductCart] = useState<any | {}>({
    id: router.query.id,
    count: "",
  });
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
    setProductCart((prev: any) => {
      return { ...prev, count: value };
    });
  };

  const handleAddtoCart = () => {
    let tempArr: any = [...GlobalDetails.state.cartDetails];
    let otherItems = tempArr.filter((item: any) => item.id !== router.query.id);
    GlobalDetails.dispatch({
      type: "cart-details",
      value: [...otherItems, productCart],
    });
    handleUserCart();
  };

  const handleUserCart = () => {
    if (user.email) {
      localStorage.setItem(
        "user",
        JSON.stringify({
          email: user.email,
          cartData: GlobalDetails.state.cartDetails,
        })
      );
    }
  };

  const handleBack = () => {
    router.back();
  };
  useEffect(() => {
    getSingleProductDetail(query?.id);
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
        <Grid container rowSpacing={2}>
          <Grid item xs={12}>
            <CustomButton
              label="back"
              onClick={handleBack}
              height={"38px"}
              sx={{ maxWidth: "90px" }}
              icon={<ArrowBackIosIcon />}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box display="flex" justifyContent="center">
              <img src={productDetails.image} alt="" width={300} />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box display="flex" flexDirection="column" gap={2}>
              <Typography
                fontSize={26}
                fontWeight={400}
                color={(theme: Theme) => theme.palette.primary.main}
              >
                {productDetails?.title}
              </Typography>
              <Typography fontSize={22} fontWeight={400} color="#A18A68">
                ${productDetails?.price}
              </Typography>
              <Typography
                fontSize={16}
                fontWeight={400}
                color={(theme: Theme) => theme.palette.primary.light}
              >
                {productDetails?.description}
              </Typography>
              <Box display="flex" gap={2}>
                <Rating value={rating} readOnly />
                <Divider orientation="vertical" flexItem />
                <Typography>
                  {productDetails?.rating?.count} customer review
                </Typography>
              </Box>
              <Box
                display="flex"
                gap={3}
                justifyContent="space-between"
                mt={3}
                flexDirection={{ xs: "column", sm: "row" }}
              >
                <GroupedButtons handleChange={handleProductCount} />
                <CustomButton label="ADD TO CART" onClick={handleAddtoCart} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <BackdropLoader open={loading} />
    </>
  );
};

export default SingleProduct;

SingleProduct.getInitialProps = ({ query }) => {
  return { query };
};

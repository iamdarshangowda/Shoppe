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

  const getSingleProductDetail = async (id: any) => {
    setSnackText("");
    await get(`products/${id}`).then(
      (res) => {
        setProductDetails(res.data);
        setRating(res.data?.rating?.rate);
      },
      (error) => {
        setSnackText(error.message);
        setOpenSnackModal(true);
      }
    );
  };

  const handleProductCount = (value: number) => {
    console.log(value);
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
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <img src={productDetails.image} alt="" width={300} />
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
                {productDetails?.price}
              </Typography>
              <Typography
                fontSize={20}
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
              <GroupedButtons handleChange={handleProductCount} />
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

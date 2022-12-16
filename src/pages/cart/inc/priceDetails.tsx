import React, { useEffect, useState } from "react";
import { Box, Typography, Theme, Grid, Divider } from "@mui/material";
import CustomButton from "@/components/ui-components/common/buttons/custom-button";
import { PricerWithCommas } from "@/utils/dataModifiers";
import { GetUserDocument } from "src/services/users.services";
import { useRouter } from "next/router";
import { SnackbarModal } from "@/components/ui-components/snackbar";

interface Props {
  subTotal: any;
  isLogin: any;
  handleLogin: () => void;
  user: any;
}
export const PriceDetails: React.FunctionComponent<Props> = ({
  subTotal,
  isLogin,
  handleLogin,
  user,
}) => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [userAdrressData, setUserAddressData] = useState<any | {}>({
    name: "",
    phone: "",
    pincode: "",
    city: "",
    street: "",
    landmark: "",
  });
  const [isDetails, setIsDetails] = useState<boolean>(true);
  const [snackbarDetails, setSnackbarDetails] = useState<any | {}>({
    isError: false,
    openModal: false,
    text: "",
  });

  const handleCheckOut = () => {
    isDetails
      ? router.push("/payments")
      : setSnackbarDetails({
          openModal: true,
          isError: true,
          text: "Update Shipping details",
        });
  };

  const getUserPrefillData = () => {
    setLoading(true);
    GetUserDocument(user).then(
      (res: any) => {
        if (res?.address) {
          Object.keys(res.address).forEach((item: any) => {
            if (
              res?.address[item] === "" ||
              !res?.address[item].length ||
              res?.address[item] === null ||
              res?.address[item] === undefined
            ) {
              setIsDetails(false);
            }
          });
          setUserAddressData({
            name: res.address?.name,
            phone: res.address?.phone,
            pincode: res.address?.pincode,
            city: res.address?.city,
            street: res.address?.street,
            landmark: res.address?.landmark,
          });
        }

        setLoading(false);
      },
      (error: any) => {
        setLoading(true);
      }
    );
  };

  useEffect(() => {
    if (user.uid) getUserPrefillData();
  }, [user]);

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
      <Grid container sx={{ px: 3 }} spacing={2}>
        <Grid item xs={4}>
          <Typography
            my={3}
            fontSize="1em"
            fontWeight={400}
            color={(theme: Theme) => theme.palette.secondary.main}
          >
            SUBTOTAL
          </Typography>
          {isLogin?.email && (
            <Typography
              my={3}
              fontSize="1em"
              fontWeight={400}
              color={(theme: Theme) => theme.palette.secondary.main}
            >
              SHIPPING
            </Typography>
          )}
        </Grid>
        <Grid item xs={8}>
          <Typography
            my={3}
            fontSize="1em"
            fontWeight={500}
            color={(theme: Theme) => theme.palette.primary.main}
          >
            INR {PricerWithCommas(subTotal.toFixed(2))}
          </Typography>
          {isLogin?.email ? (
            isDetails ? (
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography
                    fontSize="0.9em"
                    fontWeight={600}
                    color={(theme: Theme) => theme.palette.secondary.main}
                  >
                    Name:
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    fontSize="0.9em"
                    fontWeight={600}
                    color={(theme: Theme) => theme.palette.primary.main}
                  >
                    {userAdrressData?.name}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    fontSize="0.9em"
                    fontWeight={600}
                    color={(theme: Theme) => theme.palette.secondary.main}
                  >
                    Phone:
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    fontSize="0.9em"
                    fontWeight={600}
                    color={(theme: Theme) => theme.palette.primary.main}
                  >
                    {userAdrressData?.phone}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    fontSize="0.9em"
                    fontWeight={600}
                    color={(theme: Theme) => theme.palette.secondary.main}
                  >
                    Pincode:
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    fontSize="0.9em"
                    fontWeight={600}
                    color={(theme: Theme) => theme.palette.primary.main}
                  >
                    {userAdrressData?.pincode}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    fontSize="0.9em"
                    fontWeight={600}
                    color={(theme: Theme) => theme.palette.secondary.main}
                  >
                    City:
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    fontSize="0.9em"
                    fontWeight={600}
                    color={(theme: Theme) => theme.palette.primary.main}
                  >
                    {userAdrressData?.city}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    fontSize="0.9em"
                    fontWeight={600}
                    color={(theme: Theme) => theme.palette.secondary.main}
                  >
                    Landmark:
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    fontSize="0.9em"
                    fontWeight={600}
                    color={(theme: Theme) => theme.palette.primary.main}
                  >
                    {userAdrressData?.landmark}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    fontSize="0.9em"
                    fontWeight={600}
                    color={(theme: Theme) => theme.palette.secondary.main}
                  >
                    Address (Area and Street):
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    fontSize="0.9em"
                    fontWeight={600}
                    color={(theme: Theme) => theme.palette.primary.main}
                    maxWidth={250}
                  >
                    {userAdrressData?.street}
                  </Typography>
                </Grid>
              </Grid>
            ) : (
              <Typography
                my={3}
                fontSize="1em"
                fontWeight={400}
                color={(theme: Theme) => theme.palette.primary.main}
              >
                Shipping costs will be calculated once you have provided
                address.
                <CustomButton
                  label="Update Address"
                  sx={{ maxWidth: "150px", height: "38px", mt: 1 }}
                  onClick={() => {
                    router.push("/profile?tab=address");
                  }}
                />
              </Typography>
            )
          ) : null}
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={6}>
          <Typography
            my={3}
            fontSize="1em"
            fontWeight={600}
            color={(theme: Theme) => theme.palette.primary.main}
          >
            TOTAL <Typography fontSize="0.7em">(incl. GST)</Typography>
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography
            my={3}
            fontSize="1em"
            fontWeight={600}
            color={(theme: Theme) => theme.palette.primary.main}
          >
            INR{" "}
            {isDetails
              ? PricerWithCommas((subTotal + subTotal * (9 / 100)).toFixed(2))
              : PricerWithCommas(subTotal.toFixed(2))}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          {isLogin?.email ? (
            <CustomButton label="Checkout" onClick={handleCheckOut} />
          ) : (
            <CustomButton label="Login to Checkout" onClick={handleLogin} />
          )}
        </Grid>
      </Grid>
    </>
  );
};

import CustomButton from "@/components/ui-components/common/buttons/custom-button";
import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

const Payments = () => {
  const router = useRouter();

  const handleShopMore = () => {
    router.push("/home");
  };

  return (
    <Box
      display="flex"
      gap={2}
      flexDirection={"column"}
      justifyContent="center"
      alignItems="center"
      bgcolor="#FAEAB1"
      borderRadius={"8px"}
      maxWidth={500}
      mx="auto"
      p={2}
    >
      <Typography fontSize="1.75em" fontWeight={600}>
        Order Placed Successfully
      </Typography>
      <Typography fontSize="1em" fontWeight={500}>
        Thanks for shopping with us.
      </Typography>
      <CustomButton
        label="Shop More"
        onClick={handleShopMore}
        sx={{ maxWidth: "150px" }}
      />
    </Box>
  );
};

export default Payments;

import React from "react";
import { OrderTable } from "./ordersTable";
import { Box } from "@mui/material";

export const OrdersConatiner = () => {
  return (
    <Box
      width="100%"
      my={4}
      display="flex"
      justifyContent={"center"}
      flexDirection="column"
      alignItems="center"
    >
      <Box
        maxWidth={600}
        width="100%"
        p={2}
        bgcolor="#FAEAB1"
        borderRadius="8px"
        border="3px solid #E5BA73"
      >
        <OrderTable />
      </Box>
    </Box>
  );
};

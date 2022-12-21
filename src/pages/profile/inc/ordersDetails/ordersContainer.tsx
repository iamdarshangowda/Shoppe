import React from "react";
import { OrderTable } from "./ordersTable";
import { Box } from "@mui/material";
import usePrevOrders from "@/utils/customHooks/usePrevOrders";

interface Props {
  prevOrders: any[];
}
export const OrdersConatiner: React.FunctionComponent<Props> = ({
  prevOrders,
}) => {
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
        maxWidth={700}
        width="100%"
        p={2}
        bgcolor="#FAEAB1"
        borderRadius="8px"
        border="3px solid #E5BA73"
      >
        <OrderTable prevOrders={prevOrders} />
      </Box>
    </Box>
  );
};

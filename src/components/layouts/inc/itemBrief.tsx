import React from "react";
import { Box, Typography, Divider } from "@mui/material";

interface Props {
  item: { image: string; qty: number };
}

export const ItemBrief: React.FunctionComponent<Props> = ({ item }) => {
  return (
    <Box>
      <Box
        display="flex"
        justifyContent={"space-between"}
        alignItems={"center"}
        gap={3}
        my={1}
      >
        <img src={item?.image} width={50} alt="" />{" "}
        <Typography fontWeight={600}>x {item?.qty}</Typography>
      </Box>
      <Divider />
    </Box>
  );
};

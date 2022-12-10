import React from "react";
import { Box, Typography } from "@mui/material";

interface Props {
  text: string;
}
export const EmptyStateCard: React.FunctionComponent<Props> = ({ text }) => {
  return (
    <Box
      width="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgcolor="#f2f2f2"
    >
      <Typography fontSize={18} p={2}>
        {text}
      </Typography>
    </Box>
  );
};

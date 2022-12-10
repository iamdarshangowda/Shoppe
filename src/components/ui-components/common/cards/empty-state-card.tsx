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
      bgcolor="#FAEAB1"
    >
      <Typography
        color="#AC4425"
        fontSize="0.95em"
        fontWeight={500}
        px={2}
        py={1}
      >
        {text}
      </Typography>
    </Box>
  );
};

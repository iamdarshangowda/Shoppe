import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import { Box, Theme } from "@mui/material";

interface Props {
  sx: any;
}

export const CircularEditIcon: React.FunctionComponent<Props> = ({ sx }) => {
  return (
    <Box
      sx={{
        width: "29px",
        height: "29px",
        position: "absolute",
        background: (theme: Theme) => theme.palette.primary.main,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ...sx,
      }}
    >
      <EditIcon
        fontSize="small"
        sx={{
          width: 14,
          height: 14,
          color: "#fff",
        }}
      />
    </Box>
  );
};

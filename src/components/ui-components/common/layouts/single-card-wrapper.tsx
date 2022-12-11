import React from "react";
import { Box } from "@mui/material";

interface Props {
  children?: any;
}

export const SingleCardWrapper: React.FunctionComponent<Props> = ({
  children,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box mb={{ xs: 3, sm: 0 }}>
        <img
          src="/shoppe.png"
          alt=""
          width={200}
          style={{ borderRadius: "10px" }}
        />
      </Box>
      <Box
        maxWidth="400px"
        width="100%"
        boxShadow={"0px 1px 8px rgba(0, 0, 0, 0.04)"}
        border={"1px solid #EFEFEF"}
        borderRadius={2}
        px={3}
        py={2}
      >
        {children}
      </Box>
    </Box>
  );
};

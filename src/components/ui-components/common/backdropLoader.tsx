import { Backdrop } from "@mui/material";
import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

interface BackdropLoaderProps {
  open: boolean;
}

const BackdropLoader: React.FunctionComponent<BackdropLoaderProps> = ({
  open,
}) => {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default BackdropLoader;

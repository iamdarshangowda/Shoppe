import { useRouter } from "next/router";
import React from "react";
import { Box } from "@mui/material";
import { Topbar } from "./topbar";

interface Props {
  children: any;
}

export const Layout: React.FunctionComponent<Props> = ({ children }) => {
  const router = useRouter();
  return (
    <Box px={2}>
      <Box>
        {router.pathname == "/" ||
        router.pathname == "/signin" ||
        router.pathname == "/signup" ||
        router.pathname == "/forgotpassword" ? null : (
          <Topbar />
        )}
      </Box>
      <Box component="main" width="100%" mt={3}>
        {children}
      </Box>
    </Box>
  );
};

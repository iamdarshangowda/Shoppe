import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { Topbar } from "./topbar";
import { useContextDetails } from "src/context/ContextProvider";
import { GetUserDocument } from "src/services/users.services";

interface Props {
  children: any;
}

export const Layout: React.FunctionComponent<Props> = ({ children }) => {
  const router = useRouter();
  const { cartDispatch, user }: any = useContextDetails();

  const getCartPrefillDetails = async () => {
    await GetUserDocument(user).then((res: any) => {
      cartDispatch({
        type: "REPLACE-ALL-ITEMS",
        payload: res.cart,
      });
    });
  };

  useEffect(() => {
    if (user.uid) getCartPrefillDetails();
  }, [user]);

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

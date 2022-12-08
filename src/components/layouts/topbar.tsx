import React from "react";
import { Box, Divider } from "@mui/material";
import { useContextDetails } from "src/context/ContextProvider";
import { useRouter } from "next/router";
import Link from "next/link";
import { CartPopover } from "./inc/cartPopover";
import { ProfileMenu } from "./inc/profileMenu";
import CustomButton from "../ui-components/common/buttons/custom-button";

export const Topbar = () => {
  const {
    LogOut,
    user,
    cartState: { cart },
    cartDispatch,
  }: any = useContextDetails();
  const router = useRouter();

  const handleLogOut = async () => {
    await LogOut().then(
      (res: any) => {
        router.push("/signin");
        console.log("logout", res);
      },
      (error: any) => {
        console.log(error.message);
      }
    );
  };

  const handleLogIn = () => {
    router.push("/signin");
  };

  const handleCheckout = () => {
    router.push("/cart");
  };

  const handleClearCart = () => {
    cartDispatch({
      type: "REMOVE-ALL-ITEMS",
    });
  };

  const cartCount = cart.reduce(
    (total: number, current: any) => Number(current.qty) + total,
    0
  );

  const cartTotal = cart.reduce(
    (total: number, current: any) =>
      Number(current.price) * Number(current.qty) + total,
    0
  );

  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        py={1}
        gap={2}
        alignItems={"center"}
      >
        <Box flexGrow={1}>
          <Link href="/home">
            <img src="/logo.gif" alt="" width={180} />
          </Link>
        </Box>
        <Box mr={2}>
          <CartPopover
            cartCount={cartCount}
            cartTotal={cartTotal}
            cart={cart}
            handleCheckout={handleCheckout}
            handleClearCart={handleClearCart}
          />
        </Box>
        <Box sx={{ flexGrow: 0 }} mr={2}>
          {user ? (
            <ProfileMenu
              user={user}
              handleLogOut={handleLogOut}
              handleLogIn={handleLogIn}
            />
          ) : (
            <CustomButton label="Login" height="40px" />
          )}
        </Box>
      </Box>
      <Divider />
    </>
  );
};

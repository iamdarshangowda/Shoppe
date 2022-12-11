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
    if (localStorage.getItem("shoppeusers")) {
      let savedUserData = localStorage.getItem("shoppeusers");
      let parsedData = JSON.parse(savedUserData || "");
      // users = [{email: "", cart: []}]
      let currentUser = parsedData.filter(
        (item: any) => item.email == user.email
      );
      if (currentUser.length) {
        let remaingUser = parsedData.filter(
          (item: any) => item.email !== user.email
        );
        currentUser[0].cart = cart;
        let users: any = [...remaingUser, ...currentUser];
        localStorage.setItem("shoppeusers", JSON.stringify(users));
      } else {
        parsedData.push({ email: user.email, cart: cart });
        localStorage.setItem("shoppeusers", JSON.stringify(parsedData));
      }
    } else {
      let userData = [{ email: user.email, cart: cart }];
      localStorage.setItem("shoppeusers", JSON.stringify(userData));
    }

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

  const handleProfile = () => {
    router.push("/profile?tab=profile");
  };

  const cartCount = cart?.reduce(
    (total: number, current: any) => Number(current.qty) + total,
    0
  );

  const cartTotalPrice = cart?.reduce(
    (total: number, current: any) =>
      Number(current.price) * Number(current.qty) + total,
    0
  );

  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        p={1}
        gap={2}
        alignItems={"center"}
      >
        <Box maxWidth={{ xs: 170, sm: 180 }}>
          <Link href="/home">
            <img
              src="/shoppe.png"
              alt=""
              width="100%"
              style={{ borderRadius: "10px" }}
            />
          </Link>
        </Box>
        <Box display="flex" gap={2} alignItems={"center"}>
          <CartPopover
            cartCount={cartCount}
            cartTotal={cartTotalPrice}
            cart={cart}
            handleCheckout={handleCheckout}
            handleClearCart={handleClearCart}
          />
          {user ? (
            <ProfileMenu
              user={user}
              handleLogOut={handleLogOut}
              handleLogIn={handleLogIn}
              handleProfile={handleProfile}
            />
          ) : (
            <CustomButton label="Login" height="40px" onClick={handleLogIn} />
          )}
        </Box>
      </Box>
      <Divider sx={{ bgcolor: "#FAEAB1" }} />
    </>
  );
};

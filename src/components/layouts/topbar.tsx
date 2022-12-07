import React, { useState } from "react";
import {
  Box,
  Divider,
  Tooltip,
  MenuItem,
  Menu,
  Avatar,
  IconButton,
  Typography,
  Badge,
} from "@mui/material";
import { useContextDetails } from "src/context/ContextProvider";
import { useRouter } from "next/router";
import Link from "next/link";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const Topbar = () => {
  const {
    LogOut,
    user,
    cartState: { cart },
  }: any = useContextDetails();
  const router = useRouter();
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

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
  const cartCount = cart.reduce(
    (total: number, current: any) => Number(current.qty) + total,
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
          <IconButton>
            <Badge badgeContent={cartCount} color="primary">
              <ShoppingCartIcon sx={{ fontSize: "30px" }} />
            </Badge>
          </IconButton>
        </Box>
        <Box sx={{ flexGrow: 0 }} mr={2}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu}>
              <Avatar sx={{ width: 35, height: 35 }} />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "50px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {user && (
              <MenuItem>
                <Typography>Hi, {user?.email}</Typography>
              </MenuItem>
            )}
            {user && <MenuItem onClick={handleLogOut}>Logout</MenuItem>}
            {!user && <MenuItem onClick={handleLogIn}>Login</MenuItem>}
          </Menu>
        </Box>
      </Box>
      <Divider />
    </>
  );
};

import React, { useState } from "react";
import {
  Box,
  Tabs,
  Tab,
  Divider,
  Tooltip,
  MenuItem,
  Menu,
  Avatar,
  IconButton,
  Typography,
  Badge,
} from "@mui/material";
import { useUserAuth } from "src/context/ContextProvider";
import { useRouter } from "next/router";
import Link from "next/link";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const Topbar = () => {
  const [value, setValue] = React.useState("one");
  const { LogOut, user, GlobalDetails }: any = useUserAuth();
  const router = useRouter();
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const handleLogOut = async () => {
    GlobalDetails.dispatch({
      type: "cart-details",
      value: [],
    });
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
  const totalCartItem = GlobalDetails.state.cartDetails.reduce(
    (t: any, c: any) => Number(c.count) + t,
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
            <Badge badgeContent={totalCartItem} color="primary">
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

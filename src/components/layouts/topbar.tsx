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
} from "@mui/material";
import { useUserAuth } from "src/context/ContextProvider";
import { useRouter } from "next/router";

export const Topbar = () => {
  const [value, setValue] = React.useState("one");
  const { LogOut }: any = useUserAuth();
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
  return (
    <>
      <Box display={"flex"} justifyContent={"space-between"} py={1} gap={2}>
        <Box flexGrow={1}>
          <img src="/logo.gif" alt="" width={180} />
        </Box>
        <Box>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="wrapped label tabs example"
          >
            <Tab value="one" label="Shop" />
            <Tab value="two" label="Our Story" />
          </Tabs>
        </Box>
        <Box sx={{ flexGrow: 0 }} mr={2}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar sx={{ width: 40, height: 40 }} />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
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
            <MenuItem onClick={handleLogOut}>Logout</MenuItem>
          </Menu>
        </Box>
      </Box>
      <Divider />
    </>
  );
};

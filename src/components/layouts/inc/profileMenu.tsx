import React, { useState } from "react";
import {
  Box,
  Tooltip,
  MenuItem,
  Menu,
  Avatar,
  IconButton,
  Typography,
} from "@mui/material";

interface Props {
  user: any;
  handleLogOut: () => void;
  handleLogIn: () => void;
}

export const ProfileMenu: React.FunctionComponent<Props> = ({
  user,
  handleLogOut,
  handleLogIn,
}) => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <Box>
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
  );
};

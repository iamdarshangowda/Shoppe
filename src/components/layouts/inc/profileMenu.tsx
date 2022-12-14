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
  handleProfile: () => void;
}

export const ProfileMenu: React.FunctionComponent<Props> = ({
  user,
  handleLogOut,
  handleLogIn,
  handleProfile,
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
          <Avatar
            src={"/temp_profile.png"}
            sx={{ width: 40, height: 40, border: "1px solid #E5BA73" }}
          />
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
          <MenuItem
            onClick={() => {
              handleProfile();
              handleCloseUserMenu();
            }}
          >
            <Typography color="#E5BA73" fontSize="0.95em" fontWeight={500}>
              Hi,{" "}
              <Typography
                component="span"
                color="#C58940"
                fontSize="0.95em"
                fontWeight={500}
              >
                {user?.email}
              </Typography>
            </Typography>
          </MenuItem>
        )}
        {user && (
          <MenuItem onClick={handleLogOut}>
            <Typography color="#AC4425" fontSize="0.95em" fontWeight={500}>
              Logout
            </Typography>
          </MenuItem>
        )}
        {!user && <MenuItem onClick={handleLogIn}>Login</MenuItem>}
      </Menu>
    </Box>
  );
};

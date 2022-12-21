import React from "react";
import { Grid, Typography, Box, Theme, Avatar } from "@mui/material";
import { CircularEditIcon } from "@/components/ui-components/common/buttons/edit-icon";

interface Props {
  userData?: any;
}

export const ProfilePhoto: React.FunctionComponent<Props> = ({ userData }) => {
  return (
    <Box
      width={120}
      position="relative"
      mx="auto"
      sx={{ boxShadow: "1px 1px 10px", borderRadius: "50%" }}
    >
      <label htmlFor="photo">
        <input
          type="file"
          id="photo"
          name="photo"
          style={{ display: "none" }}
        />
        <Avatar
          src={"/temp_profile.png"}
          sx={{
            mx: "auto",
            width: "120px",
            height: "120px",
            border: "3px solid #E5BA73",
            "&:hover": {
              cursor: "pointer",
            },
          }}
        />
        <CircularEditIcon
          sx={{
            bottom: 0,
            right: 15,
            "&:hover": {
              cursor: "pointer",
            },
          }}
        />
      </label>
    </Box>
  );
};

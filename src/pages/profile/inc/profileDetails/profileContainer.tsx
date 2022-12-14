import React, { useState } from "react";
import { Grid, IconButton, Box, Theme } from "@mui/material";
import { ProfilePhoto } from "./profilePhoto";
import { ProfileEditForm } from "./profileEditForm";
import { ProfileData } from "./profileData";
import { CircularEditIcon } from "@/components/ui-components/common/buttons/edit-icon";
import CloseIcon from "@mui/icons-material/Close";

interface Props {
  userData?: any;
  handleEventChange: any;
  handleSubmit: () => void;
}

export const ProfileContainer: React.FunctionComponent<Props> = ({
  userData,
  handleEventChange,
  handleSubmit,
}) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const handleProfileEdit = () => {
    setIsEdit(!isEdit);
  };
  return (
    <Box
      width="100%"
      my={4}
      display="flex"
      justifyContent={"center"}
      flexDirection="column"
      alignItems="center"
    >
      <Box>
        <Box my={2}>
          <ProfilePhoto userData={userData} />
        </Box>
        <Box
          p={2}
          bgcolor="#FAEAB1"
          borderRadius="8px"
          border="3px solid #E5BA73"
          position="relative"
        >
          {isEdit ? (
            <>
              <ProfileEditForm
                userData={userData}
                handleEventChange={handleEventChange}
                handleSubmit={() => {
                  handleSubmit();
                  setIsEdit(false);
                }}
              />
              <IconButton
                sx={{ position: "absolute", top: "5px", right: "5px" }}
                onClick={handleProfileEdit}
              >
                <CloseIcon />
              </IconButton>
            </>
          ) : (
            <>
              <CircularEditIcon
                sx={{
                  top: 5,
                  right: 5,
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
                onClick={handleProfileEdit}
              />{" "}
              <ProfileData userData={userData} />
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};

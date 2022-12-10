import React, { useState } from "react";
import { AddressData } from "./addressData";
import { Box, IconButton } from "@mui/material";
import { CircularEditIcon } from "@/components/ui-components/common/buttons/edit-icon";
import CloseIcon from "@mui/icons-material/Close";
import { AddressEditForm } from "./addressEditForm";

export const AddressConatiner = () => {
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const handleAddressEdit = () => {
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
      <Box
        width="100%"
        maxWidth={700}
        p={2}
        bgcolor="#FAEAB1"
        borderRadius="8px"
        border="3px solid #E5BA73"
        position="relative"
      >
        {isEdit ? (
          <>
            <IconButton
              sx={{ position: "absolute", top: "5px", right: "5px" }}
              onClick={handleAddressEdit}
            >
              <CloseIcon />
            </IconButton>
            <AddressEditForm />
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
              onClick={handleAddressEdit}
            />
            <AddressData />
          </>
        )}
      </Box>
    </Box>
  );
};

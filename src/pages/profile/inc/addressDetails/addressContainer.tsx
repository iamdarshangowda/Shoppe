import React, { useState } from "react";
import { AddressData } from "./addressData";
import { Box } from "@mui/material";
import { CircularEditIcon } from "@/components/ui-components/common/buttons/edit-icon";

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
        p={2}
        bgcolor="#FAEAB1"
        borderRadius="8px"
        border="3px solid #E5BA73"
        position="relative"
      >
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
      </Box>
    </Box>
  );
};

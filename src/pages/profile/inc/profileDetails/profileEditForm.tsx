import React from "react";
import { Grid, Typography, Box, Theme } from "@mui/material";
import CustomInput from "@/components/ui-components/common/inputs/custom-input";
import CustomButton from "@/components/ui-components/common/buttons/custom-button";

interface Props {
  userData?: any;
  handleEventChange: any;
  handleSubmit: () => void;
}

export const ProfileEditForm: React.FunctionComponent<Props> = ({
  userData,
  handleEventChange,
  handleSubmit,
}) => {
  return (
    <>
      <Grid container spacing={4} sx={{ maxWidth: "650px", mt: 1 }}>
        <Grid item xs={12} sm={6}>
          <CustomInput
            label="First Name"
            value={userData?.first_name}
            onChange={(value: string) => handleEventChange(value, "first_name")}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomInput
            label="Last Name"
            value={userData?.last_name}
            onChange={(value: string) => handleEventChange(value, "last_name")}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomInput label="Email" disabled value={userData?.email} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomInput
            label="Phone"
            value={userData?.phone}
            onChange={(value: string) => handleEventChange(value, "phone")}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: { xs: "center", sm: "flex-end" },
            alignItems: "center",
            gap: 2,
          }}
        >
          <CustomButton
            label="Save Details"
            sx={{ maxWidth: "150px" }}
            onClick={handleSubmit}
          />
        </Grid>
      </Grid>
    </>
  );
};

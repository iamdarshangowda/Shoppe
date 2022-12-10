import React from "react";
import { Grid, Typography, Box, Theme } from "@mui/material";
import CustomInput from "@/components/ui-components/common/inputs/custom-input";
import CustomButton from "@/components/ui-components/common/buttons/custom-button";

export const ProfileEditForm = () => {
  return (
    <>
      <Grid container spacing={4} sx={{ maxWidth: "650px", mt: 1 }}>
        <Grid item xs={12} sm={6}>
          <CustomInput label="First Name" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomInput label="Last Name" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomInput label="Email" disabled />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomInput label="Phone" />
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
          <CustomButton label="Save Details" sx={{ maxWidth: "150px" }} />
        </Grid>
      </Grid>
    </>
  );
};

import React from "react";
import { Grid } from "@mui/material";
import CustomInput from "@/components/ui-components/common/inputs/custom-input";
import CustomButton from "@/components/ui-components/common/buttons/custom-button";

export const AddressEditForm = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={6}>
        <CustomInput label="Name" />
      </Grid>
      <Grid item xs={12} sm={6}>
        <CustomInput label="Phone" />
      </Grid>
      <Grid item xs={12} sm={6}>
        <CustomInput label="Pincode" disabled />
      </Grid>
      <Grid item xs={12} sm={6}>
        <CustomInput label="City/District/Town" />
      </Grid>
      <Grid item xs={12} sm={6}>
        <CustomInput label="Address (Area and Street)" />
      </Grid>
      <Grid item xs={12} sm={6}>
        <CustomInput label="Landmark" />
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
  );
};

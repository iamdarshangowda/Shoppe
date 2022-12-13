import React from "react";
import { Grid } from "@mui/material";
import CustomInput from "@/components/ui-components/common/inputs/custom-input";
import CustomButton from "@/components/ui-components/common/buttons/custom-button";

interface Props {
  userData?: any;
  handleEventChange: any;
  handleSubmit: () => void;
}

export const AddressEditForm: React.FunctionComponent<Props> = ({
  userData,
  handleEventChange,
  handleSubmit,
}) => {
  console.log(userData);
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={6}>
        <CustomInput
          label="Name"
          value={userData?.name}
          onChange={(value: string) => handleEventChange(value, "name")}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <CustomInput
          label="Phone"
          value={userData?.phone}
          onChange={(value: string) => handleEventChange(value, "phone")}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <CustomInput
          label="Pincode"
          value={userData?.pincode}
          onChange={(value: string) => handleEventChange(value, "pincode")}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <CustomInput
          label="City/District/Town"
          value={userData?.city}
          onChange={(value: string) => handleEventChange(value, "city")}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <CustomInput
          label="Address (Area and Street)"
          value={userData?.street}
          onChange={(value: string) => handleEventChange(value, "street")}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <CustomInput
          label="Landmark"
          value={userData?.landmark}
          onChange={(value: string) => handleEventChange(value, "landmark")}
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
  );
};

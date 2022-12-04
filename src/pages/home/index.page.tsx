import CustomButton from "@/components/ui-components/common/custom-button";
import React from "react";
import { useUserAuth } from "src/context/ContextProvider";
import { Box, Typography } from "@mui/material";
import Router, { useRouter } from "next/router";

const Home = () => {
  const { user, LogOut }: any = useUserAuth();
  const router = useRouter();
  console.log(user);

  const handleLogOut = async () => {
    await LogOut().then(
      (res: any) => {
        router.push("/signin");
        console.log("logout", res);
      },
      (error: any) => {
        console.log(error.message);
      }
    );
  };

  return (
    <Box>
      <Typography variant="h5">Home Page</Typography>
      <CustomButton label="LogOut" onClick={handleLogOut} />
    </Box>
  );
};

export default Home;

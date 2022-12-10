import React from "react";
import { Grid, Typography, Box, Theme } from "@mui/material";
import { ProfilePhoto } from "./profilePhoto/profilePhoto";

export const ProfileDetails = () => {
  return (
    <Box
      width="100%"
      mt={4}
      display="flex"
      justifyContent={"center"}
      flexDirection="column"
      alignItems="center"
    >
      <Box>
        <Box my={2}>
          <ProfilePhoto />
        </Box>
        <Box
          p={2}
          bgcolor="#FAEAB1"
          borderRadius="8px"
          border="3px solid #E5BA73"
        >
          <Grid container spacing={4} sx={{ maxWidth: "600px" }}>
            <Grid
              item
              xs={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Typography
                fontSize="1em"
                fontWeight={600}
                color={(theme: Theme) => theme.palette.secondary.main}
              >
                First Name:
              </Typography>
              <Typography
                fontSize="1em"
                fontWeight={600}
                color={(theme: Theme) => theme.palette.primary.main}
              >
                Darshan
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Typography
                fontSize="1em"
                fontWeight={600}
                color={(theme: Theme) => theme.palette.secondary.main}
              >
                Last Name:
              </Typography>
              <Typography
                fontSize="1em"
                fontWeight={600}
                color={(theme: Theme) => theme.palette.primary.main}
              >
                Gowda
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Typography
                fontSize="1em"
                fontWeight={600}
                color={(theme: Theme) => theme.palette.secondary.main}
              >
                Email:
              </Typography>
              <Typography
                fontSize="1em"
                fontWeight={600}
                color={(theme: Theme) => theme.palette.primary.main}
              >
                darshan@gmail.com
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Typography
                fontSize="1em"
                fontWeight={600}
                color={(theme: Theme) => theme.palette.secondary.main}
              >
                Phone:
              </Typography>
              <Typography
                fontSize="1em"
                fontWeight={600}
                color={(theme: Theme) => theme.palette.primary.main}
              >
                8884335220
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

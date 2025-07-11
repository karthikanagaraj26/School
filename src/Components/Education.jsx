import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Image from "./Images/Image 1.png";
import Image1 from "./Images/Image 2.png";
import { ArrowForwardIos } from "@mui/icons-material";


function Education() {


  return (
    <Box sx={{ flexGrow: 1, mt: 15 }}>
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        {/* Left side image */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={Image}
            alt="Education visual"
            sx={{
              width: "100%",
              maxWidth: {
                xs: "100%", // phone
                sm: "100%",
                md: "400px",
                lg: "500px",
                xl: "600px",
              },
              height: "auto",
              display: "block",
              margin: "0 auto",
            }}
          />
        </Grid>

        {/* Right side content */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              width: "100%",
              maxWidth: {
                xs: "100%", // phone
                sm: "100%",
                md: "500px",
                lg: "600px",
                xl: "700px",
              },
              ml: { xs: 0, md: 5 },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography sx={{ color: "#E74040", fontWeight: "bold" }}>_______</Typography>

            <Typography
              variant="h4"
              sx={{
                mt: 2,
                fontFamily: "montserrat",
                fontWeight: "bold",
                mx: { xs: "auto", md: 0 },
                width: {
                  xs: "100%",
                  sm: "80%",
                  md: "250px",
                  lg: "300px",
                  xl: "350px",
                },
              }}
            >
              Get Quality Education
            </Typography>

            <Typography
              sx={{
                color: "text.secondary",
                mt: 3,
                fontFamily: "montserrat",
                fontWeight: "bold",
                mx: { xs: "auto", md: 0 },
                width: {
                  xs: "100%",
                  sm: "90%",
                  md: "440px",
                  lg: "500px",
                  xl: "550px",
                },
              }}
            >
              Problems trying to resolve the conflict between the two major realms of classical physics: <br /> Newtonian mechanics.
            </Typography>

            <Typography
              sx={{
                color: "#E74040",
                fontFamily: "montserrat",
                mt: 2,
                fontWeight: "bold",
                display: "inline-flex",
                alignItems: "center",
                cursor: "pointer",
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              Learn More
              <ArrowForwardIos sx={{ fontSize: 16, ml: 1 }} />
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Box
        component="img"
        src={Image1}
        alt="Education second visual"
        sx={{
          width: "100%",
          maxWidth: {
            xs: "100%",
            sm: "100%",
            md: "600px",
            lg: "700px",
            xl: "800px",
          },
          height: "auto",
          display: "block",
          margin: "50px auto 0",
        }}
      />
    </Box>
  );
}

export default Education;

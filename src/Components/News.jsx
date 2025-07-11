import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

function Newsletter() {
  return (
    <Box sx={{ py: 8, px: { xs: 2, sm: 4, md: 10 }, textAlign: "center", mt: 10 }}>
      {/* Section header */}
      <Typography sx={{ color: "#E74040", fontFamily: "montserrat", fontWeight: "bold" }}>
        Newsletter
      </Typography>
      <Typography
        variant="h5"
        sx={{
          color: "#252B42",
          fontWeight: "bold",
          mt: 2,
          fontFamily: "montserrat",
          fontSize: {
            xs: "1.5rem",
            sm: "1.8rem",
            md: "2rem",
            lg: "2.2rem",
            xl: "2.5rem",
          },
        }}
      >
        Most Popular Courses
      </Typography>
      <Typography
        sx={{
          color: "#737373",
          mt: 2,
          maxWidth: {
            xs: "100%",
            sm: "400px",
            md: "460px",
            lg: "500px",
          },
          mx: "auto",
          fontFamily: "montserrat",
          fontSize: {
            xs: "0.9rem",
            sm: "1rem",
            md: "1rem",
          },
        }}
      >
        Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
      </Typography>

      {/* Email input and button */}
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "row",
          },
          justifyContent: "center",
          mt: 5,
          maxWidth: {
            xs: "100%",
            sm: 500,
            md: 600,
            lg: 800,
          },
          mx: "auto",
        }}
      >
        <TextField
          placeholder="Your Email"
          variant="outlined"
          sx={{
            flex: 1,
            bgcolor: "#F9F9F9",
            "& fieldset": { border: "none" },
            borderRadius: {
              xs: "4px",
              sm: "4px 0 0 4px",
            },
            mb: { xs: 2, sm: 0 },
          }}
        />
        <Button
          variant="contained"
          sx={{
            bgcolor: "#FF6551",
            color: "white",
            px: {
              xs: 2,
              sm: 3,
            },
            borderRadius: {
              xs: "4px",
              sm: "0 4px 4px 0",
            },
            fontFamily: "montserrat",
            fontWeight: "bold",
            textTransform: "none",
            "&:hover": { bgcolor: "#FF6551" },
          }}
        >
          Subscribe
        </Button>
      </Box>
    </Box>
  );
}

export default Newsletter;

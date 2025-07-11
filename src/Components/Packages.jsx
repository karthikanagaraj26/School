import React from "react";
import { Box, Typography, Avatar, Stack, Rating } from "@mui/material";
import Avatar1 from "./Images/4.png";
import Avatar2 from "./Images/5.png";
import Avatar3 from "./Images/6.png";

function Testimonials() {
  const [value] = React.useState(4);

  return (
    <Box sx={{ py: 8, px: { xs: 2, sm: 4, md: 10 }, bgcolor: "white", mt: 15 }}>
      {/* Header */}
      <Typography
        sx={{
          color: "#E74040",
          fontFamily: "montserrat",
          fontWeight: "bold",
          textAlign: "center", // ✅ Always center
        }}
      >
        Practice Advice
      </Typography>
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          mt: 2,
          fontFamily: "montserrat",
          color: "#252B42",
          fontSize: {
            xs: "1.6rem",
            sm: "1.8rem",
            md: "2rem",
            lg: "2.2rem",
            xl: "2.5rem",
          },
          textAlign: "center", // ✅ Always center
        }}
      >
        Approachable Packages
      </Typography>
      <Typography
        sx={{
          color: "#737373",
          mt: 2,
          maxWidth: {
            xs: "100%",
            sm: "380px",
            md: "480px",
            lg: "520px",
          },
          fontWeight: "bold",
          fontFamily: "montserrat",
          fontSize: {
            xs: "0.9rem",
            sm: "1rem",
          },
          textAlign: {
            xs: "center", // Mobile center
            md: "center", // Tablet center
            lg: "left",   // Desktop left
          },
          mx: { lg: 0, xs: "auto" }, // Center container on xs-md, no margin on lg
        }}
      >
        Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
      </Typography>

      {/* Cards */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
          mt: 5,
          justifyContent: {
            xs: "center",
            sm: "center",
            md: "space-around",
            lg: "center",
          },
        }}
      >
        {[0, 1, 2].map((index) => (
          <Box
            key={index}
            sx={{
              width: {
                xs: "100%",
                sm: 300,
                md: 250,
                lg: 270,
              },
              p: 3,
              borderRadius: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              bgcolor: "transparent",
              mx: { xs: 0, sm: "auto" },
            }}
          >
            <Typography component="legend">Read only</Typography>
            <Rating name="read-only" value={value} sx={{ mt: 2 }} readOnly />

            <Typography
              sx={{
                color: "#737373",
                fontSize: {
                  xs: "0.9rem",
                  sm: "0.95rem",
                },
                mb: 3,
                textAlign: "center",
                fontFamily: "montserrat",
                mt: 2,
              }}
            >
              Slate helps you see how many more days you need to work to reach your financial goal for the month and year.
            </Typography>

            <Stack direction="row" alignItems="center" spacing={1}>
              <Avatar
                src={
                  index === 0
                    ? Avatar1
                    : index === 1
                    ? Avatar2
                    : Avatar3
                }
                alt="Regina Miles"
                sx={{ width: 40, height: 40 }}
              />
              <Box sx={{ textAlign: "left" }}>
                <Typography
                  sx={{ color: "#E74040", fontWeight: "bold", fontFamily: "montserrat" }}
                >
                  Regina Miles
                </Typography>
                <Typography sx={{ color: "#737373", fontSize: "0.8rem", fontFamily: "montserrat" }}>
                  Designer
                </Typography>
              </Box>
            </Stack>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Testimonials;

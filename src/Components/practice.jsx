import React from "react";
import { Box, Typography, Paper, Button, Stack, Chip } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

function Pricing() {
  return (
    <Box sx={{ py: 8, px: { xs: 2, sm: 4, md: 10 }, bgcolor: "white", mt: 3 }}>
      {/* Section header */}
      <Typography
        sx={{
          color: "#E74040",
          fontFamily: "montserrat",
          fontWeight: "bold",
          
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
          
        }}
      >
        Watch our Courses
      </Typography>
      <Typography
        sx={{
          color: "#737373",
          mt: 2,
          maxWidth: {
            xs: "100%",
            sm: "420px",
            md: "500px",
          },
          fontWeight: "bold",
          fontFamily: "montserrat",
          textAlign: {
            xs: "left",
            md: "left",
            lg: "left",
          },
          
        }}
      >
        Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.
      </Typography>

      {/* Cards scroll container */}
      <Box
        sx={{
          display: "flex",
          overflowX: {
            xs: "auto", // horizontal scroll on mobile and laptop
            lg: "unset",
          },
          flexWrap: {
            xs: "nowrap",
            lg: "wrap",
          },
          gap: 3,
          mt: 5,
          pb: 2,
        }}
      >
        {[0, 1, 2].map((index) => (
          <Paper
            key={index}
            elevation={3}
            sx={{
              flex: "0 0 auto", // prevent shrinking, fixed width
              width: {
                xs: "80%", // wide card on mobile
                sm: "60%",
                md: "30%", // 3 cards fit horizontally on laptop
                lg: "300px",
              },
              p: 3,
              pt: 5,
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              borderRadius: 2,
            }}
          >
            {index === 1 && (
              <Chip
                label="New"
                sx={{
                  position: "absolute",
                  top: -10,
                  right: -10,
                  bgcolor: "#F5A623",
                  color: "white",
                  fontWeight: "bold",
                }}
              />
            )}

            <Box
              sx={{
                width: 60,
                height: 60,
                bgcolor: "#FFE9E9",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 2,
                
              }}
            >
              <FavoriteIcon sx={{ color: "#E74040", fontSize: 30 }} />
            </Box>

            <Typography sx={{ fontWeight: "bold", fontFamily: "montserrat", mb: 1 }}>
              FREE
            </Typography>

            <Typography
              sx={{
                color: "#737373",
                fontSize: "0.85rem",
                mb: 2,
                textAlign: "center",
              }}
            >
              Organize across all apps by hand
            </Typography>

            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "1.5rem",
                mb: 0.5,
                fontFamily: "montserrat",
              }}
            >
              19$
            </Typography>
            <Typography sx={{ color: "#23A6F0", fontSize: "0.9rem", mb: 2 }}>
              Per Month
            </Typography>

            <Typography
              sx={{
                color: "#737373",
                fontSize: "0.8rem",
                mb: 2,
                textAlign: "center",
              }}
            >
              Slate helps you see how many more days you need...
            </Typography>

            <Button
              variant="contained"
              sx={{
                bgcolor: "#FF5722",
                borderRadius: 0,
                textTransform: "none",
                px: 4,
                fontFamily: "montserrat",
                fontWeight: "bold",
                mb: 2,
                "&:hover": {
                  bgcolor: "#FF5722",
                },
              }}
            >
              Try for free
            </Button>

            <Stack spacing={1} alignItems="flex-start" width="100%" mt={1}>
              {[true, true, true, false, false].map((available, idx) => (
                <Typography
                  key={idx}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "0.85rem",
                    color: available ? "#4CAF50" : "#737373",
                  }}
                >
                  {available ? (
                    <CheckCircleIcon sx={{ fontSize: 18, mr: 1 }} />
                  ) : (
                    <CancelIcon sx={{ fontSize: 18, mr: 1 }} />
                  )}
                  {idx === 0
                    ? "Unlimited product updates"
                    : idx === 1
                    ? "Unlimited product updates"
                    : idx === 2
                    ? "Unlimited product updates"
                    : idx === 3
                    ? "1GB Cloud storage"
                    : "Email and community support"}
                </Typography>
              ))}
            </Stack>
          </Paper>
        ))}
      </Box>
    </Box>
  );
}

export default Pricing;

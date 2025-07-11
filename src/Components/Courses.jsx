import React from "react";
import { Box, Typography, Paper, Button, Chip, Stack } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DownloadIcon from "@mui/icons-material/Download";
import Image from "./Images/1.png";
import Image1 from "./Images/2.png";
import Image2 from "./Images/3.png";

function Courses() {
  const images = [Image, Image1, Image2];

  return (
    <Box sx={{ bgcolor: "#2A2A7C", py: 8, px: { xs: 2, md: 4 } }}>
      {/* Section header */}
      <Typography
        sx={{
          color: "#E74040",
          fontFamily: "montserrat",
          fontWeight: "bold",
          alignItems:{
            xs:"center",
            md:"center",
            lg:"left"
          }
          
        }}
      >
        Practice Advice
      </Typography>
      <Typography
        variant="h4"
        sx={{
          color: "white",
          fontWeight: "bold",
          mt: 2,
          fontFamily: "montserrat",
          
        }}
      >
        Our Popular Courses
      </Typography>
      <Typography
        sx={{
          color: "#FFFFFF",
          opacity: 0.7,
          mt: 2,
          maxWidth: "500px",
          fontFamily: "montserrat",
          
         
        }}
      >
        Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.
      </Typography>

      {/* Horizontal scroll container */}
      <Box
        sx={{
          display: "flex",
          overflowX: "auto",
          mt: 5,
          gap: 2,
          scrollSnapType: "x mandatory",
          "&::-webkit-scrollbar": { display: "none" }, // hide scrollbar
        }}
      >
        {images.map((image, index) => (
          <Paper
            key={index}
            elevation={3}
            sx={{
              flex: "0 0 auto",
              scrollSnapAlign: "start",
              width: {
                xs: "80%",
                sm: "60%",
                md: "30%", // 3 cards visible at 1024px (laptop)
              },
              minWidth: {
                xs: "80%",
                sm: "60%",
                md: "30%",
              },
              p: 2,
              overflow: "hidden",
              position: "relative",
              bgcolor: "white",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Sale Chip */}
            <Chip
              label="Sale"
              sx={{
                position: "absolute",
                top: 10,
                left: 10,
                bgcolor: "#E74040",
                color: "white",
                fontWeight: "bold",
                fontSize: "0.75rem",
              }}
            />

            {/* Card image */}
            <Box component="img" src={image} alt="" sx={{ width: "100%", height: "auto", mb: 2 }} />

            {/* Icons row */}
            <Stack direction="row" justifyContent="center" spacing={1} mb={2}>
              <FavoriteBorderIcon fontSize="small" />
              <VisibilityIcon fontSize="small" />
              <ShoppingCartIcon fontSize="small" />
            </Stack>

            {/* Category */}
            <Typography sx={{ color: "#E74040", fontFamily: "montserrat", fontWeight: "bold", fontSize: "0.9rem" }}>
              {index === 0 ? "Training Courses" : index === 1 ? "Books Library" : "Certified Teacher"}
            </Typography>

            {/* Title */}
            <Typography
              variant="h6"
              sx={{ mt: 1, fontWeight: "bold", fontFamily: "montserrat", color: "#252B42" }}
            >
              {index === 0 ? "Video in Live Action" : index === 1 ? "Every Client Matters" : "Get Quality Education"}
            </Typography>

            {/* Description */}
            <Typography sx={{ mt: 1, fontSize: "0.85rem", color: "#737373", fontFamily: "montserrat" }}>
              We focus on ergonomics and meeting you where you work. It's only a keystroke away.
            </Typography>

            {/* Stats row */}
            <Stack direction="row" alignItems="center" spacing={1} mt={2}>
              <DownloadIcon sx={{ fontSize: 16, color: "#737373" }} />
              <Typography sx={{ fontSize: "0.8rem", color: "#737373" }}>15 Sales</Typography>
            </Stack>

            {/* Price row */}
            <Stack direction="row" alignItems="center" spacing={1} mt={1}>
              <Typography sx={{ textDecoration: "line-through", fontSize: "0.8rem", color: "#737373" }}>
                $16.48
              </Typography>
              <Typography sx={{ fontSize: "0.9rem", color: "#40BB15", fontWeight: "bold" }}>
                $6.48
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  ml: "auto",
                  bgcolor: "#26335D",
                  color: "white",
                  px: 1,
                  fontSize: "0.75rem",
                  borderRadius: 1,
                }}
              >
                <StarIcon sx={{ fontSize: 14, mr: 0.5 }} /> 4.9
              </Box>
            </Stack>

            {/* Learn More button */}
            <Button
              variant="outlined"
              sx={{
                color: "#E74040",
                borderRadius: 20,
                textTransform: "none",
                fontWeight: "bold",
                fontFamily: "montserrat",
                alignSelf: "flex-start",
                mt: 2,
                borderColor: "#E74040",
                "&:hover": {
                  borderColor: "#E74040",
                  backgroundColor: "rgba(231, 64, 64, 0.04)",
                },
              }}
              endIcon={<ArrowForwardIosIcon sx={{ fontSize: 14 }} />}
            >
              Learn More
            </Button>
          </Paper>
        ))}
      </Box>
    </Box>
  );
}

export default Courses;

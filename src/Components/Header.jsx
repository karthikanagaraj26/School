import * as React from "react";
import {
  Box,
  Toolbar,
  Typography,
  Button,
  Grid,
  Paper,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import BoyImage from "./Images/BoyImage.png";

function Header() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const menuItems = ["Home", "Product", "Pricing", "Contact"];

  return (
    <Box sx={{ position: "relative", overflow: "hidden" }}>
      {/* Left vertical blue bar — hidden on mobile */}
      <Box
        sx={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "112px",
          height: "177px",
          bgcolor: "#184C99",
          zIndex: 1,
          display: { xs: "none", md: "block" }, // Hide on xs
        }}
      />

      {/* Toolbar */}
      <Toolbar
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          px: { xs: 2, sm: 4, md: 8, lg: 12, xl: 20 }, // ✅ Fixed for laptop & large screens
          pt: { xs: 2, md: 3 },
          zIndex: 2,
          position: "relative",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontFamily: "montserrat",
            color: "#252B42",
            fontWeight: "bold",
            textAlign: { xs: "center", md: "left" },
            flexGrow: { xs: 1, md: "unset" },
        ml:10
          }}
        >
          Brandname
        </Typography>

        {/* Desktop Menu */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: 3,
            alignItems: "center",
            mr:18,
            mt:1
          }}
        >
          {menuItems.map((item) => (
            <Typography
              key={item}
              sx={{
                fontFamily: "montserrat",
                fontWeight: "bold",
                color: "text.secondary",
                cursor: "pointer",
                
              }}
            >
              {item}
            </Typography>
          ))}
          <Button
            sx={{
              color: "#FF6551",
              fontFamily: "montserrat",
              fontWeight: "bold",
              ml:2
            }}
          >
            Login
          </Button>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#FF6551",
              fontFamily: "montserrat",
              fontWeight: "bold",
            }}
          >
            JOIN US
          </Button>
        </Box>

        {/* Mobile Hamburger */}
        <IconButton
          sx={{ display: { xs: "flex", md: "none" }, color: "#252B42" }}
          onClick={() => setDrawerOpen(true)}
        >
          <MenuIcon />
        </IconButton>

        {/* Drawer for mobile */}
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
        >
          <Box sx={{ width: 250 }}>
            <List>
              {menuItems.map((text) => (
                <ListItem button key={text}>
                  <ListItemText
                    primary={text}
                    primaryTypographyProps={{
                      fontFamily: "montserrat",
                      fontWeight: "bold",
                    }}
                  />
                </ListItem>
              ))}
            </List>
            <Divider />
            <List>
              <ListItem button>
                <ListItemText
                  primary="Login"
                  primaryTypographyProps={{
                    fontFamily: "montserrat",
                    fontWeight: "bold",
                  }}
                />
              </ListItem>
              <ListItem button>
                <ListItemText
                  primary="JOIN US"
                  primaryTypographyProps={{
                    fontFamily: "montserrat",
                    fontWeight: "bold",
                  }}
                />
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </Toolbar>

      {/* Hero text */}
      <Grid
        sx={{
          px: { xs: 2, sm: 4, md: 8, lg: 22 },
          mt: { xs: 5, sm: 8, md: 10 },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{
            color: "#FF6551",
            fontWeight: "bold",
            fontFamily: "montserrat",
          }}
        >
          For Better Future
        </Typography>
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            mt: 3,
            fontFamily: "montserrat",
            color: "#252B42",
            fontSize: {
              xs: "1.8rem",
              sm: "2.5rem",
              md: "3rem",
              lg: "3.5rem",
              xl: "4rem",
            },
          }}
        >
          HIGH QUALITY <br /> COURSES
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mt: 4,
            color: "#737373",
            fontFamily: "montserrat",
            width: { xs: "100%", sm: "300px", md: "350px", lg: "400px" },
            mx: { xs: "auto", md: 0 },
          }}
        >
          Every day brings with it a fresh set of learning possibilities.
        </Typography>

        <Box
          sx={{
            mt: 5,
            display: "flex",
            gap: 2,
            flexWrap: "wrap",
            justifyContent: { xs: "center", md: "flex-start" },
          }}
        >
          <Button
            variant="contained"
            sx={{
              bgcolor: "#FF6551",
              fontFamily: "montserrat",
              fontWeight: "bold",
            }}
          >
            Get Quote Now
          </Button>
          <Button
            variant="outlined"
            sx={{
              borderColor: "#FF6551",
              color: "#FF6551",
              fontFamily: "montserrat",
              fontWeight: "bold",
            }}
          >
            Learn More
          </Button>
        </Box>
      </Grid>

      {/* Cards */}
      <Box
        sx={{
          mt: { xs: 4, sm: 5, md: 6 },
          display: "flex",
          gap: 3,
          px: { xs: 2, sm: 4, md: 8, lg: 15 },
          flexWrap: "wrap",
        }}
      >
        {[
          {
            icon: "🖥️",
            color: "#FF6551",
            title: "Expert instruction",
            desc: "The gradual accumulation of information about atomic and small-scale behaviour...",
          },
          {
            icon: "🔭",
            color: "#184C99",
            title: "Training Courses",
            desc: "The gradual accumulation of information about atomic and small-scale behaviour...",
          },
          {
            icon: "🎓",
            color: "#FFC107",
            title: "Lifetime access",
            desc: "The gradual accumulation of information about atomic and small-scale behaviour...",
          },
        ].map((card, index) => (
          <Paper
            key={index}
            elevation={3}
            sx={{
              flex: "1 1 250px",
              p: 3,
              textAlign: "center",
              zIndex: 2,
            }}
          >
            <Box sx={{ fontSize: 40, color: card.color, mb: 1 }}>
              {card.icon}
            </Box>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", fontFamily: "montserrat" }}
            >
              {card.title}
            </Typography>
            <Typography
              variant="body2"
              sx={{ mt: 1, color: "#737373", fontFamily: "montserrat" }}
            >
              {card.desc}
            </Typography>
          </Paper>
        ))}
      </Box>

      {/* Right blue box with boy image */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          width: {
            xs: "200px",
            sm: "300px",
            md: "350px",
            lg: "450px",
          },
          height: {
            xs: "300px",
            sm: "400px",
            md: "500px",
            lg: "550px",
          },
          bgcolor: "#184C99",
          zIndex: 0,
          display: { xs: "none", md: "flex" }, // Hide on phone
        }}
      >
        <Box
          component="img"
          src={BoyImage}
          alt="Boy"
          sx={{
            width: "80%",
            height: "auto",
            ml: 2,
            mt: 11,
          }}
        />
      </Box>
    </Box>
  );
}

export default Header;

import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
  return (
    <Box sx={{ flexGrow: 1, p: 4, bgcolor: 'white' }}>
      <Grid
        container
        spacing={4}
        justifyContent="center"
        sx={{
          textAlign: {
            xs: 'center',
            sm: 'center',
            md: 'left', // ✅ Align left on tablet and above
          },
        }}
      >
        {/* Company Info */}
        <Grid item xs={12} sm={6} md={2.4}>
          <Typography variant="h6" gutterBottom>Company Info</Typography>
          <Typography color="text.secondary">About Us</Typography>
          <Typography color="text.secondary">Career</Typography>
          <Typography color="text.secondary">We are hiring</Typography>
          <Typography color="text.secondary">Blog</Typography>
        </Grid>

        {/* Legal */}
        <Grid item xs={12} sm={6} md={2.4}>
          <Typography variant="h6" gutterBottom>Legal</Typography>
          <Typography color="text.secondary">About Us</Typography>
          <Typography color="text.secondary">Carrier</Typography>
          <Typography color="text.secondary">We are hiring</Typography>
          <Typography color="text.secondary">Blog</Typography>
        </Grid>

        {/* Features */}
        <Grid item xs={12} sm={6} md={2.4}>
          <Typography variant="h6" gutterBottom>Features</Typography>
          <Typography color="text.secondary">Business Marketing</Typography>
          <Typography color="text.secondary">User Analytic</Typography>
          <Typography color="text.secondary">Live Chat</Typography>
          <Typography color="text.secondary">Unlimited Support</Typography>
        </Grid>

        {/* Resources */}
        <Grid item xs={12} sm={6} md={2.4}>
          <Typography variant="h6" gutterBottom>Resources</Typography>
          <Typography color="text.secondary">IOS & Android</Typography>
          <Typography color="text.secondary">Watch a Demo</Typography>
          <Typography color="text.secondary">Customers</Typography>
          <Typography color="text.secondary">API</Typography>
        </Grid>

        {/* Get In Touch */}
        <Grid item xs={12} sm={12} md={2.4}>
          <Typography variant="h6" gutterBottom>Get In Touch</Typography>
          <Box display="flex" alignItems="center" mb={1}>
            <PhoneIcon sx={{ color: '#FF6551', mr: 1 }} />
            <Typography variant="body1" color="text.secondary">(480) 555-0103</Typography>
          </Box>
          <Box display="flex" alignItems="flex-start" mb={1}>
            <LocationOnIcon sx={{ color: '#FF6551', mr: 1, mt: 0.5 }} />
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                width: { xs: '100%', sm: '200px', md: '180px', lg: '200px', xl: '220px' },
              }}
            >
              4517 Washington Ave. Manchester, Kentucky 39495
            </Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <EmailIcon sx={{ color: '#FF6551', mr: 1 }} />
            <Typography variant="body1" color="text.secondary">debra.holt@example.com</Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Footer Bottom */}
      <Box
        sx={{
          mt: 4,
          pt: 2,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: { xs: 'column', sm: 'row' },
          bgcolor: "#FAFAFA",
          px: {
            xs: 2,
            sm: 5,
            md: 10,
            lg: 12,
            xl: 15,
          },
        }}
      >
        <Typography variant="body2" color="text.secondary" sx={{ mb: { xs: 2, sm: 0 }, textAlign: { xs: 'center', sm: 'left' } }}>
          Made With Love By Figmaland All Right Reserved
        </Typography>
        <Box>
          <FacebookIcon fontSize="large" sx={{ color: '#FF6551', mx: 1 }} />
          <InstagramIcon fontSize="large" sx={{ color: '#FF6551', mx: 1 }} />
          <TwitterIcon fontSize="large" sx={{ color: '#FF6551', mx: 1 }} />
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;

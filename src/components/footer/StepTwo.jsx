import { Box, Divider, Grid, IconButton, Typography } from "@mui/material";
import React from "react";

import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

export const StepTwo = () => {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        sx={{ mt: { xs: 28, md: 14 } }}
      >
        <Grid item xs={12} md={4} sx={{ pr: 2 }}>
          <Typography variant="h5">
            <strong>SHOP.CO</strong>
          </Typography>
          <br />
          <Typography>
            We have clothes that suits your style and wich you're proud to wear.
            From women to men.
          </Typography>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            sx={{ mt: 2, mb: 2 }}
          >
            <IconButton
              sx={{
                backgroundColor: "white",
                mr: 2,
                "&:hover": { backgroundColor: "white" },
              }}
            >
              <TwitterIcon sx={{ color: "black" }} />
            </IconButton>
            <IconButton
              sx={{
                backgroundColor: "Black",
                mr: 2,
                "&:hover": { backgroundColor: "black" },
              }}
            >
              <FacebookIcon sx={{ color: "white" }} />
            </IconButton>
            <IconButton
              sx={{
                backgroundColor: "white",
                mr: 2,
                "&:hover": { backgroundColor: "white" },
              }}
            >
              <InstagramIcon sx={{ color: "black" }} />
            </IconButton>
            <IconButton
              sx={{
                backgroundColor: "white",
                "&:hover": { backgroundColor: "white" },
              }}
            >
              <GitHubIcon sx={{ color: "black" }} />
            </IconButton>
          </Grid>
        </Grid>

        <Grid item xs={6} md={2} className="footer-text-column">
          <Typography variant="h5">
            <strong>COMPANY</strong>
          </Typography>
          <br />
          <Typography> About </Typography>
          <Typography> Features </Typography>
          <Typography> Works </Typography>
          <Typography> Career </Typography>
        </Grid>

        <Grid item xs={6} md={2} className="footer-text-column">
          <Typography variant="h5">
            <strong>HELP</strong>
          </Typography>
          <br />
          <Typography> Customer Support </Typography>
          <Typography> Delivery Details </Typography>
          <Typography> Terms & Conditions </Typography>
          <Typography> Privacy Policy </Typography>
        </Grid>

        <Grid item xs={6} md={2} className="footer-text-column">
          <Typography variant="h5">
            <strong>FAQ</strong>
          </Typography>
          <br />
          <Typography> Account </Typography>
          <Typography> Manage Deliveries </Typography>
          <Typography> Orders </Typography>
          <Typography> Payments </Typography>
        </Grid>

        <Grid item xs={6} md={2} className="footer-text-column">
          <Typography variant="h5">
            <strong>RESOURCES</strong>
          </Typography>
          <br />
          <Typography> Free eBooks </Typography>
          <Typography> Development Tutorial </Typography>
          <Typography> How to-Blog </Typography>
          <Typography> Youtube Playlist </Typography>
        </Grid>
      </Grid>

      <Divider light sx={{ my: 3 }} />

      <Grid
        container
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography>Shop.co © 2000-2023, All Rights Reserved </Typography>
        <Box className="pagos">
          <Box>
            <img src="/footer/visa.png" alt="visa" width={32} />
          </Box>
          <Box>
            <img src="/footer/mastercard2.png" alt="mastercard" width={32} />
          </Box>
          <Box>
            <img src="/footer/paypal.png" alt="paypal" width={32} />
          </Box>
          <Box>
            <img src="/footer/payApple.png" alt="paypalApple" width={32} />
          </Box>
          <Box>
            <img src="/footer/googlePay.png" alt="googlePay" width={32} />
          </Box>
        </Box>
      </Grid>
    </>
  );
};

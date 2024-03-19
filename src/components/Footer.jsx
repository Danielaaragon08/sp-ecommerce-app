import { Box, Grid, IconButton, Typography } from "@mui/material";
import React from "react";

import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

export const Footer = () => {
  return (
    <>
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          backgroundColor: "#E1E1E1",
          width: "100%",
        }}
      >
        <Grid
          container
          direction="row"
          spacing={4}
          justifyContent="space-between"
        >
          <Grid item xs={12} md={4}>
            <Typography variant="h5">
              <strong>SHOP.CO</strong>
            </Typography>

            <br />
            <Typography>
              We have clothes that suits your style and wich you're proud to
              wear. From women to men.
            </Typography>
            <Grid container direction="row" justifyContent="flex-start">
              <IconButton sx={{ backgroundColor: "white" }}>
                <TwitterIcon sx={{ color: "black" }} />
              </IconButton>

              <IconButton sx={{ backgroundColor: "Black" }}>
                <FacebookIcon sx={{ color: "white" }} />
              </IconButton>

              <IconButton sx={{ backgroundColor: "white" }}>
                <InstagramIcon sx={{ color: "black" }} />
              </IconButton>

              <IconButton sx={{ backgroundColor: "white" }}>
                <GitHubIcon sx={{ color: "black" }} />
              </IconButton>
            </Grid>
          </Grid>
          <Grid item xs={6} md={2}>
            <Typography variant="h5">
              <strong>COMPANY</strong>
            </Typography>
            <br />

            <Typography> About </Typography>

            <Typography> Features </Typography>

            <Typography> Works </Typography>

            <Typography> Career </Typography>
          </Grid>
          {/* segundo Typography */}
          <Grid item xs={6} md={2}>
            <Typography variant="h5">
              <strong>HELP</strong>
            </Typography>
            <br />

            <Typography> Customer Support </Typography>
            <Typography> Delivery Details </Typography>
            <Typography> Terms & Conditions </Typography>
            <Typography> Privacy Policy </Typography>
          </Grid>

          <Grid item xs={6} md={2}>
            <Typography variant="h5">
              <strong>FAQ</strong>
            </Typography>
            <br />

            <Typography> Account </Typography>

            <Typography> Manage Deliveries </Typography>
            <Typography> Orders </Typography>
            <Typography> Payments </Typography>
          </Grid>

          <Grid item xs={6} md={2}>
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
      </Box>
    </>
  );
};

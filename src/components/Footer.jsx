import { Box, Container } from "@mui/material";
import React from "react";

import { StepTwo } from "./footer/StepTwo";

import "../styles/footer.style.css";
import { StepOne } from "./footer/StepOne";

export const Footer = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#E1E1E1",
          paddingBottom: 3,
          bottom: 0,
        }}
      >
        <Container
          className="footer-text"
          sx={{
            position: "relative",
          }}
        >
          <StepOne />
          <br />
          <StepTwo />
        </Container>
      </Box>
    </>
  );
};

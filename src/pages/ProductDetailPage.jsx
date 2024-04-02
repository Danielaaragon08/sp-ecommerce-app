import { Container } from "@mui/material";
import React from "react";
import { StepOne } from "../components/productDetails/StepOne";
import { StepTwo } from "../components/productDetails/StepTwo";

export const ProductDetailPage = () => {
  return (
    <>
     <Container>
      <StepOne />
      <StepTwo />
      </Container>
    </>
  );
};

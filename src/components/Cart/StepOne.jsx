import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Cart } from "../../data/Cart";
import { CardProduct } from "./CardProducts";

import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
export const StepOne = () => {
  return (
    <>
      <Typography variant="h5"> {"Home > Cart"}</Typography>
      <Typography variant="h4">
        <strong>Your Cart</strong>
      </Typography>
      <Box>
        <Grid container>
          <Grid
            item
            xs={12}
            md={7}
            sx={{
              border: 1,
              borderColor: "primary.light",
              paddingY: 2,
              borderRadius: 8,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                gap: 2,
                justifyContent: "space-between",
                paddingX: 2,
              }}
            >
              {Cart.map((imageInfo) => {
                return (
                  <CardProduct
                    key={imageInfo.id}
                    title={imageInfo.title}
                    size={imageInfo.size}
                    color={imageInfo.color}
                    price={imageInfo.price}
                    sourceImage={imageInfo.sourceImage}
                  />
                );
              })}
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              border: 1,
              borderColor: "primary.light",
              padding: 2,
              marginLeft:3,
              borderRadius: 8,
            }}
          >
            <Typography variant="h6">Order Summary</Typography>
            <Box sx={{display:"flex", justifyContent:"space-between", alignItems: "center",}}>
            <Typography sx={{ my: 3 }}>Subtotal</Typography>
            <Typography><strong>$565</strong></Typography>
            </Box>

            <Box sx={{display:"flex", justifyContent:"space-between", alignItems: "center",}}>
            <Typography>Discount(-20%)</Typography>
            <Typography color="red"><strong>-$113</strong></Typography>
            </Box>

            <Box sx={{display:"flex", justifyContent:"space-between", alignItems: "center",}}>
            <Typography sx={{ my: 3 }}>Delivery Free</Typography>
            <Typography><strong>$15</strong></Typography>
            </Box>
            <Divider/>

            <Box sx={{display:"flex", justifyContent:"space-between", alignItems: "center",}}>
            <Typography sx={{ my: 3 }}>Total</Typography>
            <Typography variant="h6"><strong>$467</strong></Typography>
            </Box>
            <Button size="large" variant="contained" color="secondary">
              <SellOutlinedIcon sx={{ ml: 3 }}> </SellOutlinedIcon>
              Add promo code
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

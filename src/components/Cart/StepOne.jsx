import { Box, Button, Divider, Grid, Typography } from "@mui/material";

import { Cart } from "../../data/Cart";
import { CardProduct } from "./CardProducts";

import { CustomSearch } from "../CustomSearch";

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
              marginLeft: 3,
              borderRadius: 8,
            }}
          >
            <Typography variant="h6">Order Summary</Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography sx={{ my: 3 }}>Subtotal</Typography>
              <Typography>
                <strong>$565</strong>
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography>Discount(-20%)</Typography>
              <Typography color="red">
                <strong>-$113</strong>
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography sx={{ my: 3 }}>Delivery Free</Typography>
              <Typography>
                <strong>$15</strong>
              </Typography>
            </Box>
            <Divider />

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography sx={{ my: 3 }}>Total</Typography>
              <Typography variant="h6">
                <strong>$467</strong>
              </Typography>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <CustomSearch description="Add promo code" isSearch={false} />
              <Button sx={{width: "40%", ml: 1}} variant="contained">
                Apply
              </Button>
            </Box>
            <Button fullWidth variant="contained" sx={{mt: 3, py: 2}}>
                Go to Checkout
              </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

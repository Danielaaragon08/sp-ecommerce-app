import { Box, Button, Grid, Typography } from "@mui/material";
import { ShopCard } from "./ShopCard";

import { newArrivals } from "../../data/new-arrivals";

export const StepThree = () => {
  return (
    <>
      <Typography variant="h4" sx={{ textAlign: "center" }} padding={3}>
        <strong>NEW ARRIVALS</strong>
      </Typography>

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {newArrivals.map((imageInfo) => {
          return (
            <ShopCard
              key={imageInfo.id}
              name={imageInfo.name}
              amount={imageInfo.amount}
              rating={imageInfo.rating}
              sourceImage={imageInfo.sourceImage}
            />
          );
        })}
      </Grid>
      <Box textAlign="center" mt={3}>
        <Button variant="text">View All</Button>
      </Box>
    </>
  );
};

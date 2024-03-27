import { Box, Button, Grid, Typography } from "@mui/material";
import { topSelling } from "../../data/top-selling";
import { ShopCard } from "./ShopCard";

export const StepFour = () => {
  return (
    <>
      <Typography variant="h4" sx={{ textAlign: "center" }} padding={3}>
        <strong>TOP SELLING</strong>
      </Typography>

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {topSelling.map((imageInfo) => {
          return (
            <ShopCard
              key={imageInfo.id}
              name={imageInfo.name}
              amount={imageInfo.amount}
              rating={imageInfo.rating}
              sourceImage={imageInfo.sourceImage}
              percentage={imageInfo.percentage}
            />
          );
        })}
      </Grid>
      <Box textAlign="center" mt={3}>
        <Button
          variant="outlined"
          sx={{
            borderRadius: 8,
            borderColor: "gray",
            backgroundColor: "white",
            mt:2,
            p:1,
            color: "black",
            "&:hover": { backgroundColor: "white", borderColor: "#F2F2F2" },
            textTransform: "none",
            width: "20%"
           
          }}
        >
          View All
        </Button>
      </Box>
    </>
  );
};

import { Card, CardContent, Grid, Rating, Typography } from "@mui/material";
import CheckCircleSharpIcon from "@mui/icons-material/CheckCircleSharp";

export const StepSix = () => {
  return (
    <>
      <Typography variant="h3" mt={8} mb={2}>
        <strong>OUR HAPPY CUSTOMERS</strong>
      </Typography>

      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
      >
        <Card sx={{ width: 350, height: 200, borderRadius: 5 }}>
          <CardContent>
            <Rating name="half-rating" defaultValue={5} precision={0.5} />

            <Typography
              variant="h6"
              sx={{ display: "flex", alignItems: "center" }}
            >
              Sara M.
              <CheckCircleSharpIcon sx={{ color: "#01ab31", ml: 1 }} />
            </Typography>

            <Typography color="text.secondary">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consequatur, facilis molestias similique neque illum cum
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ width: 350, height: 200, borderRadius: 5 }}>
          <CardContent>
            <Rating name="half-rating" defaultValue={5} precision={0.5} />

            <Typography
              variant="h6"
              sx={{ display: "flex", alignItems: "center" }}
            >
              Sara M.
              <CheckCircleSharpIcon sx={{ color: "#01ab31", ml: 1 }} />
            </Typography>

            <Typography color="text.secondary">
              Lorem ipsum dolor sit, amet consit.
              Consequatur, facilis molestias similique neque illum cum
              voluptatum tempore necessitatibus aliquid facere laudantium!
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ width: 350, height: 200, borderRadius: 5 }}>
          <CardContent>
            <Rating name="half-rating" defaultValue={5} precision={0.5} />

            <Typography
              variant="h6"
              sx={{ display: "flex", alignItems: "center" }}
            >
              Sara M.
              <CheckCircleSharpIcon sx={{ color: "#01ab31", ml: 1 }} />
            </Typography>

            <Typography color="text.secondary">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consequatur, facilis molestias similique neque illum cum
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

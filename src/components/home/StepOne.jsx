import { Box, Button, Grid, Typography } from "@mui/material";

export const StepOne = () => {
  return (
    <>
      <Grid container>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            marginTop: 4,
          }}
        >
          <Box>
            <Typography variant="h3" mb={2}>
              <strong>FIND CLOTHES THAT MATCHES YOUR STYLES</strong>
            </Typography>
            <Typography variant="p" color="gray">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              cumque omnis illo ipsam non eligendi dolore molestias quibusdam
              modi molestiae. Recusandae expedita esse animi provident est
              accusamus id natus cum?
            </Typography>
            <Box sx={{ marginY: 2 }}>
              <Button
                variant="contained"
                sx={{
                  borderRadius: 50,
                  backgroundColor: "black",
                  color: "white",
                  "&:hover": { backgroundColor: "black" },
                  textTransform: "none",
                  py: 1.5,
                  px: 9,
                  width: { xs: "100%", md: "40%" },
                }}
              >
                Shop now
              </Button>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap ",
                marginBottom: 2,
              }}
            >
              <Box>
                <Typography variant="h4">200+</Typography>
                <Typography variant="p">International Brands</Typography>
              </Box>
              <Box>
                <Typography variant="h4">2000+</Typography>
                <Typography variant="p">Hight Quality Products</Typography>
              </Box>
              <Box>
                <Typography variant="h4">30.000+</Typography>
                <Typography variant="p">Happy Customers</Typography>
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box>
            <img src="/homePage/logohomepage.png" alt="Img Home" width="100%" />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

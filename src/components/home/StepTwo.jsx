import { Box, Container, Grid } from "@mui/material";

export const StepTwo = () => {
  return (
    <Container>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        paddingY= {1}
      >
        <Box>
          <img src="/homePage/versace.png" alt="Img Home" />
        </Box>
        <Box>
          <img src="/homePage/zara.png" alt="Img Zara" />
        </Box>
        <Box>
          <img src="/homePage/gucci.png" alt="Img Zara" />
        </Box>
        <Box>
          <img src="/homePage/prada.png" alt="Img Zara" />
        </Box>
        <Box>
          <img src="/homePage/calvinklein.png" alt="Img Zara" />
        </Box>
      </Grid>
    </Container>
  );
};

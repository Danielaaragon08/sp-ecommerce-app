import { Box, Container, Divider } from "@mui/material";
import { StepFour } from "../components/home/StepFour";
import { StepOne } from "../components/home/StepOne";
import { StepThree } from "../components/home/StepThree";
import { StepTwo } from "../components/home/StepTwo";
import { StepFive } from "../components/home/StepFive";
import { StepSix } from "../components/home/StepSix";

export const HomePage = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "#F2F0F1" }}>
        <Container>
          <StepOne />
        </Container>
      </Box>
      <Box backgroundColor="black">
        <StepTwo />
      </Box>
      <Box>
        <Container>
          <StepThree />
          <br />
          <Divider />
          <StepFour />
          <StepFive />
          <StepSix />
        </Container>
      </Box>
    </>
    //Home
  );
};

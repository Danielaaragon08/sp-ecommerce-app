import { Box, Container } from "@mui/material";
import { StepOne } from "../components/home/StepOne";

export const HomePage = () => {
  return (
    <Box sx={{backgroundColor: "#F2F0F1"}}>
      <Container>
        <StepOne />
      </Container>
    </Box>
  );
};

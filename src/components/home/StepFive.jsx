import { makeStyles } from "@material-ui/styles";
import { Box, Grid, Typography } from "@mui/material";
import CasualImage from "./images/casual.png";
import FormalImage from "./images/formal.png";
import PartyImage from "./images/party.png";
import GymImage from "./images/gym.png";

const useStyles = makeStyles({
  boxImage: {
    borderRadius: "0.75rem",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "30vh",
    position: "relative",
  },
  boxText: {
    position: "absolute",
    top: 10,
    left: 10,
  },
});

export const StepFive = () => {
  const classes = useStyles();

  return (
    <Box sx={{ backgroundColor: "#F2F0F1", p: 5, borderRadius: 5, mt: 4 }}>
      <Typography textAlign="center" variant="h3" mb={3}>
        <strong>BROWSE BY DRESS STYLE</strong>{" "}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Box
            className={classes.boxImage}
            sx={{
              backgroundImage: `url(${CasualImage})`,
            }}
          >
            <Typography className={classes.boxText} variant="h4">
              <strong>Casual</strong>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Box
            className={classes.boxImage}
            sx={{
              backgroundImage: `url(${FormalImage})`,
            }}
          >
            <Typography className={classes.boxText} variant="h4">
              <strong>Formal</strong>{" "}
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={2} mt={1}>
        <Grid item xs={8}>
          <Box
            className={classes.boxImage}
            sx={{
              backgroundImage: `url(${PartyImage})`,
            }}
          >
            <Typography className={classes.boxText} variant="h4">
              <strong>Party</strong>{" "}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box
            className={classes.boxImage}
            sx={{
              backgroundImage: `url(${GymImage})`,
            }}
          >
            <Typography className={classes.boxText} variant="h4">
              <strong>Gym</strong>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

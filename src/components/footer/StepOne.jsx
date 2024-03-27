import {
  Button,
  FormControl,
  Grid,
  Input,
  InputAdornment,
  Typography,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

export const StepOne = () => {
  return (
    <>
      <Grid
        container
        sx={{
          backgroundColor: "black",
          borderRadius: 5,
          padding: 4,
          position: "absolute",
          top: -80,
          width: "92%",
        }}
      >
        <Grid item sx={12} md={7} sx={{ marginBottom: 2 }}>
          <Typography variant="h4" color="white">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </Typography>
        </Grid>

        <Grid item sx={12} md={5}>
          <FormControl
            fullWidth
            sx={{
              backgroundColor: "white",
              borderRadius: 50,
            }}
            variant="outlined"
          >
            <Input
              id="input-with-icon-adornment"
              placeholder="Enter your email address"
              disableUnderline={true}
              sx={{ p: 1 }}
              startAdornment={
                <InputAdornment position="start">
                  <MailOutlineIcon sx={{ ml: 2 }} />
                </InputAdornment>
              }
            />
          </FormControl>
          <Button
            fullWidth
            variant="contained"
            sx={{
              borderRadius: 5,
              backgroundColor: "white",
              mt: 1,
              p: 1,
              color: "black",
              "&:hover": { backgroundColor: "white" },
              textTransform: "none"
            }}
          >
            Suscribe to Newsletter
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

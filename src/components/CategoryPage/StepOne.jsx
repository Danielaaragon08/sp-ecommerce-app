import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Slider,
  Typography,
} from "@mui/material";
import React from "react";

import { YouMight } from "../../data/you-might";
import { ShopCard } from "../home/ShopCard";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import TuneIcon from "@mui/icons-material/Tune";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  accordion: {
    "&:before": {
      display: "none",
    },
  },
});

export const StepOne = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Grid container sx={{ my: 5 }}>
        <Grid item xs={3}>
          <Box sx={{border:1, borderColor:"primary.light", padding:3, borderRadius:8, mr:3}}>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: 2,
                  justifyContent: "space-between",
                }}
              >
                <Typography variant="h6">Filters</Typography>
                <IconButton>
                  <TuneIcon />
                </IconButton>
              </Box>
              <Box>
                <Accordion className={classes.accordion} elevation={0}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    T-shirts
                  </AccordionSummary>
                  <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </AccordionDetails>
                </Accordion>
                <Accordion className={classes.accordion} elevation={0}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                  >
                    Shorts
                  </AccordionSummary>
                  <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </AccordionDetails>
                </Accordion>
                <Accordion className={classes.accordion} elevation={0}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                  >
                    Shirts
                  </AccordionSummary>
                  <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </AccordionDetails>
                  <AccordionActions>
                    <Button>Cancel</Button>
                    <Button>Agree</Button>
                  </AccordionActions>
                </Accordion>

                <Accordion className={classes.accordion} elevation={0}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    Hoddie
                  </AccordionSummary>
                  <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </AccordionDetails>
                </Accordion>
                <Accordion className={classes.accordion} elevation={0}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    Jeans
                  </AccordionSummary>
                  <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </AccordionDetails>
                </Accordion>
                <Divider />
              </Box>
            </Box>
            <Divider />

            <Box>
              <Accordion className={classes.accordion} elevation={0}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography variant="h6">Price</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Slider
                    getAriaLabel={() => "Temperature range"}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                  />
                </AccordionDetails>
              </Accordion>
            </Box>

            <Divider />

            <Box>
              <Accordion className={classes.accordion} elevation={0}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography variant="h6">Colors</Typography>
                </AccordionSummary>

                <AccordionDetails>
                  <IconButton sx={{ backgroundColor: "#00c12b" }}>
                    <CheckOutlinedIcon sx={{ color: "white" }} />
                  </IconButton>
                  <IconButton sx={{ backgroundColor: "#f50606" }}>
                    <CheckOutlinedIcon sx={{ color: "white" }} />
                  </IconButton>
                  <IconButton sx={{ backgroundColor: "#f5dd06" }}>
                    <CheckOutlinedIcon sx={{ color: "white" }} />
                  </IconButton>
                  <IconButton sx={{ backgroundColor: "#f57906" }}>
                    <CheckOutlinedIcon sx={{ color: "white" }} />
                  </IconButton>
                  <IconButton sx={{ backgroundColor: "#06caf5" }}>
                    <CheckOutlinedIcon sx={{ color: "white" }} />
                  </IconButton>

                  <IconButton sx={{ backgroundColor: "#063af5" }}>
                    <CheckOutlinedIcon sx={{ color: "white" }} />
                  </IconButton>

                  <IconButton sx={{ backgroundColor: "#7d06f5" }}>
                    <CheckOutlinedIcon sx={{ color: "white" }} />
                  </IconButton>
                  <IconButton sx={{ backgroundColor: "#f506a4" }}>
                    <CheckOutlinedIcon sx={{ color: "white" }} />
                  </IconButton>

                  <IconButton sx={{ backgroundColor: "#ffffff" }}>
                    <CheckOutlinedIcon sx={{ color: "white" }} />
                  </IconButton>

                  <IconButton sx={{ backgroundColor: "#000000" }}>
                    <CheckOutlinedIcon sx={{ color: "white" }} />
                  </IconButton>
                </AccordionDetails>
              </Accordion>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={9}>
          <Typography variant="h3"> Casual </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: 1,
              flexWrap: "wrap",
            }}
          >
            {YouMight.map((imageInfo) => {
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
          </Box>
          {/* {newArrivals.map((imageInfo) => {
            return (
              <ShopCard
                key={imageInfo.id}
                name={imageInfo.name}
                amount={imageInfo.amount}
                percentage={imageInfo.percentage}
                rating={imageInfo.rating}
                sourceImage={imageInfo.sourceImage}
              />
            );
          })} */}
        </Grid>
      </Grid>
    </>
  );
};

import { useState } from "react";
import { makeStyles } from "@material-ui/styles";

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

import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import TuneIcon from "@mui/icons-material/Tune";

import { ShopCard } from "../home/ShopCard";
import { YouMight } from "../../data/you-might";

const useStyles = makeStyles({
  accordion: {
    "&:before": {
      display: "none",
    },
  },
  colorButton: {
    width: 30,
    height: 30,
  },
  iconColorButton: {
    color: "white",
    fontSize: "small",
  },
});

export const StepOne = () => {
  const classes = useStyles();
  const [value, setValue] = useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Grid container sx={{ my: 5 }}>
        <Grid item xs={3}>
          <Box
            sx={{
              border: 1,
              borderColor: "primary.light",
              padding: 3,
              borderRadius: 8,
              mr: 3,
            }}
          >
            <Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: 2,
                  justifyContent: "space-between",
                  paddingX: 2,
                }}
              >
                <Typography variant="h6">Filters</Typography>
                <IconButton>
                  <TuneIcon />
                </IconButton>
              </Box>
              <Divider sx={{ my: 2 }} />
              <Box>
                <Accordion className={classes.accordion} elevation={0}>
                  <AccordionSummary
                    expandIcon={<KeyboardArrowRightIcon />}
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
                    expandIcon={<KeyboardArrowRightIcon />}
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
                    expandIcon={<KeyboardArrowRightIcon />}
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
                    expandIcon={<KeyboardArrowRightIcon />}
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
                    expandIcon={<KeyboardArrowRightIcon />}
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

            {/* Box contenedor acordion de colores */}
            <Box>
              <Accordion className={classes.accordion} elevation={0}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography variant="h6">Colors</Typography>
                </AccordionSummary>

                <AccordionDetails
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: 1,
                  }}
                >
                  <IconButton
                    className={classes.colorButton}
                    sx={{ backgroundColor: "#00c12b", "&:hover": { backgroundColor: "#00c12b" } }}
                  >
                    {/* <CheckOutlinedIcon className={classes.iconColorButton} />  */}
                  </IconButton>
                  <IconButton
                    className={classes.colorButton}
                    sx={{ backgroundColor: "#f50606", "&:hover": { backgroundColor: "#f50606" } }}
                  >
                    {/* <CheckOutlinedIcon className={classes.iconColorButton} /> */}
                  </IconButton>
                  <IconButton
                    className={classes.colorButton}
                    sx={{ backgroundColor: "#f5dd06", "&:hover": { backgroundColor: "#f5dd06" } }}
                  >
                    {/* <CheckOutlinedIcon className={classes.iconColorButton} /> */}
                  </IconButton>
                  <IconButton
                    className={classes.colorButton}
                    sx={{ backgroundColor: "#f57906", "&:hover": { backgroundColor: "#f57906" } }}
                  >
                    {/* <CheckOutlinedIcon className={classes.iconColorButton} /> */}
                  </IconButton>
                  <IconButton
                    className={classes.colorButton}
                    sx={{ backgroundColor: "#06caf5", "&:hover": { backgroundColor: "#06caf5" } }}
                  >
                    {/* <CheckOutlinedIcon className={classes.iconColorButton} /> */}
                  </IconButton>
                  <IconButton
                    className={classes.colorButton}
                    sx={{ backgroundColor: "#063af5", "&:hover": { backgroundColor: "#063af5" } }}
                  >
                    <CheckOutlinedIcon className={classes.iconColorButton} />
                  </IconButton>
                  <IconButton
                    className={classes.colorButton}
                    sx={{ backgroundColor: "#7d06f5", "&:hover": { backgroundColor: "#7d06f5" } }}
                  >
                    {/* <CheckOutlinedIcon className={classes.iconColorButton} /> */}
                  </IconButton>
                  <IconButton
                    className={classes.colorButton}
                    sx={{ backgroundColor: "#f506a4", "&:hover": { backgroundColor: "#f506a4" } }}
                  >
                    {/* <CheckOutlinedIcon className={classes.iconColorButton} /> */}
                  </IconButton>
                  <IconButton
                    className={classes.colorButton}
                    sx={{ backgroundColor: "#ffffff", "&:hover": { backgroundColor: "#ffffff" }, border:1 }}
                  >
                    {/* <CheckOutlinedIcon sx={{ color: "white" }} /> */}
                  </IconButton>
                  <IconButton
                    className={classes.colorButton}
                    sx={{ backgroundColor: "#000000", "&:hover": { backgroundColor: "#000000" } }}
                  >
                    {/* <CheckOutlinedIcon className={classes.iconColorButton} /> */}
                  </IconButton>
                </AccordionDetails>
              </Accordion>
            </Box>

            <Divider />

            {/* Ini Box botones tamaño */}
            <Box>
              <Accordion className={classes.accordion} elevation={0}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography variant="h6">Size</Typography>
                </AccordionSummary>

                <AccordionDetails
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    flexWrap: "wrap",
                    rowGap: 1,
                  }}
                >
                  <Button variant="contained" color="secondary">
                    XX-Small
                  </Button>
                  <Button variant="contained" color="secondary">
                    X-Small
                  </Button>
                  <Button variant="contained" color="secondary">
                    Small
                  </Button>
                  <Button variant="contained" color="secondary">
                    Medium
                  </Button>
                  <Button variant="contained">Large</Button>
                  <Button variant="contained" color="secondary">
                    X-Large
                  </Button>
                  <Button variant="contained" color="secondary">
                    XX-Large
                  </Button>
                  <Button variant="contained" color="secondary">
                    3X-Large
                  </Button>
                  <Button variant="contained" color="secondary">
                    4X-Large
                  </Button>
                </AccordionDetails>
              </Accordion>
            </Box>
            {/* Fin Box botones tamaño */}
            <Divider />
            {/* Ini Box Dress Style */}
            <Box>
              <Accordion className={classes.accordion} elevation={0}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography variant="h6">T-shirts</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Accordion className={classes.accordion} elevation={0}>
                    <AccordionSummary
                      expandIcon={<KeyboardArrowRightIcon />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                    >
                      Casual
                    </AccordionSummary>
                    <AccordionDetails>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </AccordionDetails>
                  </Accordion>
                  <Accordion className={classes.accordion} elevation={0}>
                    <AccordionSummary
                      expandIcon={<KeyboardArrowRightIcon />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                    >
                      Formal
                    </AccordionSummary>
                    <AccordionDetails>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </AccordionDetails>
                  </Accordion>
                  <Accordion className={classes.accordion} elevation={0}>
                    <AccordionSummary
                      expandIcon={<KeyboardArrowRightIcon />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                    >
                      Party
                    </AccordionSummary>
                    <AccordionDetails>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </AccordionDetails>
                  </Accordion>
                  <Accordion className={classes.accordion} elevation={0}>
                    <AccordionSummary
                      expandIcon={<KeyboardArrowRightIcon />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                    >
                      Gym
                    </AccordionSummary>
                    <AccordionDetails>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </AccordionDetails>
                  </Accordion>
                </AccordionDetails>
              </Accordion>
            </Box>
            {/* Fin Box Dress Style */}
            <Box textAlign="center">
              <Button
                fullWidth
                size="large"
                variant="contained"
                sx={{ "&:hover": { backgroundColor: "black" } }}
              >
                Apply Filter
              </Button>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={9}>
          <Typography variant="h4"> Casual </Typography>
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
        </Grid>
      </Grid>
    </>
  );
};

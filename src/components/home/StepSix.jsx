import { useRef } from "react";

import { Box, IconButton, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { ReviewCard } from "./ReviewCard";
import { happyCustomers } from "../../data/happy-customers";

export const StepSix = () => {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };

  const previous = () => {
    sliderRef.slickPrev();
  };

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
  };

  return (
    <Box sx={{marginBottom:10}}>
      <Typography
        variant="h3"
        mt={8}
        mb={2}
        sx={{
          display: "flex",
          direction: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <strong>OUR HAPPY CUSTOMERS</strong>
        <div style={{ textAlign: "center" }}>
          <IconButton onClick={previous}>
            <ArrowBackIcon>Previous </ArrowBackIcon>
          </IconButton>
          <IconButton onClick={next}>
            <ArrowForwardIcon>Next </ArrowForwardIcon>
          </IconButton>
        </div>
      </Typography>

      <div className="slider-container" >
        <Slider 
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...settings}
        >
          
          {happyCustomers.map((cardInfo) => {
            return (
              <ReviewCard 
                key={cardInfo.id}
                name={cardInfo.name}
                rating={cardInfo.rating}
                description={cardInfo.description}
                 
              />
              
            );
          })}
        </Slider>
      </div>
    </Box>
  );
};

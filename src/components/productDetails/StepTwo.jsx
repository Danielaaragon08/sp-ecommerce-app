import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Button, IconButton, Tab } from "@mui/material";
import React from "react";
import { happyCustomers } from "../../data/happy-customers";
import { ReviewCard } from "../home/ReviewCard";
import AlignVerticalCenterRoundedIcon from "@mui/icons-material/AlignVerticalCenterRounded";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";

export const StepTwo = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Product Details" value="1" />
            <Tab label="Rating & Reviews" value="2" />
            <Tab label="FAQ's" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">Item One</TabPanel>
        <TabPanel value="2">
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <strong>All Reviews</strong>

            <Box>
              <IconButton>
                <AlignVerticalCenterRoundedIcon />
              </IconButton>
              <Button variant="contained" sx={{ ml: 1 }}>
                Latest <ExpandMoreRoundedIcon />{" "}
              </Button>
              <Button color="secondary" variant="contained" sx={{ ml: 1 }}>
                Write a review
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            {happyCustomers.map((cardInfo) => {
              return (
                <ReviewCard
                  key={cardInfo.id}
                  name={cardInfo.name}
                  rating={cardInfo.rating}
                  description={cardInfo.description}
                  datePosted={cardInfo.datePosted}
                />
              );
            })}
          </Box>
        </TabPanel>

        <TabPanel value="3">Item Three</TabPanel>
        <Box textAlign="center" mt={3}>
          <Button
            variant="outlined"
            sx={{
              borderRadius: 8,
              borderColor: "gray",
              backgroundColor: "white",
              mt: 2,
              p: 1,
              color: "black",
              "&:hover": { backgroundColor: "white", borderColor: "#F2F2F2" },
              textTransform: "none",
              width: "20%",
            }}
          >
            Load More Reviews
          </Button>
        </Box>
      </TabContext>
    </Box>
  );
};

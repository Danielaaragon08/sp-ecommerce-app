import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import React from "react";
import { happyCustomers } from "../../data/happy-customers";
import { ReviewCard } from "../home/ReviewCard";

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
          All Reviews
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",     
              gap:2
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
      </TabContext>
    </Box>
  );
};

import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import React from "react";
import {ShopTheme} from "./ShopTheme";

 
export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={ShopTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
 
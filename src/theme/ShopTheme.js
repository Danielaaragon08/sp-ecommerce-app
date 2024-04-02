import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";
 
export const ShopTheme = createTheme({
  palette: {
    primary: {
      main: "#f0f0f0",
      dark: "#666666"
    },
    secondary: {
      main: "#000000",
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    MuiButton:{
      styleOverrides:{
        root:{
          textTransform: "none",
          borderRadius: 50
        }
      }
    }
  }

});
 

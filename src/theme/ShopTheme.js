import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";
 
export const ShopTheme = createTheme({
  palette: {
    primary: {
      main: "#000000",
      dark: "#666666",
      light:"#e6e6e6"
    },
    secondary: {
      main: "#e6e6e6",
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
 

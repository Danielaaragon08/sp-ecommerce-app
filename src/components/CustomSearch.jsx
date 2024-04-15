import { styled } from "@mui/material/styles";

import { InputBase } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 50,
  backgroundColor: "#E1E1E1",
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "black",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
  },
}));

export const CustomSearch = ({ description, isSearch }) => {
  return (
    <Search>
      <SearchIconWrapper>
        {isSearch ? <SearchIcon /> : <SellOutlinedIcon />}
      </SearchIconWrapper>
      <StyledInputBase
        placeholder={description}
        inputProps={{ "aria-label": "search" }}
      />
    </Search>
  );
};

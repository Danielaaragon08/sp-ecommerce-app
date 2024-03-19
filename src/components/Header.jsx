import { useState } from "react";

import { Link } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import { CustomSearch } from "./CustomSearch";


const pages = ["Shop", "on Sale", "New Arrivals", "Brands"];

export const Header = () => {

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorButtonShop, setAnchorButtonShop] = useState(null);
  const open = Boolean(anchorButtonShop);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleClick = (event) => {
    setAnchorButtonShop(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorButtonShop(null);
  };

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: "white" }}>
        <Box sx={{ p: 1, backgroundColor: "black", textAlign: "center" }}>
          <Typography>
            Sing up and get 20% off your first order.{" "}
            <Link color="inherit">Sign Up Now</Link>{" "}
          </Typography>
        </Box>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Inicio Typography de pantalla grande */}
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                font: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "black",
                textDecoration: "none",
                textTransform: "none",
              }}
            >
              SHOP.CO
            </Typography>
            {/* Fin Typography de pantalla grande */}

            {/* Responsive con el menú Icon */}
            <Box
              sx={{ flexGrow: 0, display: { xs: "flex", md: "none" }, mr: 2 }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
              >
                <MenuIcon />
              </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* Inicio Typography de pantalla pequeña */}
            <Typography
              variant="h5"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                textDecoration: "none",
                color: "black",
              }}
            >
              SHOP.CO
            </Typography>
            {/* Fin Typography de pantalla pequeña */}

            {/* Inicio pantalla de menu para vista normal */}
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                sx={{ textTransform: "none", color: "black" }}
              >
                Shop
                <KeyboardArrowDownIcon sx={{ color: "black" }} />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorButtonShop}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose}>Categorias</MenuItem>
                <MenuItem onClick={handleClose}>Precios</MenuItem>
                <MenuItem onClick={handleClose}>Formas de Pago</MenuItem>
              </Menu>

              <Button
                variant="text"
                sx={{ textTransform: "none", color: "black" }}
              >
                On Sale
              </Button>
              <Button
                variant="text"
                sx={{ textTransform: "none", color: "black" }}
              >
                New Arrivals
              </Button>
              <Button
                variant="text"
                sx={{ textTransform: "none", color: "black" }}
              >
                Brands
              </Button>
            </Box>
            <Box sx={{ flexGrow: 4, display: { xs: "none", md: "block" } }}>
              <CustomSearch/>
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <IconButton sx={{ display: { xs: "inline-flex", md: "none" } }}>
                <SearchOutlinedIcon sx={{ color: "black" }} />
              </IconButton>

              <IconButton>
                <ShoppingCartOutlinedIcon sx={{ color: "black" }} />
              </IconButton>
              <IconButton>
                <AccountCircleOutlinedIcon sx={{ color: "black" }} />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

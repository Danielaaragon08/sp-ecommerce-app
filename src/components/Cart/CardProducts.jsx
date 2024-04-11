import { makeStyles } from "@material-ui/styles";
import { PropTypes } from "prop-types";
import { Box, Card, CardMedia, Divider, IconButton, Typography } from "@mui/material";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";

const useStyles = makeStyles({
  root: {
    width: 120,
    height: 120,
    marginRight: 20,
    flexDirection: "column",
    display: "flex",
  },
  media: {
    width: 120,
    height: 120,
  },

  boxContainer: {
    display: "flex",
    justifyContent: "start",
    width: "100%",
  },
});

export const CardProduct = ({ title, size, color, price, sourceImage }) => {
  const classes = useStyles();

  const valorInicialContador = 0;
  const [contador, setContador] = useState(valorInicialContador);
  const handleIncrementClick = () => {
    setContador(contador + 1);
  };

  const handleDecrement = () => {
    if (contador === 0) return;
    setContador(contador - 1);
  };

  const handleReset = () => {
    setContador(valorInicialContador);
  };

  return (
    <>
      <Box className={classes.boxContainer}>
        <Box>
          <Card className={classes.root}>
            <CardMedia className={classes.media} image={sourceImage} />
          </Card>
        </Box>
        
        <Box sx={{ position: "relative", width: "100%" }}>
          <Typography variant="h6" component="h2">
            <strong>{title}</strong>
          </Typography>
          <Typography sx={{ mt: 1 }}> Size:{size}</Typography>
          <Typography sx={{ mb: 1 }}> Color: {color}</Typography>
          <Typography variant="h5">
            <strong>{price}</strong>
          </Typography>
          <IconButton
            sx={{ position: "absolute", top: 0, right: 0 }}
            aria-label="delete"
            
          >
            <DeleteIcon sx={{ color: "red" }} fontSize="inherit" />
          </IconButton>
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              right: 0,
              paddingX: 2,
              backgroundColor: "#e6e6e6",
              borderRadius: 10,
             
            }}
          >
            <IconButton>
              <RemoveOutlinedIcon onClick={handleDecrement} />
            </IconButton>
            <Typography variant="p">{contador}</Typography>
            <IconButton>
              <AddOutlinedIcon onClick={handleIncrementClick} />
            </IconButton>
          </Box>
        </Box>
      </Box>
      
    </>
    
  );
};

CardProduct.propTypes = {
  title: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  sourceImage: PropTypes.string.isRequired,
};

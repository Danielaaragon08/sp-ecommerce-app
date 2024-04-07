import { makeStyles } from "@material-ui/styles";
import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  ImageList,
  ImageListItem,
  Rating,
  Typography,
} from "@mui/material";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { useState } from "react";

const useStyles = makeStyles({
  ratingBox: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "5%",
    marginBottom: 5,
  },
});

export const StepOne = () => {
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

  const classes = useStyles();
  const percentage = 40;
  const amount = 300;
  return (
    <>
      <Box>
        <Typography variant="h6"> {"Home > Shop > Men > T-shirts"} </Typography>
      </Box>
      <Grid container>
        <Grid container item xs={12} md={6} spacing={3}>
          <Grid item xs={12} md={4}>
            <ImageList
              sx={{
                width: "100%",
                Height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
              }}
              cols={1}
            >
              <ImageListItem>
                <img src="/productDetail/t-shirt.png" alt="camiseta" />
              </ImageListItem>
              <ImageListItem>
                <img src="/productDetail/camiseta01.png" alt="camiseta" />
              </ImageListItem>

              <ImageListItem>
                <img src="/productDetail/camiseta02.png" alt="camiseta" />
              </ImageListItem>
            </ImageList>
          </Grid>
          <Grid item xs={12} md={8}>
            <ImageList sx={{ width: "100%", height: "95%" }} cols={1}>
              <ImageListItem>
                <img src="/productDetail/t-shirt.png" alt="camiseta" />
              </ImageListItem>
            </ImageList>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} pl={5} pt={2}>
          <Typography variant="h4">
            <strong>ONE LIFE GRAPHIC T-SHIRT</strong>
          </Typography>
          <Box className={classes.ratingBox} marginY={1}>
            <Rating name="half-rating" defaultValue={4} precision={0.5} />
            <Typography variant="p">{4}</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 1,
            }}
          >
            {percentage ? (
              <Typography variant="h4">
                ${amount - amount * (percentage / 100)}
              </Typography>
            ) : (
              <Typography variant="h4">${amount}</Typography>
            )}

            {percentage && (
              <>
                <Typography
                  variant="h4"
                  sx={{ color: "gray", textDecorationLine: "line-through" }}
                >
                  ${amount}
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    backgroundColor: "#ffebeb",
                    color: "#ff3333",
                    py: 1,
                    px: 2,
                    borderRadius: 4,
                  }}
                >
                  {percentage}%
                </Typography>
              </>
            )}
          </Box>
          <Typography color="primary.dark" marginY={2}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
            labore iste ipsum non quaerat a debitis beatae fugit cumque
            praesentium minus, natus quis ut enim vero numquam modi sunt soluta.
          </Typography>
          <Divider />
          <Box marginY={2}>
            <Typography marginBottom={1}>Select Colors</Typography>
            <Box>
              <IconButton sx={{ backgroundColor: "#554d36" }}>
                <CheckOutlinedIcon sx={{ color: "white" }} />
              </IconButton>
              <IconButton sx={{ backgroundColor: "#314f4a", mx: 2 }}>
                <CheckOutlinedIcon sx={{ color: "white" }} />
              </IconButton>
              <IconButton sx={{ backgroundColor: "#31344f" }}>
                <CheckOutlinedIcon sx={{ color: "white" }} />
              </IconButton>
            </Box>
          </Box>
          <Divider />
          <Box marginY={3}>
            <Typography marginBottom={1}>Choose Size</Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Button size="large" variant="contained" color="secondary">
                Small
              </Button>
              <Button size="large" variant="contained" color="secondary">
                Medium
              </Button>
              <Button size="large" variant="contained" color="primary">
                Large
              </Button>
              <Button size="large" variant="contained" color="secondary">
                X-Large
              </Button>
            </Box>
          </Box>
          <Divider />
          <Grid container>
            <Grid item xs={3}>
              <Box
                marginY={3}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  backgroundColor: "#f0f0f0",
                  borderRadius: 5,
                }}
              >
                <IconButton>
                  <RemoveOutlinedIcon onClick={handleDecrement} />
                </IconButton>
                <button onClick={handleReset}>{contador}</button>
                <IconButton>
                  <AddOutlinedIcon onClick={handleIncrementClick} />
                </IconButton>
              </Box>
            </Grid>
            <Grid item xs={8} marginY={3} ml={2}>
              <Button
                size="large"
                sx={{ borderRadius: 5 }}
                color="primary"
                variant="contained"
                fullWidth
              >
                Add to car
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

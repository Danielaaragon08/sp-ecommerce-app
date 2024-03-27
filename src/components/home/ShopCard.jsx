import { makeStyles } from "@material-ui/styles";
import { PropTypes } from "prop-types";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";

const useStyles = makeStyles({
  root: {
    width: 260,
    height: 390,
    marginRight: 20,
  },
  media: {
    height: 240,
  },
  ratingBox: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "5%",
    marginBottom: 5,
  },
});

export const ShopCard = ({ name, amount, rating, sourceImage, percentage }) => {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={sourceImage}
            title={name}
          />
          <CardContent>
            <Typography variant="h5" component="h2">
              {name}
            </Typography>
            <Box className={classes.ratingBox}>
              <Rating
                name="half-rating"
                defaultValue={rating}
                precision={0.5}
              />
              <Typography variant="p">{rating}</Typography>
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
                <Typography variant="h6">
                  ${amount - amount * (percentage / 100)}
                </Typography>
              ) : (
                <Typography variant="h6">${amount}</Typography>
              )}

              {percentage && (
                <>
                  <Typography
                    variant="h6"
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
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

ShopCard.propTypes = {
  name: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  sourceImage: PropTypes.string.isRequired,
};

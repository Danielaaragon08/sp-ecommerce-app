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
    maxWidth: 240,
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

export const ShopCard = ({ name, amount, rating, sourceImage }) => {
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
            <Typography gutterBottom variant="h5" component="h2">
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
            <Typography gutterBottom variant="h5" component="h2">
              $ {amount}
            </Typography>
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

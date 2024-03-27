import { makeStyles } from "@material-ui/styles";
import { Card, CardContent, Rating, Typography } from "@mui/material";
import { PropTypes } from "prop-types";
import CheckCircleSharpIcon from "@mui/icons-material/CheckCircleSharp";

const useStyles = makeStyles({
  cardCharacteristics: {
    width: 320,
    height: 150,
    borderRadius: 5
  },
  nameCharacteristics: {
    display: "flex",
    alignItems: "center",
  },
});

export const ReviewCard = ({ name, rating, description }) => {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.cardCharacteristics}>
        <CardContent>
          <Rating name="half-rating" defaultValue={rating} precision={0.5} />

          <Typography className={classes.nameCharacteristics} variant="h6">
            {name}
            <CheckCircleSharpIcon sx={{ color: "#01ab31", ml: 1 }} />
          </Typography>

          <Typography color="text.secondary">{description}</Typography>
        </CardContent>
      </Card>
    </>
  );
};

ReviewCard.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

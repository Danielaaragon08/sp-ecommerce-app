import { makeStyles } from "@material-ui/styles";
import { Card, CardContent, Rating, Typography } from "@mui/material";
import { PropTypes } from "prop-types";
import CheckCircleSharpIcon from "@mui/icons-material/CheckCircleSharp";
import { format } from "date-fns";

const useStyles = makeStyles({
  cardCharacteristics: {
    width: 520,
    height: 200,
    borderRadius: 5,
  },
  nameCharacteristics: {
    display: "flex",
    alignItems: "center",
  },
});

let fechaMostrada = null;

export const ReviewCard = ({ name, rating, description, datePosted }) => {
  const classes = useStyles();
  if (datePosted) {
    const fechaFormateada = new Date(datePosted);

    fechaMostrada = format(fechaFormateada, "MMMM d, yyyy");
  }

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
          {datePosted && (
            <Typography sx={{ marginY: 2 }}>
              Posted on {fechaMostrada}
            </Typography>
          )}
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

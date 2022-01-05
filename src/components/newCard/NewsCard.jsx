import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import useStyles from "./style";

function NewsCard({
  article: { description, publishedAt, source, title, url, urlToImage },
  i,
}) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={
            urlToImage ||
            "https://media.istockphoto.com/photos/artificial-intelligence-and-future-concept-picture-id1034901762?k=20&m=1034901762&s=612x612&w=0&h=lMi11KU07iB5QRSpb0M338PnWsxq5Zz_zXIorQeLclk="
          }
        />
        <div className={classes.details}>
          <Typography variant="body2" color="textSecondary" component="h2">
            {new Date(publishedAt).toDateString()}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="h2">
            {source.name}
          </Typography>
        </div>
        <Typography gutterBottom varient="h5" className={classes.title}>
          {title}
        </Typography>
        <CardContent>
          <Typography varient="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardAction}>
        <Button size="small" color="primary">
          Learn More
        </Button>
        <Typography variant="h5" color="textSecondary">
          {i + 1}
        </Typography>
      </CardActions>
    </Card>
  );
}

export default NewsCard;

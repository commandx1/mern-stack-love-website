import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Hidden from "@material-ui/core/Hidden";
import ReactHtmlParser from "react-html-parser";
import { NavLink } from "react-router-dom";
import { REACT_APP_BACKEND_URL, REACT_APP_ASSET_URL} from '../../../env_variables'

const useStyles = makeStyles({
  card: {
    display: "flex",
    height: 330,
  },
  cardDetails: {
    flex: 1,
    overflow: "auto",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  cardMedia: {
    width: 160,
    maxHeight: "100%",
    "& img": {
      maxHeight: "100%",
    },
  },
  NavLink: {
    textDecoration: "none",
    "& h6": {
      textDecoration: "underline",
    },
    "& h6:hover": {
      color: "red",
    }
  },
});

export default function FeaturedPost({ post, image, route }) {
  const classes = useStyles();
  return (
    <Grid item xs={12} md={6}>
      <Card className={classes.card}>
        <div className={classes.cardDetails}>
          <CardContent>
            <Typography component="h2" variant="h5">
              {post.title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {post.date}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {ReactHtmlParser(post.content.substr(0, 300))}
            </Typography>
            <NavLink
              className={classes.NavLink}
              to={`${route}/postId/${post._id}/Başlık/${post.title}`}
            >
              <Typography variant="subtitle1" color="primary">
                Devamını oku...
              </Typography>
            </NavLink>
          </CardContent>
        </div>
        <Hidden xsDown>
          <CardMedia className={classes.cardMedia}>
            <img src={`${REACT_APP_ASSET_URL}/${image}`} alt={post.title} />
          </CardMedia>
        </Hidden>
      </Card>
    </Grid>
  );
}

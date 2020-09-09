import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import CardActionArea from "@material-ui/core/CardActionArea";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Hidden from "@material-ui/core/Hidden";
import ReactHtmlParser from "react-html-parser";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root:{
    '& a': {
      textDecoration:'none'
    },
    '& a:active':{
      color:"gray"
    }
  },
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
  Link: {
    textDecoration: "none",
    "& h6": {
      textDecoration: "underline",
    },
    "& h6:hover": {
      color: "red",
    },
  },
  ul: {
    '& ul': {
      width: '90%',
      margin: '0 auto'
    }
  }
});

export default function FeaturedPost({ post, image, route }) {
  const classes = useStyles();
  return (
    <Grid item xs={12} md={6} className={classes.root}>
      <Link to={`${route}/postId/${post._id}/Başlık/${post.title}`}>
        <CardActionArea component='div'>
          <Card className={classes.card}>
            <div className={classes.cardDetails}>
              <CardContent>
                <Typography component="h2" variant="h5">
                  {post.title}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {post.date}
                </Typography>
                <Typography variant="subtitle1" paragraph className={classes.ul}>
                  {ReactHtmlParser(post.content.substr(0, 300))}
                </Typography>
                <Typography variant="subtitle1" color="primary">
                  Devamını oku...
                </Typography>
              </CardContent>
            </div>
            {image ? (
              <Hidden xsDown>
                <CardMedia
                  className={classes.cardMedia}
                  image={`${process.env.REACT_APP_ASSET_URL}/${image}`}
                  title={post.title}
                />
              </Hidden>
            ) : null}
          </Card>
        </CardActionArea>
      </Link>
    </Grid>
  );
}

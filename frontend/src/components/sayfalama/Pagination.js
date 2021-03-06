import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
      '& ul li button': {
        color: 'white'
      }
    },
  },
}));

export default function BasicPagination(props) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(props.totalPosts / props.postsPerPage); i++) {
    pageNumbers.push(i);
  }
  const classes = useStyles();
  return (
    <div style={props.style} className={classes.root}>
      <Pagination onChange={(e,value) => props.paginate(value)} count={pageNumbers.length} color="secondary" />
    </div>
  );
}

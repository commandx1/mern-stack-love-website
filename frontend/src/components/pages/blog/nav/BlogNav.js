import React from "react";
import { makeStyles, Typography, Toolbar } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: "space-between",
    overflowX: "auto",
    backgroundColor: "rgba(250,250,250, .5)",
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
    textDecoration:"none",
    color:"#0E6EE1",
    "& a": {
      textDecoration:"none",
    },
    "& a:hover": {
      textDecoration: "none"
    },
    "&:hover":{
      color:"#4B8EDF",
    }
  },
}));


export default function Header(props) {
  const classes = useStyles()


  return (
    <React.Fragment>
      <div className={classes.toolbar} />
      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      >
        {!props.isLoading && props.categories.length > 0 &&
        props.categories.map((section, index) => (
          <NavLink key={index} className={classes.toolbarLink} to={`${props.route.path}/kategori/${section.label}`}>
            <Typography
              color="inherit"
              noWrap
              key={section.title}
              variant="body2"
            >
              {section.label}
            </Typography>
          </NavLink>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

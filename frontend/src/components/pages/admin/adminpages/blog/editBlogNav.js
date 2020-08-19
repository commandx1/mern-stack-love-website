import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "@material-ui/core/Link";
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

export default function EditBlogNav(props) {
  const classes = useStyles();
  

  return (
    <React.Fragment>
      <div className={classes.toolbar} />
      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      >
        {props.categories.map(section => (
          <NavLink key={section._id} className={classes.toolbarLink} to={`${props.route.path}/${section.label}`}>
            <Link
              color="inherit"
              noWrap
              key={section.title}
              variant="body2"
            >
              {section.label}
            </Link>
          </NavLink>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}
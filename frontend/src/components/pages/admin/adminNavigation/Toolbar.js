import React from "react";
import DrawerToggleButton from "./DrawerToggleButton";
import makeStyles from "@material-ui/styles/makeStyles";
import { NavLink, useRouteMatch } from "react-router-dom";

import "./Toolbar.css";
import NavButtons from "./ToolbarLinks/NavButtons";

const useStyles = makeStyles({
  toolbar: {
    backgroundColor: "rgba(100, 120, 200, .7)",
  },
});
const Toolbar = (props) => {
  const route = useRouteMatch();
  const classes = useStyles();

  return (
    <header className={`toolbar ${classes.toolbar}`}>
      <nav className="toolbar-navigation">
        <div className="toolbar-toggle__button">
          <DrawerToggleButton
            drawerToggleClickHandler={props.drawerToggleClickHandler}
          >
            Admin Menu
          </DrawerToggleButton>
        </div>
        <div className="toolbar-navigation-items">
          <ul>
            <NavButtons name="Hakkımızda"/>
            <NavButtons name="Şiir"/>
            <NavButtons name="Masal"/>
            <NavButtons name="Fotoğraf"/>
            <NavButtons name="Blog"/>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Toolbar;

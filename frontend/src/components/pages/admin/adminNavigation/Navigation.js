import React, {useState} from "react";
import Toolbar from "./Toolbar";
import SideDrawer from "./SideDrawer";
import Backdrop from "../../../backdrop/backdrop";
import { makeStyles } from "@material-ui/styles";


const useStyles = makeStyles({
  content: {
    // marginTop:"64px",
    height:"100%",
    width: "100%",
  }
})

const MainNavigation = props => {
  const classes = useStyles();
  const [sideDrawerOpen, setsideDrawerOpen] = useState(false);

  const drawerToggleClickHandler = () => {
    setsideDrawerOpen(true);
  }

  const backdropClickHandler = () => {
    setsideDrawerOpen(false);
  }

  let backdrop;

  if(sideDrawerOpen) {
    backdrop = <Backdrop backdropClickHandler={backdropClickHandler}/>
  }

  return (
    <React.Fragment>
      <Toolbar drawerToggleClickHandler={drawerToggleClickHandler}/>
      <SideDrawer backdropClickHandler={backdropClickHandler} show={sideDrawerOpen}/>
      {backdrop}
      <main className={classes.content}>
        {props.children}
      </main>
    </React.Fragment>
  );
}

export default MainNavigation;

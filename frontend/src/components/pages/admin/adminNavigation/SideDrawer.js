import React from "react";
import "./SideDrawer.css";
import NavButtons from './ToolbarLinks/NavButtons'

const SideDrawer = (props) => {
  let drawerClasses = "side-drawer";

  if (props.show) {
    drawerClasses = "side-drawer open";
  }

  return (
    <nav className={drawerClasses}>
      <ul>
        <NavButtons backdropClickHandler={props.backdropClickHandler} name="Hakkımızda" />
        <NavButtons backdropClickHandler={props.backdropClickHandler} name="Şiir" />
        <NavButtons backdropClickHandler={props.backdropClickHandler} name="Masal" />
        <NavButtons backdropClickHandler={props.backdropClickHandler} name="Fotoğraf" />
        <NavButtons backdropClickHandler={props.backdropClickHandler} name="Blog" />
      </ul>
    </nav>
  );
};

export default SideDrawer;

import React, { Fragment } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { NavLink, useRouteMatch } from "react-router-dom";

const Siir = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const route = useRouteMatch();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Fragment>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        className="admin-nav-links"
      >
        {props.name}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {" "}
        <div onClick={props.backdropClickHandler}>
          <MenuItem onClick={handleClose}>
            <NavLink
              className="admin-nav-links dropdown-links"
              to={`${route.path}/${props.name}-ekle`}
            >
              {props.name} Ekle
            </NavLink>
          </MenuItem>{" "}
        </div>
        <div onClick={props.backdropClickHandler}>
          {" "}
          {props.name !== "Fotoğraf" &&
          <MenuItem onClick={handleClose}>
            <NavLink
              className="admin-nav-links dropdown-links"
              to={`${route.path}/${props.name}-düzenle`}
            >
              {props.name} Düzenle
            </NavLink>
          </MenuItem>}
        </div>
      </Menu>
    </Fragment>
  );
};

export default Siir;

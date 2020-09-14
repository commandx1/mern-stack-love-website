import React, { useEffect } from "react";
import MainNavigation from "./adminNavigation/Navigation";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Route, useRouteMatch } from "react-router-dom";
import InsertAbout from "./adminpages/about/InsertAbout";
import InsertPoem from "./adminpages/poems/InsertPoem";
import InsertTelltale from "./adminpages/telltales/InsertTelltale";
import EditablePoems from "./adminpages/poems/EditablePoems";
import EditableAbout from "./adminpages/about/EditableAbouts";
import InserPhotoGallery from "./adminpages/galeri/InserPhotoGallery";
import InsertBlog from "./adminpages/blog/insertBlog";
import EditTelltales from "./adminpages/telltales/editTelltales";
import "./admin.css";
import EditBlog from "./adminpages/blog/editBlog";

const Admin = () => {
  const match = useMediaQuery("(max-width:769px)");
  const route = useRouteMatch();

  useEffect(() => {
    document.querySelector(".push").style.height = 0;
    return () => {
      document.querySelector(".push").style.height = "150px";
    };
  }, []);

  return (
    <MainNavigation>
      <div id="admin">
        <div className="admin__content">
          <Route path={`${route.path}/Hakkımızda-ekle`}>
            <InsertAbout />
          </Route>
          <Route path={`${route.path}/Şiir-ekle`}>
            <InsertPoem />
          </Route>
          <Route path={`${route.path}/Şiir-düzenle`}>
            <EditablePoems />
          </Route>
          <Route path={`${route.path}/Hakkımızda-düzenle`}>
            <EditableAbout />
          </Route>
          <Route path={`${route.path}/Masal-ekle`}>
            <InsertTelltale />
          </Route>
          <Route path={`${route.path}/Masal-düzenle`}>
            <EditTelltales />
          </Route>
          <Route path={`${route.path}/Blog-düzenle`}>
            <EditBlog />
          </Route>
          <Route path={`${route.path}/Fotoğraf-ekle`}>
            <InserPhotoGallery />
          </Route>
          <Route path={`${route.path}/Blog-ekle`}>
            <InsertBlog />
          </Route>
        </div>
      </div>
    </MainNavigation>
  );
};
export default Admin;

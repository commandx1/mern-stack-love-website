import React, { useEffect, useCallback, useState } from "react";
import { authContext } from "./WRAPPERS/Context/myContext";
import "./App.css";
import PageContent from "./WRAPPERS/PageContent";
import Logo from "./components/logo/Logo";
import Footer from "./components/footer/Footer";
import MenuButton from "./components/navigation/MenuButton";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/pages/Login";
import Homepage from "./components/pages/homepage/Homepage";
import NotFound from "./components/pages/notfound/Notfound";
import Scrolltop from "./components/ScrollTop/Scrolltop";
import Masallar from "./components/pages/masallar/Masallar";
import About from "./components/pages/hakkımızda/About";
import Gallery from "./components/pages/galeri/Gallery";
import Siirler from "./components/pages/şiir/Siirler";
import Memories from "./components/memories/Memories";
import Admin from "./components/pages/admin/Admin";
import BlogPage from "./components/pages/blog/BlogPage";
import MainGallery from "./components/pages/galeri/MainGallery";
import MyGallery from "./components/pages/galeri/MyGallery";

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [userId, setuserId] = useState();
  const [name, setName] = useState();

  let deger;
  let autoLogin;
  let username;

  useEffect(() => {
    if (localStorage.getItem("id")) {
      autoLogin = localStorage.getItem("id");
      username = localStorage.getItem("name");
      login(autoLogin, username);
    } else if (sessionStorage.getItem("id")) {
      deger = sessionStorage.getItem("id");
      username = sessionStorage.getItem("name");
      login(deger, username);
    }
  });

  const login = useCallback((uid,name) => {
    setisLoggedIn(true);
    setuserId(uid);
    setName(name)
  }, []);

  const logout = useCallback(() => {
    setisLoggedIn(false);
    setuserId(null);
    setName(null)
  }, []);

  let routes;

  routes = isLoggedIn ? (
    <Switch>
      <Route path="/" exact>
        <Logo />
        <Homepage />
      </Route>
      <Route path="/Blog">
        <Logo />
        <BlogPage />
      </Route>
      <Route path="/Admin">
        <Admin />
      </Route>
      <Route path="/Anılar">
        <Logo />
        <Memories />
      </Route>
      <Route exact path="/Şiirler">
        <Logo />
        <Siirler />
      </Route>
      <Route exact path="/Galeri">
        <Logo />
        <MainGallery />
      </Route>
      <Route exact path="/Hakkımızda">
        <Logo />
        <About />
      </Route>
      <Route path="/Masallar">
        <Logo />
        <Masallar />
      </Route>
      <Route exact path="*">
        <Logo />
        <NotFound />
      </Route>
    </Switch>
  ) : (
    <Switch>
      <Route path="/" exact>
        <Logo />
        <Homepage />
      </Route>
      <Route exact path="/Login">
        <Logo />
        <Login />
      </Route>
      <Route path="/Masallar">
        <Logo />
        <Masallar />
      </Route>
      <Route exact path="*">
        <Logo />
        <NotFound />
      </Route>
    </Switch>
  );

  return (
    <div className="App">
      <PageContent>
        <authContext.Provider value={{ isLoggedIn,userId, name, login, logout }}>
          <BrowserRouter>
            <MenuButton />
            {routes}
          </BrowserRouter>
          <Scrolltop />
          <Footer />
        </authContext.Provider>
      </PageContent>
      <div className="push"></div>
      <div className="push"></div>
      <div className="push"></div>
    </div>
  );
}

export default App;

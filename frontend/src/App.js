import React, {
  useEffect,
  useCallback,
  useState,
  Suspense,
  useContext,
} from "react";
import { authContext } from "./WRAPPERS/Context/myContext";
import "./App.css";
import PageContent from "./WRAPPERS/PageContent";
import Logo from "./components/logo/Logo";
import Footer from "./components/footer/Footer";
import MenuButton from "./components/navigation/MenuButton";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Scrolltop from "./components/ScrollTop/Scrolltop";
import Spinner from "./components/spinner/Spinner";

const Login = React.lazy(() => import("./components/pages/Login"));
const Homepage = React.lazy(() =>
  import("./components/pages/homepage/Homepage")
);
const NotFound = React.lazy(() =>
  import("./components/pages/notfound/Notfound")
);
const Masallar = React.lazy(() =>
  import("./components/pages/masallar/Masallar")
);
const About = React.lazy(() => import("./components/pages/hakkımızda/About"));
const MainGallery = React.lazy(() =>
  import("./components/pages/galeri/MainGallery")
);
const Siirler = React.lazy(() => import("./components/pages/şiir/Siirler"));
const Memories = React.lazy(() => import("./components/memories/Memories"));
const Admin = React.lazy(() => import("./components/pages/admin/Admin"));
const BlogPage = React.lazy(() => import("./components/pages/blog/BlogPage"));

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

  const login = useCallback((uid, name) => {
    setuserId(uid);
    setName(name);
    setisLoggedIn(true);
    document.getElementById("root").style.height = "auto";
    document.querySelector(".push").style.display = "block";
  }, []);

  const logout = useCallback(() => {
    document.getElementById("root").style.height = "100%";
    document.querySelector(".push").style.display = "none";
    setuserId(null);
    setName(null);
    setisLoggedIn(false);
  }, []);

  let routes;
  const now = new Date();

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
      <Route exact path="/">
        <Logo />
        <Login />
      </Route>
      <Route exact path="*">
        <Logo />
        <NotFound />
      </Route>
    </Switch>
  );

  return (
    <>
      <PageContent>
        <authContext.Provider
          value={{ isLoggedIn, userId, name, login, logout }}
        >
          <BrowserRouter>
            <MenuButton />
            <Suspense
              fallback={
                <div>
                  <Spinner />
                </div>
              }
            >
              {routes}
            </Suspense>
          </BrowserRouter>
          <Scrolltop />
        </authContext.Provider>
      </PageContent>
      <div className="push" />
      <Footer />
    </>
  );
}

export default App;

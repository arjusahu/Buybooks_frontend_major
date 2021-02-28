import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { Route, Switch } from "react-router-dom";
import Footer from "./Footer";
import Home from "./pages/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Aboutus from "./components/Aboutus";
import Contactus from "./components/Contactus";
import AfterLogin from "./pages/AfterLogin";
import Contactus2 from "./pages/AfterLogin/pages/Contactus2";
import Aboutus2 from "./pages/AfterLogin/pages/Aboutus2";
import Blog from "./pages/AfterLogin/pages/Blog";
import Buybooks from "./pages/AfterLogin/pages/Buybooks";
import Afterbuy from "./pages/AfterLogin/pages/Afterbuy";
import Checkout from "./pages/AfterLogin/pages/Checkout";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/aboutus" component={Aboutus} />
        <Route exact path="/contactus" component={Contactus} />
        <Route exact path="/afterlogin" component={AfterLogin} />
        <Route exact path="/contactus2" component={Contactus2} />
        <Route exact path="/aboutus2" component={Aboutus2} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/buybooks" component={Buybooks} />
        <Route exact path="/afterbuy" component={Afterbuy} />
        <Route exact path="/checkout" component={Checkout} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

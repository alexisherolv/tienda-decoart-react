import React from "react";
import './styles/App.css';
import "./styles/navbar.css";
import "./styles/artesanos.css";
import "./styles/footer.css";
import "./styles/main.css";
import "./styles/getinfo.css";
import "./styles/producto.css";
import "./styles/cart.css";
import "./styles/slides.css";
import "./styles/contacto.css";
import "./styles/somos.css";
import "./styles/interiorismo.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AllProducts from "./pages/AllProducts";
import Somos from "./pages/Somos";
import Contacto from "./pages/Contacto";
import Interiorismo from "./pages/Interiorismo";
import Buscar from "./pages/Buscar";
import Producto from "./pages/Producto";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { CartProvider } from "react-use-cart";
require('dotenv').config();

function App() {

  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/todos-los-productos" component={AllProducts} />
              <Route exact path="/somos" component={Somos} />
              <Route exact path="/contacto" component={Contacto} />
              <Route exact path="/interiorismo" component={Interiorismo} />
              <Route path="/buscar/:buscarId">
                <Buscar />
              </Route>
              <Route path="/producto/:productoId/">
                <Producto />
              </Route>
              <Route exact path="/lista-de-deseos" component={Wishlist} />
              <Route exact path="/carrito-de-compras" component={Cart} />
              <Route exact path="/sign-in" component={SignIn} />
              <Route exact path="/sign-up" component={SignUp} />
              <Route exact path="/profile" component={Profile} />
            </Switch>
          </div>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;

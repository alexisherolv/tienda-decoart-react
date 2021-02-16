import React from "react";
import './App.css';
import "./styles/navbar.css";
import "./styles/artesanos.css";
import "./styles/footer.css";
import "./styles/main.css";
import "./styles/getinfo.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Home";
import AllProducts from "./AllProducts";
import Somos from "./Somos";
import Contacto from "./Contacto";
import Interiorismo from "./Interiorismo";
import Buscar from "./Buscar";
import Producto from "./Producto";
import Wishlist from "./Wishlist";
import Cart from "./Cart";

import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/todos-los-productos" component={AllProducts} />
            <Route exact path="/somos" component={Somos} />
            <Route exact path="/contacto" component={Contacto} />
            <Route exact path="/interiorismo" component={Interiorismo} />
            <Route path="/buscar/:buscarId/">
              <Buscar />
            </Route>
            <Route path="/producto/:productoId/">
              <Producto />
            </Route>
            <Route exact path="/lista-de-deseos" component={Wishlist} />
            <Route exact path="/carrito-de-compras" component={Cart} />
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

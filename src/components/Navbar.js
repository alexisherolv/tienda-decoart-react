import React, { useState, useEffect } from "react";
import Logo from "./images/INTERIORISMO-LOGO-1.png";
import Lupa from "./images/lupa.svg";
import Corazon from "./images/corazon.svg";
import Carrito from "./images/carrito-de-compras.svg";
import Usuario from "./images/usuario.svg";
import Buscador from "./Buscador";

import { Link } from "react-router-dom";

function Navbar() {
    const [search, setSearch] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [buscador, setBuscador] = useState();

    const handleScroll=() => {
        const offset=window.scrollY;
        if(offset > 56 ){
          setScrolled(true);
        }
        else{
          setScrolled(false);
        }
      }

    useEffect(() => {
        window.addEventListener('scroll',handleScroll)
    },[])

    let navbarClasses=["navbar", "fixed-top", "navbar-expand-lg"];
    if(scrolled){
        navbarClasses.push('scrolled');
    }
    
    function onChangeSearch(event) {
        //setSearch(event.target.value);
        console.log(search)
        if(search===false){
            setSearch(true);
            setBuscador(
                <Buscador />
            );
        }
        else{
            setSearch(false);
            setBuscador();
        }
    }

    return (
        <div>
            <nav className = {navbarClasses.join(" ")}>
                <Link className="navbar-brand logo" aria-current="page" to="/">
                        <img src={Logo} width="170" height="70" alt="Decoart Interiorismo" />
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto ">
                    <li className="nav-item active">
                        <Link className="nav-link active" aria-current="page" to="/">
                            HOME
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/somos">
                            SOMOS
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/todos-los-productos">
                            PRODUCTOS
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/interiorismo">
                            INTERIORISMO
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/contacto">
                            CONTACTO
                        </Link>
                    </li>
                </ul>
                <section>
                    {buscador}
                </section>
                <form className="form-inline my-2 my-lg-0 actions justify-content-end">
                    <img src={Lupa} className = "zoom" width="20" height="20" alt="..." onClick={onChangeSearch}/>
                    <Link className="nav-link active" aria-current="page" to="/lista-de-deseos">
                        <img src={Corazon} className = "zoom" width="20" height="20" alt="..." />
                    </Link>
                    <Link className="nav-link active" aria-current="page" to="/sign-in">
                        <img src={Usuario} className = "zoom" width="20" height="20" alt="..." />
                    </Link>
                    <Link className="nav-link active" aria-current="page" to="/carrito-de-compras">
                        <img src={Carrito} className = "zoom" width="20" height="20" alt="..." />
                    </Link>
                </form>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
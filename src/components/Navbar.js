import React, { useState, useEffect } from "react";
import Buscador from "./Buscador";
import { Link } from "react-router-dom";
import { CartProvider, useCart } from "react-use-cart";

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
    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
    } = useCart();

    useEffect(() => {
        window.addEventListener('scroll',handleScroll)
    },[])

    let navbarClasses=["navbar", "fixed-top", "navbar-expand-lg", "navbar-dark"];
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
                        <img src={process.env.PUBLIC_URL + '/images/INTERIORISMO-LOGO-1.png'} width="170" height="70" alt="Decoart Interiorismo" />
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
                <form className="form-inline my-2 my-lg-0 actions justify-content-center">
                    <img src={process.env.PUBLIC_URL + '/images/lupa.svg'} className = "zoom" width="20" height="20" alt="..." onClick={onChangeSearch}/>
                    <Link className="nav-link active iconos" aria-current="page" to="/lista-de-deseos">
                        <img src={process.env.PUBLIC_URL + '/images/corazon.svg'} className = "zoom" width="20" height="20" alt="..." />
                    </Link>
                    <Link className="nav-link active iconos" aria-current="page" to="/sign-in">
                        <img src={process.env.PUBLIC_URL + '/images/usuario.svg'} className = "zoom" width="20" height="20" alt="..." />
                    </Link>
                    <div className="carrito">
                        <Link className="nav-link active iconos" aria-current="page" to="/carrito-de-compras">
                            <img src={process.env.PUBLIC_URL + '/images/carrito-de-compras-2.svg'} className = "zoom" width="22" height="22" alt="..." />
                            <div class="texto-encima justify-content-end">{items.length}</div>
                        </Link>
                        
                    </div>
                </form>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
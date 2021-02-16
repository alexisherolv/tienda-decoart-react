import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function Buscador(){
    const [buscador, setBuscador] = useState("");

    const history = useHistory();

    function onClickBuscar(event) {
        event.preventDefault();
        history.push(`/buscar/${buscador}/`);
    }

    function onChangeBuscador(event) {
        setBuscador(event.target.value);
        console.log(buscador);
    }
    
    return(
        <section>
            <form className="formato-buscar">
                <input 
                    className="busca-algo" 
                    type="text" 
                    placeholder=""
                    onChange = {onChangeBuscador}/>
                <button 
                    className="boton-busca-algo"
                    onClick={onClickBuscar}> Buscar </button>
            </form>
        </section>
    );
}
import React from "react";
import { useHistory } from "react-router-dom";
import "./producto.css";

export default function Card(props){
    const history = useHistory();

    function onClickProduct() {
        history.push(`/producto/${props.id}/`);
    }

    return(
        <div class="col-sm producto1">
            <div className="card border-0 margin-0" onClick={onClickProduct}>
                <div className = "row parejo">
                    <div className="card-body col col-lg-9">
                        <h6 className="card-title">{props.nombre}</h6>
                        <p className="card-text">{props.precio}</p>
                    </div>
                    <div className="col col-lg-3 etiqueta">
                        {props.etiqueta}
                    </div>
                </div>
                <div className = "img-prod">
                    <img src={props.imagen} className="card-img-top" alt="..."/>
                </div>
                <div className="card-body">
                    <p className="card-text">{props.id}</p>
                </div>
            </div>
        </div>
    );
}
/*<div className="card border-0" style="width: 18rem;">
<div className = "row parejo">
<div className="card-body col col-lg-9">
    <h6 className="card-title">{props.producto.nombre}</h6>
    <p className="card-text">{props.precio}</p>
</div>
<div className="col col-lg-3 etiqueta">
    {props.etiqueta}
</div>
</div>
<div className = "img-prod">
<img src={props.imagen} className="card-img-top" alt="..."/>
</div>
<div className="card-body">
<p className="card-text">{props.id}</p>
</div>
</div>*/
import React, { useState, useEffect } from "react";
import Slides from "../components/Slides";
import { Link, useHistory } from "react-router-dom";

export default function () {
  const token = localStorage.getItem("token");
  const tipo = localStorage.getItem("tipo");
  const history = useHistory();

  useEffect(function () {
    if(token === null || tipo !== "administrador")
    {
      history.push("/")
      return;
    }
  }, []);

  function logout() {
    localStorage.removeItem("tipo");
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    history.push("/sign-in");
  }

  return (
    <>
      <Slides imagen={process.env.PUBLIC_URL + '/images/minislide-admin.png'}></Slides>
      <section className="container admin">
        <h1>Area del administrador</h1>
        <div class="form-group d-flex justify-content-center">
          <button
            type="button"
            class=" boton-logout"
            onClick={logout}
          >
            Cerrar sesión
          </button>
        </div>
      </section>
    </>
  );
}
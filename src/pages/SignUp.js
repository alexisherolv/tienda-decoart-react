import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Slides from "../components/Slides";
import "../styles/signin.css";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [direccion, setDireccion] = useState("");
  const history = useHistory();

  function onChangeUsername(event) {
    setUsername(event.target.value);
  }

  function onChangeNombre(event) {
    setNombre(event.target.value);
  }

  function onChangeApellido(event) {
    setApellido(event.target.value);
  }

  function onChangePassword(event) {
    setPassword(event.target.value);
    console.log(password);
  }

  function onChangeEmail(event) {
    setEmail(event.target.value);
  }

  function onChangeDireccion(event) {
    setDireccion(event.target.value);
  }

  function onSubmitForm(event) {
    event.preventDefault();

    let newUser = {
        username: username,
        nombre: nombre,
        apellido: apellido,
        email: email,
        password: password,
        direccion: direccion,
        tipo: "cliente"
    };

    console.log("La contraseña es: " + newUser.password)

    // JSON.stringify es una función que convierte un Object a un String
    fetch(`http://localhost:5001/v1/usuarios/`, {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then((response) => response.json())
    .then((data) => {
      if (data.errors) {
        alert("Ocurrió un error");
      } else {
        alert("Gracias por registrarte");
          // El usuario se registró de manera exitosa
          // y es redirijido a la página de inicio de sesión
          history.push("/sign-in");
      }
    });
  }

  return (
      <>
        <Slides imagen={process.env.PUBLIC_URL + '/images/S12.png'}/>
        <div className="container">
          <div className="row justify-content-center">
          <form className="col-sm-8 mt-4" onSubmit={onSubmitForm}>
              <h1 className="title">Registrarse</h1>
              <p className="need">
              <Link className="need-account" to="/sign-in">
                  ¿Ya tienes una cuenta?
              </Link>
              </p>

              <div className="form-group">
              <label for="inputUsername"></label>

              <input
                  type="text"
                  className="form-control form-control-lg inputs"
                  id="inputUsername"
                  name="username"
                  formControlName="username"
                  aria-describedby="usernameHelp"
                  placeholder="Username"
                  onChange={onChangeUsername}
              />
              </div>
              <div className="form-group">
              <label for="inputNombre"></label>
              <input
                  type="text"
                  className="form-control form-control-lg inputs"
                  id="inputNombre"
                  name="nombre"
                  formControlName="nombre"
                  aria-describedby="nombreHelp"
                  placeholder="Nombre"
                  onChange={onChangeNombre}
              />
              </div>

              <div className="form-group">
              <label for="inputApellido"></label>
              <input
                  type="text"
                  className="form-control form-control-lg inputs"
                  id="inputApellido"
                  name="apellido"
                  formControlName="apellido"
                  aria-describedby="apellidoHelp"
                  placeholder="Apellido"
                  onChange={onChangeApellido}
              />
              </div>

              <div className="form-group">
              <label for="inputDireccion"></label>
              <input
                  type="text"
                  className="form-control form-control-lg inputs"
                  id="inputDireccion"
                  name="direccion"
                  formControlName="direccion"
                  aria-describedby="direccionHelp"
                  placeholder="Direccion"
                  onChange={onChangeDireccion}
              />
              </div>

              <div className="form-group">
              <label for="inputEmail"></label>

              <input
                  type="email"
                  className="form-control form-control-lg inputs"
                  id="inputEmail"
                  name="email"
                  formControlName="email"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                  onChange={onChangeEmail}
              />
              </div>
              <div className="form-group">
              <label for="inputPassword"></label>

              <input
                  type="password"
                  className="form-control form-control-lg inputs"
                  id="inputPassword"
                  name="password"
                  formControlName="password"
                  placeholder="Password"
                  onChange={onChangePassword}
              />
              </div>
              <div className="form-group d-flex">
              <button type="submit" className="boton-iniciar">
                  Registrarse
              </button>
              </div>
          </form>
          </div>
        </div>
    </>
  );
}
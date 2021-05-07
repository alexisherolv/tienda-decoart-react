import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Slides from "../components/Slides";
import Slide from "../components/images/S12.png";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  function onChangePassword(event) {
    setPassword(event.target.value);
  }

  function onChangeEmail(event) {
    setEmail(event.target.value);
  }

  function onSubmitForm(event) {
    event.preventDefault();

    let user = {
      user: {
        email: email,
        password: password
      }
    };

    history.push("/feed");
  }

  return (
    <>
        <Slides imagen={Slide}></Slides>
        <div className="row justify-content-center">
        <form className="col-sm-8 mt-4" onSubmit={onSubmitForm}>
            <h1 className="text-center">Iniciar Sesión</h1>
            <p className="text-center">
            <Link className="need-account" to="/sign-up">
                ¿Necesitas una cuenta?
            </Link>
            </p>

            <div className="form-group">
            <label for="inputEmail"></label>

            <input
                type="email"
                className="form-control form-control-lg"
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
                className="form-control form-control-lg"
                id="inputPassword"
                name="password"
                formControlName="password"
                placeholder="Password"
                onChange={onChangePassword}
            />
            </div>
            <div className="form-group d-flex justify-content-end">
            <button type="submit" className="btn btn-success mt-3 btn-lg">
                Sign in
            </button>
            </div>
        </form>
        </div>
    </>
  );
}
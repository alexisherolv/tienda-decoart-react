import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Slides from "../components/Slides";
import Slide12 from "../components/images/S12.png";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  function onChangeUsername(event) {
    setUsername(event.target.value);
  }

  function onChangePassword(event) {
    setPassword(event.target.value);
  }

  function onChangeEmail(event) {
    setEmail(event.target.value);
  }

  function onSubmitForm(event) {
    event.preventDefault();

    let newUser = {
      user: {
        username: username,
        email: email,
        password: password
      }
    };
  }

  return (
      <>
        <Slides imagen={Slide12}/>
        <div className="row justify-content-center">
        <form className="col-sm-8 mt-4" onSubmit={onSubmitForm}>
            <h1 className="text-center">Registrarse</h1>
            <p className="text-center">
            <Link className="need-account" to="/sign-in">
                ¿Ya tienes una cuenta?
            </Link>
            </p>

            <div className="form-group">
            <label for="inputUsername"></label>

            <input
                type="text"
                className="form-control form-control-lg"
                id="inputUsername"
                name="username"
                formControlName="username"
                aria-describedby="usernameHelp"
                placeholder="Username"
                onChange={onChangeUsername}
            />
            </div>
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
                Sign up
            </button>
            </div>
        </form>
        </div>
    </>
  );
}
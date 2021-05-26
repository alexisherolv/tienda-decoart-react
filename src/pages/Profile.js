import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Slides from "../components/Slides";

export default function Profile() {
  // con esto se agrega el token
  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id");
  //const userName = localStorage.getItem("username");
  const [user, setUser] = useState({});
  const history = useHistory();

  useEffect(function () {
    if (!token) {
        history.push("/");
        return null; // <-- Termina la función
    }

    fetch(`http://localhost:5001/v1/usuarios/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Token ${token}`
      }
    })
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);

  function logout() {
    //setUser(null);
    localStorage.removeItem("tipo");
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    history.push("/sign-in");
  }

  return (
    <>
        <Slides imagen={process.env.PUBLIC_URL + '/images/S9.png'}></Slides>
        <div class="row justify-content-center">
        <div class="col-sm-8 col-md-6">
            <h1>Your Settings</h1>
            <div class="form-group">
            <label for="inputUsername"></label>

            <input
                type="text"
                class="form-control form-control-lg"
                id="inputUsername"
                name="username"
                formControlName="username"
                aria-describedby="usernameHelp"
                placeholder="Username"
                value={user.username}
            />
            </div>
            <div class="form-group">
            <label for="inputEmail"></label>

            <input
                type="text"
                class="form-control form-control-lg"
                id="inputEmail"
                name="email"
                formControlName="email"
                aria-describedby="emailHelp"
                placeholder="Email"
                value={user.email}
            />
            </div>
            <div class="form-group">
            <label for="inputPassword"></label>

            <input
                type="text"
                class="form-control form-control-lg"
                id="inputPassword"
                name="password"
                formControlName="password"
                aria-describedby="passwordHelp"
                placeholder="New Password"
            />
            </div>
            <div class="form-group d-flex justify-content-end">
            <button type="button" class="btn btn-success mt-3 btn-lg">
                Update Settings
            </button>
            </div>
            <hr />
            <div class="form-group d-flex justify-content-start">
            <button
                type="button"
                class="btn btn-outline-danger mt-3 btn-lg"
                onClick={logout}
            >
                Or click here to logout
            </button>
            </div>
        </div>
        </div>
    </>
  );
}
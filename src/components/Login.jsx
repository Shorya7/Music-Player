
import React, { useState } from "react";
import "../components/Login.css";

const Login = () => {
  const [activeForm, setActiveForm] = useState("login");

  const handleSwitchForm = (form) => {
    setActiveForm(form);
  };

  return (
    <div className="fullscr">
      <div className="main">
        <p className="logo">MusiCity</p>

        <section className="forms-section">
          <div className="forms">
            <div
              className={`form-wrapper ${
                activeForm === "login" ? "is-active" : ""
              }`}
            >
              <button
                type="button"
                className="switcher switcher-login"
                onClick={() => handleSwitchForm("login")}
              >
                Login
                <span className="underline"></span>
              </button>
              <form className="form form-login">
                <fieldset>
                  <legend>
                    Please, enter your email and password for login.
                  </legend>
                  <div className="input-block">
                    <label htmlFor="login-email">E-mail</label>
                    <input id="login-email" type="email" required />
                  </div>
                  <div className="input-block">
                    <label htmlFor="login-password">Password</label>
                    <input id="login-password" type="password" required />
                  </div>
                </fieldset>
                <button type="submit" className="btn-login">
                  Login
                </button>
              </form>
            </div>
            <div
              className={`form-wrapper ${
                activeForm === "signup" ? "is-active" : ""
              }`}
            >
              <button
                type="button"
                className="switcher switcher-signup"
                onClick={() => handleSwitchForm("signup")}
              >
                Sign Up
                <span className="underline"></span>
              </button>
              <form className="form form-signup">
                <fieldset>
                  <legend>
                    Please, enter your email, password, and password
                    confirmation for sign up.
                  </legend>
                  <div className="input-block">
                    <label htmlFor="signup-username">Username</label>
                    <input id="signup-username" type="text" required />
                  </div>
                  <div className="input-block">
                    <label htmlFor="signup-email">E-mail</label>
                    <input id="signup-email" type="email" required />
                  </div>
                  <div className="input-block">
                    <label htmlFor="signup-password">Password</label>
                    <input id="signup-password" type="password" required />
                  </div>
                </fieldset>
                <button type="submit" className="btn-signup">
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;

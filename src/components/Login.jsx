import React, { useState } from "react";
import "../components/Login.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Particles from './Particles';

const Login = () => {
  const [activeForm, setActiveForm] = useState("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [showAdditionalFields, setShowAdditionalFields] = useState(false);
  const [sendOTP, setSendOTP] = useState(false);
  const [OTP, setOTP] = useState("");
  const handleNext = () => {
    setShowAdditionalFields(true);
  };

  const handleSwitchForm = (form) => {
    setActiveForm(form);
  };
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };
  const handleOTPChange = (e) => {
    setOTP(e.target.value);
  };
  const handleDobChange = (e) => {
    setDob(e.target.value);
  };

  async function login(e) {
    e.preventDefault();
    axios
      .post("https://musix-9amo.onrender.com/api/auth/login", {
        email: email,
        password: password,
      })
      .then((result) => {
        if (result.status === 200) {
          setTimeout(() => {
            navigate("/home");
          }, 2000);
          toast.success(`Welcome ${result.data.name} `);
        } else toast.error(`Incorrect Details`);
        console.log(result);
      })
      .catch((err) => {
        toast.error(`Incorrect Details`);
        console.log(err);
      });
  }
  async function otp(e) {
    e.preventDefault();
    axios
      .post("https://musix-9amo.onrender.com/api/auth/verifyotp", {
        email: email,
        user_otp: OTP,
      })
      .then((result) => {
        if (result.status === 200) {
          setTimeout(() => {
            navigate("/home");
          }, 2000);
          toast.success(`Welcome ${result.data.name} `);
        } else toast.error(`${result.data.message}`);
        console.log(result);
      })
      .catch((err) => {
        toast.error(`${err.response.data.message}`);
        console.log(err);
      });
  }

  async function register(e) {
    e.preventDefault();
    axios
      .post("https://musix-9amo.onrender.com/api/auth/register", {
        name: name,
        email: email,
        password: password,
        dob: dob,
        gender: gender,
      })
      .then((result) => {
        if (result.status === 200) {
          setSendOTP(true);
        } else toast.error(`${result.data.message}`);
        console.log(result);
      })
      .catch((err) => {
        toast.error(`${err.response.data.message}`);
        console.log(err);
      });
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        limit={5}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
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
                      <input
                        id="login-email"
                        type="email"
                        required
                        value={email}
                        onChange={handleEmailChange}
                      />
                    </div>
                    <div className="input-block">
                      <label htmlFor="login-password">Password</label>
                      <input
                        id="login-password"
                        type="password"
                        required
                        value={password}
                        onChange={handlePasswordChange}
                      />
                    </div>
                  </fieldset>
                  <button type="submit" className="btn-login" onClick={login}>
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
                      Please, enter your name, email, password, and other
                      details for sign up.
                    </legend>

                    {showAdditionalFields ? (
                      <div>
                        <div className="input-block">
                          <label htmlFor="signup-gender">Gender</label>
                          <input
                            id="signup-gender"
                            type="text"
                            required
                            value={gender}
                            onChange={handleGenderChange}
                          />
                        </div>
                        <div className="input-block">
                          <label htmlFor="signup-dob">Date of Birth</label>
                          <input
                            id="signup-dob"
                            type="text"
                            required
                            value={dob}
                            onChange={handleDobChange}
                          />
                        </div>
                        {sendOTP ? (
                          <div className="input-block">
                            <label htmlFor="signup-otp">OTP</label>
                            <input
                              id="signup-otp"
                              type="text"
                              required
                              value={OTP}
                              onChange={handleOTPChange}
                            />
                          </div>
                        ) : null}
                      </div>
                    ) : (
                      <>
                        {" "}
                        <div className="input-block">
                          <label htmlFor="signup-username">Name</label>
                          <input
                            id="signup-username"
                            type="text"
                            required
                            value={name}
                            onChange={handleNameChange}
                          />
                        </div>
                        <div className="input-block">
                          <label htmlFor="signup-email">E-mail</label>
                          <input
                            id="signup-email"
                            type="email"
                            required
                            value={email}
                            onChange={handleEmailChange}
                          />
                        </div>
                        <div className="input-block">
                          <label htmlFor="signup-password">
                            Create Password
                          </label>
                          <input
                            id="signup-password"
                            type="password"
                            required
                            value={password}
                            onChange={handlePasswordChange}
                          />
                        </div>
                        
                      </>
                    )}
                  </fieldset>
                  {showAdditionalFields ? (
                    sendOTP ? (
                      <button
                        type="submit"
                        className="btn-signup"
                        onClick={otp}
                      >
                        Sign Up
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="btn-signup"
                        onClick={register}
                      >
                        Send OTP
                      </button>
                    )
                  ) : (
                    <button
                      type="submit"
                      className="btn-signup"
                      onClick={handleNext}
                    >
                      Next
                    </button>
                  )}
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Particles id="tsparticles" />
    </>
  );
};

export default Login;

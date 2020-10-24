import React from "react";
import LoginForm from "../../components/login-form";

import "./Login.scss";

const Login = () => {
  return (
    <div className="page login-page">
      <h3>Se Connecter</h3>
      <LoginForm />
    </div>
  );
};

export default Login;

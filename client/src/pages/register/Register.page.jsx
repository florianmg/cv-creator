import React from "react";
import RegisterForm from "../../components/register-form";

import './Register.scss';

const Register = () => {
  return (
    <div className="page register-page">
      <h1>Register</h1>
      <RegisterForm />
    </div>
  );
};

export default Register;

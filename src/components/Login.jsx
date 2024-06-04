import React from "react";
import { useState } from "react";
import { Logo } from "./Logo";
import { Input } from "./Input";
import {
  emailValidationMessage,
  passwordValidationMessage,
  validateEmail,
  validatePassword,
} from "../shared/validators";
import { useLogin } from "../shared/hooks";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../pages/auth/authPage.css'; 

export const Login = ({ switchAuthHandler }) => {
  const { login, isLoading } = useLogin();

  const [formState, setFormState] = useState({
    email: {
      value: "",
      isValid: false,
      showError: false,
    },
    password: {
      value: "",
      isValid: false,
      showError: false,
    },
  });

  const handleInputValueChange = (value, field) => {
    setFormState((prevState) => ({
      ...prevState,
      [field]: {
        ...prevState[field],
        value,
      },
    }));
  };

  const handleInputValidationOnBlur = (value, field) => {
    let isValid = false;
    switch (field) {
      case "email":
        isValid = validateEmail(value);
        break;
      case "password":
        isValid = validatePassword(value);
        break;
      default:
        break;
    }
    setFormState((prevState) => ({
      ...prevState,
      [field]: {
        ...prevState[field],
        isValid,
        showError: !isValid
      }
    }))
  };

  const handleLogin = (event) => {
    console.log(formState)
    event.preventDefault()

    login(formState.email.value, formState.password.value)
  }

  const isSubmitButtonDisabled = isLoading || !formState.password.isValid || !formState.email.isValid
  return (
    <div className="container">
      <div className="login-box">
        <div className="login-box-left">
          <h1>Bank Sterrenfall</h1>
          <img src="../assets/img/BankSterrenfall.png" alt="Logo" className="login-logo" />
        </div>
        <div className="login-box-right">
          <h2>Login</h2>
          <form>
            <div className="input-group">
              <Input
                field="email"
                label="Correo electrónico"
                value={formState.email.value}
                onChangeHandler={handleInputValueChange}
                type="text"
                onBlurHandler={handleInputValidationOnBlur}
                showErrorMessage={formState.email.showError}
                validationMessage={emailValidationMessage}
              />
            </div>
            <div className="input-group">
              <Input
                field="password"
                label="Contraseña"
                value={formState.password.value}
                onChangeHandler={handleInputValueChange}
                type="password"
                onBlurHandler={handleInputValidationOnBlur}
                showErrorMessage={formState.password.showError}
                validationMessage={passwordValidationMessage}
              />
            </div>
            <button className="submit" onClick={handleLogin} disabled={isSubmitButtonDisabled}>
              Iniciar sesión
            </button>
            <hr />
          </form>
        </div>
      </div>
    </div>
  );
};

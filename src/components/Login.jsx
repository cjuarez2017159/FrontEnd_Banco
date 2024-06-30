import React from "react";
import { useState } from "react";
import { Input } from "./Input";
import {
  passwordValidationMessage,
  validatePassword,
} from "../shared/validators";
import { useLogin } from "../shared/hooks";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../pages/auth/authPage.css';
import logo from '../assets/img/BankSterrenfall.png';

export const Login = () => {
  const { login, isLoading } = useLogin();

  const [formState, setFormState] = useState({
    account_number: {  
      value: "",
      isValid: true,
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
    let isValid = true;
    if (field === "password") {
      isValid = validatePassword(value);
    }
    setFormState((prevState) => ({
      ...prevState,
      [field]: {
        ...prevState[field],
        isValid,
        showError: !isValid,
      },
    }));
  };

  const handleLogin = (event) => {
    console.log(formState);
    event.preventDefault();
    login(formState.account_number.value, formState.password.value);  
  };

  const isSubmitButtonDisabled = isLoading || !formState.password.isValid;

  return (
    <div className="container">
      <div className="login-box">
        <div className="login-box-left">
          <h1>Bank Sterrenfall</h1>
          <img src={logo} alt="Logo" className="login-logo" />
        </div>
        <div className="login-box-right">
          <h2>Login</h2>
          <form>
            <div className="input-group">
              <Input
                field="account_number"  
                label="Número de Cuenta"
                value={formState.account_number.value}   
                onChangeHandler={handleInputValueChange}
                type="text"
                onBlurHandler={handleInputValidationOnBlur}
                showErrorMessage={formState.account_number.showError}   
                validationMessage=""
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

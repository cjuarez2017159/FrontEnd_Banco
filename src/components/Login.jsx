/* eslint-disable react/prop-types */
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
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar Bootstrap CSS

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
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="login-box p-5 rounded shadow" style={{ background: 'rgba(0, 0, 0, 0.7)', color: 'white' }}>
        <div className="login-box-title mb-4">
          <h1 className="text-warning">Bank Sterrenfall</h1>
        </div>
        <form>
          <div className="input-group mb-3">
            <Input
              field="email"
              label="Correo electrónico"
              value={formState.email.value}
              onChangeHandler={handleInputValueChange}
              type="text"
              onBlurHandler={handleInputValidationOnBlur}
              showErrorMessage={formState.email.showError}
              validationMessage={emailValidationMessage}
              className="form-control"
            />
          </div>
          <div className="input-group mb-3">
            <Input
              field="password"
              label="Contraseña"
              value={formState.password.value}
              onChangeHandler={handleInputValueChange}
              type="password"
              onBlurHandler={handleInputValidationOnBlur}
              showErrorMessage={formState.password.showError}
              validationMessage={passwordValidationMessage}
              className="form-control"
            />
          </div>
          <button className="btn btn-warning w-100" onClick={handleLogin} disabled={isSubmitButtonDisabled}>
            Iniciar sesión
          </button>
          <hr className="my-4" />
          <span className="switch-auth" onClick={switchAuthHandler} style={{ color: '#ff9101', cursor: 'pointer' }}>
            No tienes una cuenta? Regístrate
          </span>
        </form>
      </div>
    </div>
  );
};

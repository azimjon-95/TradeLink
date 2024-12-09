import React, { useState } from "react";
import Modal from "react-modal";
import "./style.css";
import { Button } from "antd";
import { useSelector } from "react-redux";
import { FcGoogle } from "react-icons/fc";
import { FiX } from "react-icons/fi";
import axios from "../../api";

Modal.setAppElement("#root");

// Tarjima ma'lumotlari
const translations = {
  en: {
    aboutPaymentWarning:
      "Note: To register, you need to make a payment first. Please make the payment by following this link:",
    forPayLink: "Payment",
    loginTitle: "Log in",
    email: "Email",
    password: "Password",
    dontHaveAccount: "Don’t have an account?",
    signUp: "Sign up",
    userExistsError: "User with such email already exists",
    username: "Username",
    alreadyHaveAccount: "Already have an account?",
    login: "Log in",
    signupTitle: "Sign up",
    loginWith: "Log in with",
  },
  ru: {
    aboutPaymentWarning:
      "Примечание: Для регистрации вам необходимо сначала совершить оплату. Совершите оплату по следующей ссылке:",
    forPayLink: "Оплата",
    loginTitle: "Войти",
    email: "Эл. почта",
    password: "Пароль",
    dontHaveAccount: "Нет учетной записи?",
    signUp: "Зарегистрироваться",
    userExistsError: "Пользователь с таким email уже существует",
    username: "Имя пользователя",
    alreadyHaveAccount: "Уже есть аккаунт?",
    login: "Войти",
    signupTitle: "Регистрация",
    loginWith: "Войти через",
  },
  de: {
    aboutPaymentWarning:
      "Hinweis: Zur Registrierung muss zuerst eine Zahlung erfolgen. Bitte machen Sie die Zahlung folgender Link:",
    forPayLink: "Zahlung",
    loginTitle: "Anmelden",
    email: "E-Mail",
    password: "Passwort",
    dontHaveAccount: "Hast du keine Account?",
    signUp: "Registrieren",
    userExistsError: "Ein Benutzer mit dieser E-Mail existiert bereits",
    username: "Benutzername",
    alreadyHaveAccount: "Bereits ein Konto?",
    login: "Anmelden",
    signupTitle: "Registrieren",
    loginWith: "Anmelden mit",
  },
  es: {
    aboutPaymentWarning:
      "Nota: Para registrarse, primero debe realizar un pago. Realice el pago siguiendo este enlace:",
    forPayLink: "Pago",
    loginTitle: "Iniciar sesión",
    email: "Correo electrónico",
    password: "Contraseña",
    dontHaveAccount: "¿No tienes una cuenta?",
    signUp: "Regístrate",
    userExistsError: "Ya existe un usuario con ese correo electrónico",
    username: "Nombre de usuario",
    alreadyHaveAccount: "¿Ya tienes una cuenta?",
    login: "Iniciar sesión",
    signupTitle: "Regístrate",
    loginWith: "Iniciar sesión con",
  },
};

const SignUpModal = ({
  isOpen,
  onRequestClose,
  setIsMediaModalOpen,
  modalType,
  setModalType,
}) => {
  const currentLanguage = useSelector(
    (state) => state.language.currentLanguage
  );
  const subTitle = translations[currentLanguage];

  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleClose = () => {
    onRequestClose(false);
    setIsMediaModalOpen(false);
  };

  const Register = async (e) => {
    try {
      e.preventDefault();
      setIsLoading(true);
      let formData = new FormData(e.target);
      let body = Object.fromEntries(formData);
      body.role_id = 0;

      setError(false);
      let res = await axios.post("/auth/sign-up/register", body);
      if (res?.data) {
        setModalType("signIn");
      }
    } catch (error) {
      setError(true);
      console.log(error);
    }
    setIsLoading(false);
  };

  const singIn = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData(e.target);
      const res = await axios.post("/auth/sign-in/login", formData);

      if (res?.data?.access_token) {
        localStorage.setItem("access_token", res.data.access_token);
        handleClose();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const singInWithGoogle = async () =>
    (window.location.href = "https://api.kyt.systems/auth/sign-in/glogin");

  const paymentFunction = () => {
    axios
      .get("/payment/pay-link")
      .then((res) => {
        window.open(res.data.pay_link, "_blank");
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={handleClose}
        overlayClassName="modal-overlay"
        className="modal-content"
      >
        {/* Render Log In Modal */}
        {modalType === "signIn" && (
          <form onSubmit={singIn}>
            {/* <button
              className="close_modalReg"
              onClick={handleClose}
              style={{ border: "none", background: "none", cursor: "pointer" }}
            >
              ✖
            </button> */}
            <button
              className="close_modalReg"
              onClick={handleClose}
              style={{ border: "none", background: "none", cursor: "pointer" }}
            >
              <FiX />
            </button>
            <h2 className="modal-title">{subTitle?.loginTitle}</h2>

            <label className="input-label">{subTitle.email}</label>
            <input name="email" required type="email" className="input-field" />

            <label className="input-label">{subTitle.password}</label>
            <input name="password" type="text" className="input-field" />

            <Button
              loading={isLoading}
              htmlType="submit"
              className="login-button"
            >
              {subTitle.login}
            </Button>

            <p className="login-with">{subTitle.loginWith}</p>
            <Button
              onClick={singInWithGoogle}
              htmlType="button"
              className="loginWithGoogle"
            >
              <FcGoogle /> Google
            </Button>

            <p className="footer-text">
              {subTitle.dontHaveAccount}{" "}
              <span
                onClick={() => setModalType("signUp")}
                className="signup-link"
              >
                {subTitle.signUp}
              </span>
            </p>
          </form>
        )}

        {/* Render Sign Up Modal */}
        {modalType === "signUp" && (
          <form onSubmit={Register}>
            <button
              className="close_modalReg"
              onClick={handleClose}
              style={{ border: "none", background: "none", cursor: "pointer" }}
            >
              <FiX />
            </button>

            <p className="about_payment_warning">
              {subTitle.aboutPaymentWarning}{" "}
              <button type="button" onClick={() => paymentFunction()}>
                Payment
              </button>
            </p>

            <h2 className="modal-title">{subTitle.signupTitle}</h2>
            <label className="modal-label">{subTitle.email}</label>
            <input required name="email" type="email" className="modal-input" />
            {error && (
              <p className="sing_up_error_text">{subTitle.userExistsError}</p>
            )}
            <label className="modal-label">{subTitle.username}</label>
            <input
              type="text"
              className="modal-input"
              required
              name="username"
            />
            <label className="modal-label">{subTitle.password}</label>
            <input
              type="text"
              className="modal-input"
              required
              name="password"
            />

            <Button
              loading={isLoading}
              htmlType="submit"
              className="login-button signup-button"
            >
              {subTitle.signUp}
            </Button>

            <p className="footer-text">
              {subTitle.alreadyHaveAccount}{" "}
              <span
                onClick={() => setModalType("signIn")}
                className="login-link"
              >
                {subTitle.login}
              </span>
            </p>
          </form>
        )}
      </Modal>
      <div onClick={handleClose} className="close-reg-up"></div>
    </>
  );
};

export default SignUpModal;

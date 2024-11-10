import React, { useState } from "react";
import Modal from "react-modal";
import "./style.css";
import { Button } from "antd";
import axios from "../../api";

Modal.setAppElement("#root");

const SignUpModal = ({
  isOpen,
  onRequestClose,
  setIsMediaModalOpen,
  modalType,
  setModalType,
}) => {
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
      console.log(body);

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
        console.log(res);
        handleClose();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
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
            <h2 className="modal-title">Log in</h2>

            <label className="input-label">Email</label>
            <input name="email" required type="email" className="input-field" />

            <label className="input-label">Password</label>
            <input name="password" type="text" className="input-field" />

            {/* <button type="submit" className="login-button">
              Log in
            </button> */}
            {/* hover color red */}
            <Button
              loading={isLoading}
              htmlType="submit"
              className="login-button"
            >
              Log in
            </Button>

            <p className="footer-text">
              Don’t have an account?{" "}
              <span
                onClick={() => setModalType("signUp")}
                className="signup-link"
              >
                Sign up
              </span>
            </p>
          </form>
        )}

        {/* Render Sign Up Modal */}
        {modalType === "signUp" && (
          <form onSubmit={Register}>
            <h2 className="modal-title">Sign up</h2>
            <label className="modal-label">Email</label>
            <input required name="email" type="email" className="modal-input" />
            {error && (
              <p className="sing_up_error_text">
                User with such email already exists
              </p>
            )}
            <label className="modal-label">Username</label>
            <input
              type="text"
              className="modal-input"
              required
              name="username"
            />
            <label className="modal-label">Password</label>
            <input
              type="text"
              className="modal-input"
              required
              name="password"
            />

            {/* <button type="submit" className="login-button signup-button">
              Sign up
            </button> */}
            <Button
              loading={isLoading}
              htmlType="submit"
              className="login-button signup-button"
            >
              Sign up
            </Button>
            <p className="footer-text">
              Already have an account?{" "}
              <span
                onClick={() => setModalType("signIn")}
                className="login-link"
              >
                Log in
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

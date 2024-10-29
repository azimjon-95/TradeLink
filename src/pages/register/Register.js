import React from "react";
import Modal from 'react-modal';
import { FaGoogle, FaEnvelope } from 'react-icons/fa';
import './style.css';

Modal.setAppElement('#root'); // Accessible Modal uchun kerak

const SignUpModal = ({ isOpen, onRequestClose, setIsMediaModalOpen, modalType }) => {
    return (
        <>

            {
                modalType === 'signIn' ?
                    <Modal Modal
                        isOpen={isOpen}
                        // onRequestClose={onRequestClose}
                        overlayClassName="ReactModal__Overlay"
                        className="modal-content"
                    >
                        <h2 className="modal-title">Sign up</h2>
                        <p className="modal-subtitle">Set up your profile</p>

                        <label className="modal-label">Username <span style={{ fontSize: '12px' }}>(optional)</span></label>
                        <input type="text" placeholder="RiskyMagician" className="modal-input" />

                        <label className="modal-label">Referral ID <span style={{ fontSize: '12px' }}>(optional)</span></label>
                        <input type="text" placeholder="" className="modal-input" />

                        <p className="modal-subtitle">Sign up with</p>

                        <button className="social-button">
                            <FaGoogle /> Google
                        </button>

                        <button className="social-button">
                            <FaEnvelope /> Email
                        </button>

                        <p className="footer-text">
                            Already have an account? <span className="login-link">Log in</span>
                        </p>

                    </Modal >
                    :
                    <Modal Modal
                        isOpen={isOpen}
                        // onRequestClose={onRequestClose}
                        overlayClassName="ReactModal__Overlay"
                        className="modal-content"
                    >
                        <h2 className="modal-title">Sign up</h2>
                        <p className="modal-subtitle">Set up your profile</p>

                        <label className="modal-label">Username <span style={{ fontSize: '12px' }}>(optional)</span></label>
                        <input type="text" placeholder="RiskyMagician" className="modal-input" />

                        <label className="modal-label">Referral ID <span style={{ fontSize: '12px' }}>(optional)</span></label>
                        <input type="text" placeholder="" className="modal-input" />

                        <p className="modal-subtitle">Sign up with</p>

                        <button className="social-button">
                            <FaGoogle /> Google
                        </button>

                        <button className="social-button">
                            <FaEnvelope /> Email
                        </button>

                        <p className="footer-text">
                            Already have an account? <span className="login-link">Log in</span>
                        </p>

                    </Modal >
            }

            <div
                onClick={() => {
                    onRequestClose(false);
                    setIsMediaModalOpen(false);
                }}
                className="close-reg-up"
            ></div>
        </>
    );
};

export default SignUpModal;


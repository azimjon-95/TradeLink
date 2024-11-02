import React, { useState } from "react";
import Modal from 'react-modal';
import { FaEnvelope } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";

import './style.css';

Modal.setAppElement('#root'); // For accessibility

const SignUpModal = ({ isOpen, onRequestClose, setIsMediaModalOpen, modalType, setModalType }) => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [referralId, setReferralId] = useState('');

    const handleClose = () => {
        onRequestClose(false);
        setIsMediaModalOpen(false);
    };

    const handleGoogleSignIn = () => {
        // Placeholder for Google sign-in functionality
        console.log("Google sign-in clicked");
    };

    const handleEmailSignIn = () => {
        // Placeholder for Email login functionality
        console.log("Email login clicked with email:", email);
    };

    const handleGoogleSignUp = () => {
        // Placeholder for Google sign-up functionality
        console.log("Google sign-up clicked");
    };

    const handleEmailSignUp = () => {
        // Placeholder for Email sign-up functionality
        console.log("Email sign-up clicked with email:", email, "username:", username, "referral ID:", referralId);
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
                {modalType === 'signIn' && (
                    <>
                        <h2 className="modal-title">Log in</h2>
                        <button onClick={handleGoogleSignIn} className="social-button">
                            <FcGoogle className="google-icon" /> Continue with Google
                        </button>

                        <div className="separator">
                            <hr className="line" />
                            <span>or</span>
                            <hr className="line" />
                        </div>

                        <label className="input-label">Email</label>
                        <input
                            type="email"
                            placeholder="Email"
                            className="input-field"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <button onClick={handleEmailSignIn} className="login-button">Log in</button>

                        <p className="footer-text">
                            Don’t have an account? <span onClick={() => setModalType('signUp')} className="signup-link">Sign up</span>
                        </p>
                    </>
                )}

                {/* Render Sign Up Modal */}
                {modalType === 'signUp' && (
                    <>
                        <h2 className="modal-title">Sign up</h2>
                        <p className="modal-subtitle">Set up your profile</p>

                        <label className="modal-label">Username <span style={{ fontSize: '12px' }}>(optional)</span></label>
                        <input
                            type="text"
                            placeholder="RiskyMagician"
                            className="modal-input"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />

                        <label className="modal-label">Referral ID <span style={{ fontSize: '12px' }}>(optional)</span></label>
                        <input
                            type="text"
                            placeholder=""
                            className="modal-input"
                            value={referralId}
                            onChange={(e) => setReferralId(e.target.value)}
                        />

                        <p className="modal-subtitle">Sign up with</p>

                        <button onClick={handleGoogleSignUp} className="social-button">
                            <FcGoogle className="google-icon" /> Google
                        </button>

                        <button onClick={handleEmailSignUp} className="social-button">
                            <FaEnvelope /> Email
                        </button>

                        <p className="footer-text">
                            Already have an account? <span onClick={() => setModalType('signIn')} className="login-link">Log in</span>
                        </p>
                    </>
                )}

            </Modal>
            {/* Close button to close modal */}
            <div onClick={handleClose} className="close-reg-up"></div>
        </>
    );
};

export default SignUpModal;

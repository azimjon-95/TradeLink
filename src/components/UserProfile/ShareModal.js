import React, { useRef } from 'react';
import { FaFacebook, FaTelegramPlane } from 'react-icons/fa';
import { GoDownload } from "react-icons/go";
import { GrCopy } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";
import { QRCodeCanvas } from 'qrcode.react';
import { message } from 'antd';

import { toPng } from 'html-to-image';
import raket from '../../assets/ed_khan/raket.png';
import './styles/style.css'; // Import the CSS file

function ShareModal({ closeModal }) {
    // Refs to access the modal image container and the link to be copied
    const imageRef = useRef(null);
    const linkRef = useRef('https://kytknowyourtrader.vercel.app/user');

    const handleDownloadImage = () => {
        if (imageRef.current) {
            toPng(imageRef.current)
                .then((dataUrl) => {
                    const link = document.createElement('a');
                    link.href = dataUrl;
                    link.download = 'trading-strategy.png';
                    link.click();
                })
                .catch((err) => {
                    console.error('Could not generate image', err);
                });
        }
    };

    const handleCopyLink = () => {
        if (linkRef.current) {
            navigator.clipboard.writeText(linkRef.current)
                .then(() => {
                    message.success('Link copied to clipboard!');
                })
                .catch((err) => {
                    console.error('Failed to copy link', err);
                });
        }
    };

    const openTwitterShare = () => {
        const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(linkRef.current)}`;
        window.open(twitterUrl, '_blank');
    };

    const openFacebookShare = () => {
        const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(linkRef.current)}`;
        window.open(facebookUrl, '_blank');
    };

    const openTelegramShare = () => {
        const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(linkRef.current)}&text=Check out this trading strategy!`;
        window.open(telegramUrl, '_blank');
    };

    return (
        <div className="user-modal-overlay" onClick={closeModal}>
            <div className="user-modal-content" onClick={(e) => e.stopPropagation()}>
                <h2>Share</h2>
                <button className="user-close-modal-btn" onClick={closeModal}>✖</button>

                {/* Reference the image container for downloading */}
                <div className="user-modal-daw-img" ref={imageRef}>
                    <p>KYT - know your trader</p>
                    <span>Best-selected <br /> trading strategies <br /> from around the world</span>
                    <img src={raket} alt="Rek" className="user-rak" />

                    {/* QR Code linked to specified URL */}
                    <div className="qr-code-box">
                        <QRCodeCanvas value={linkRef.current} size={76} />
                    </div>
                </div>

                {/* Download button with icon */}
                <span onClick={handleDownloadImage}>
                    <GoDownload size={17} />
                    Download image
                </span>

                {/* Social media icons with link copy button */}
                <div className="user-modal-icons">
                    <div className="link-btns">
                        <button onClick={openTwitterShare}><FaXTwitter size={24} /></button>
                        <span>Twitter</span>
                    </div>
                    <div className="link-btns">
                        <button onClick={openFacebookShare}><FaFacebook size={24} /></button>
                        <span>Facebook</span>
                    </div>
                    <div className="link-btns">
                        <button onClick={openTelegramShare}><FaTelegramPlane size={24} /></button>
                        <span>Telegram</span>
                    </div>
                    <div className="link-btns">
                        <button onClick={handleCopyLink}><GrCopy size={24} /></button>
                        <span>Copy link</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShareModal;
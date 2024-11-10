import { useState, useEffect } from "react";
import { FaShare, FaGlobe, FaTelegramPlane } from "react-icons/fa";
import { Routes, Route, Link, Navigate, Outlet, useParams, useLocation } from "react-router-dom"; // Import Outlet
import { Tooltip } from 'antd';
import ed_khan from "../../assets/ed_khan/Ed_Khan.png";
import Overview from './Overview';
import Portfolios from './Portfolios';
import Jet from './Jet';
import ShareModal from './ShareModal';
import './styles/style.css'; // Import the CSS file
import './styles/media.css'; // Import the CSS file

const UserProfile = () => {
    const [telegramHandle, setTelegramHandle] = useState("");
    const location = useLocation(); // Hozirgi yo'nalishni olish
    const [currentPath, setCurrentPath] = useState("/user"); // Default yo'nalish
    const [isModalOpen, setModalOpen] = useState(false);
    const { id } = useParams(); // Get the dynamic user ID from the URL


    // Simulate fetching Telegram handle from the server
    useEffect(() => {
        const fetchTelegramHandle = async () => {
            const handleFromServer = "@Azimjon_M"; // Simulated response
            setTelegramHandle(handleFromServer);
        };

        fetchTelegramHandle();
    }, []);
    // Hozirgi yo'nalishni eslab qolish
    useEffect(() => {
        setCurrentPath(location.pathname);
    }, [location]);


    useEffect(() => {
        const fetchTelegramHandle = async () => {
            const handleFromServer = "@Azimjon_M"; // Simulated response
            setTelegramHandle(handleFromServer);
        };

        fetchTelegramHandle();
    }, []);

    const handleTelegramClick = () => {
        if (telegramHandle) {
            window.open(`https://t.me/${telegramHandle.replace("@", "")}`, "_blank");
        }
    };

    const handleEdvitradeClick = () => {
        window.open(`https://edvitrade.com/ru/`, "_blank");
    };




    const toggleModal = () => {
        setModalOpen(!isModalOpen);
    };

    return (
        <div className="ed_khan">
            <h1>User Profile</h1>

            <div className="user-share-container">

                <div className="user-share">
                    <div className="ed-khan-image">
                        <img src={ed_khan} alt="" />
                    </div>
                    <div className="ed-khan-text">
                        <div className="ed-khan-main">
                            <h1> <img className="user-image-mob" src={ed_khan} alt="" /> Azimjon Dev</h1>
                            <p>7.98K</p>
                            <Tooltip title="Days in market">
                                <span>Days in market</span>
                            </Tooltip>
                        </div>
                        <div className="ed-khan-main">
                            <p>2</p>
                            <Tooltip title="Days investing">
                                <span>Days investing</span>
                            </Tooltip>
                        </div>
                        <div className="ed-khan-main">
                            <p>18</p>
                            <Tooltip title="Active Portfolios">
                                <span>Active Portfolios</span>
                            </Tooltip>
                        </div>
                        <div className="ed-khan-main">
                            <p>1</p>
                            <Tooltip title="Active Jets">
                                <span>Active Jets</span>
                            </Tooltip>
                        </div>
                        <div className="ed-khan-main">
                            <p>14.95K</p>
                            <Tooltip title="Total Views">
                                <span>Total Views</span>
                            </Tooltip>
                        </div>
                    </div>
                </div>

                <div className="khan-maps">
                    <button onClick={handleTelegramClick} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <FaTelegramPlane />
                    </button>
                    <button onClick={handleEdvitradeClick} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <FaGlobe />
                    </button>
                </div>
                <div className="khan-inps">
                    Telegram
                    <input
                        type="text"
                        value={telegramHandle}
                        readOnly
                        style={{ padding: "8px", fontSize: "16px" }}
                    />
                </div>

                <button onClick={toggleModal}>
                    <FaShare style={{ fontSize: "16px" }} />
                    Share
                </button>
            </div>

            <div className="user-menus-khan">
                <div className="strategies-layout">
                    <nav className="nav-bar">
                        <Link to={`/user/${id}`} className={currentPath === `/user/${id}` ? "active" : ""}>Overview</Link>
                        <Link to={`/user/${id}/portfolios`} className={currentPath === `/user/${id}/portfolios` ? "active" : ""}>Portfolios</Link>
                        <Link to={`/user/${id}/jet`} className={currentPath === `/user/${id}/jet` ? "active" : ""}>Jet</Link>
                    </nav>

                    <div className="user-menus">
                        <div className="khan-pages">
                            <Outlet /> {/* This will render the matching route components here */}
                        </div>

                        <div className="menus-khan-page">
                            <Routes>
                                <Route path="/" element={<Overview />} />
                                <Route path="portfolios" element={<Portfolios />} />
                                <Route path="jet" element={<Jet />} />

                                {/* Redirect any unknown paths under /user/:id to the Overview page */}
                                <Route path="*" element={<Navigate to={`/user/${id}`} />} />
                            </Routes>
                        </div>
                    </div>
                </div>
            </div>
            {isModalOpen && <ShareModal closeModal={toggleModal} />}
        </div>
    );
};

export default UserProfile;


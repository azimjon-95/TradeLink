import { useState, useEffect } from "react";
import { FaShare, FaGlobe, FaTelegramPlane } from "react-icons/fa";
import { Routes, Route, Link, Navigate, Outlet, useLocation } from "react-router-dom"; // Import Outlet
import { Tooltip } from 'antd';
import ed_khan from "../../assets/ed_khan/Ed_Khan.png";
import Overview from './Overview';
import Portfolios from './Portfolios';
import Jet from './Jet';
import Feed from './Feed';
import "./style.css";

const UserProfile = () => {
    const [telegramHandle, setTelegramHandle] = useState("");
    const location = useLocation(); // Hozirgi yo'nalishni olish
    const [currentPath, setCurrentPath] = useState("/user"); // Default yo'nalish

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

    return (
        <div className="ed_khan">
            <h1>User Profile</h1>

            <div className="user-share-container">
                <button>
                    <FaShare style={{ fontSize: "16px" }} />
                    Share
                </button>

                <div className="user-share">
                    <div className="ed-khan-image">
                        <img src={ed_khan} alt="" />
                    </div>
                    <div className="ed-khan-text">
                        <div className="ed-khan-main">
                            <h1>Azimjon Dev</h1>
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
            </div>

            <div className="user-menus-khan">
                <div className="strategies-layout">
                    <nav className="nav-bar">
                        <Link to="/user" className={currentPath === "/user" ? "active" : ""}>Overview</Link>
                        <Link to="/user/portfolios" className={currentPath === "/user/portfolios" ? "active" : ""}>Portfolios</Link>
                        <Link to="/user/jet" className={currentPath === "/user/jet" ? "active" : ""}>Jet</Link>
                        <Link to="/user/feed" className={currentPath === "/user/feed" ? "active" : ""}>Feed</Link>
                    </nav>

                    <div className="user-menus">
                        <div className="khan-pages">
                            <Outlet /> {/* This will render the matching route components here */}
                        </div>

                        <div className="menus-khan-page">
                            <Routes>
                                <Route path="/" element={<Overview />} />
                                <Route path="/portfolios" element={<Portfolios />} />
                                <Route path="/jet" element={<Jet />} />
                                <Route path="/feed" element={<Feed />} />

                                <Route path="*" element={<Navigate to="/user" />} /> {/* Redirect to Overview */}
                            </Routes>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;









// import { useState, useEffect } from "react";
// import { FaShare, FaGlobe, FaTelegramPlane } from "react-icons/fa";
// import { Routes, Route, Link, Navigate } from "react-router-dom";
// import { Input, Tooltip } from 'antd';
// import { SearchOutlined } from '@ant-design/icons';
// import ed_khan from "../../assets/ed_khan/Ed_Khan.png";
// import "./style.css";

// const UserProfile = () => {
//     const [telegramHandle, setTelegramHandle] = useState("");

//     // Simulate fetching Telegram handle from the server
//     useEffect(() => {
//         const fetchTelegramHandle = async () => {
//             const handleFromServer = "@Azimjon_M"; // Simulated response
//             setTelegramHandle(handleFromServer);
//         };

//         fetchTelegramHandle();
//     }, []);

//     const handleTelegramClick = () => {
//         if (telegramHandle) {
//             window.open(`https://t.me/${telegramHandle.replace("@", "")}`, "_blank");
//         }
//     };
//     const handleEdvitradeClick = () => {
//         if (telegramHandle) {
//             window.open(`https://edvitrade.com/ru/`, "_blank");
//         }
//     };



//     return (
//         <div className="ed_khan">
//             <h1>User Profile</h1>

//             <div className="user-share-container">
//                 <button>
//                     <FaShare style={{ fontSize: "16px" }} />
//                     Share
//                 </button>

//                 <div className="user-share">
//                     <div className="ed-khan-image">
//                         <img src={ed_khan} alt="" />
//                     </div>
//                     <div className="ed-khan-text">
//                         <div className="ed-khan-main">
//                             <h1>Azimjon Dev</h1>
//                             <p>7.98K</p>
//                             <Tooltip title="Days in market">
//                                 <span>Days in market</span>
//                             </Tooltip>
//                         </div>
//                         <div className="ed-khan-main">
//                             <p>2</p>
//                             <Tooltip title="Days investing">
//                                 <span>Days investing</span>
//                             </Tooltip>
//                         </div>
//                         <div className="ed-khan-main">
//                             <p>18</p>
//                             <Tooltip title="Active Portfolios">
//                                 <span>Active Portfolios</span>
//                             </Tooltip>
//                         </div>
//                         <div className="ed-khan-main">
//                             <p>1</p>
//                             <Tooltip title="Active Jets">
//                                 <span>Active Jets</span>
//                             </Tooltip>
//                         </div>
//                         <div className="ed-khan-main">
//                             <p>14.95K</p>
//                             <Tooltip title="Total Views">
//                                 <span>Total Views</span>
//                             </Tooltip>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="khan-maps">
//                     <button onClick={handleTelegramClick} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
//                         <FaTelegramPlane />
//                     </button>
//                     <button onClick={handleEdvitradeClick} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
//                         <FaGlobe />
//                     </button>
//                 </div>
//                 <div className="khan-inps">
//                     Telegram
//                     <input
//                         type="text"
//                         value={telegramHandle}
//                         readOnly
//                         style={{ padding: "8px", fontSize: "16px" }}
//                     />
//                 </div>
//             </div>

//             <div className="user-menus-khan">
//                 <div className="strategies-layout">
//                     <nav className="nav-bar">
//                         <Link to="/user">Overview</Link>
//                         <Link to="/user/portfolios">Portfolios</Link>
//                         <Link to="/user/jet">Jet</Link>
//                         <Link to="/user/feed">Feed</Link>
//                     </nav>

//                     <div className="user-menus">
//                         <div className="menus-khan-page">
//                             <h2>Overview</h2>
//                             <div className="overview-container">
//                                 <div className="menus-khan-card">
//                                     <Tooltip title="This shows the total assets under management">
//                                         <h3>TradeLink AUM</h3>
//                                     </Tooltip>
//                                     <p>$34.86K</p>
//                                     <span>Impressive capital!</span>
//                                 </div>
//                                 <div className="menus-khan-card">
//                                     <Tooltip title="Total number of investors">
//                                         <h3>Total Investors</h3>
//                                     </Tooltip>
//                                     <p>10</p>
//                                     <span>A lot of investors respect this user!</span>
//                                 </div>
//                                 <div className="menus-khan-card">
//                                     <Tooltip title="Average monthly income percentage">
//                                         <h3>Average Monthly Income</h3>
//                                     </Tooltip>
//                                     <p>3.86%</p>
//                                     <span>It's sad to think about the loss.</span>
//                                 </div>
//                             </div>
//                             <div className="khan-search">
//                                 <b>Public strategies</b>
//                                 <Input
//                                     className="menus-khan-search-bar"
//                                     placeholder="Search by name"
//                                     prefix={<SearchOutlined />}
//                                     size="small"
//                                 />
//                             </div>
//                         </div>

//                         <div className="khan-pages">

//                         </div>

//                         <div className="menus-khan-page">
//                             <Routes>
//                                 {/* <Route path="/" element={<Overview />} /> */}
//                                 {/* <Route path="portfolios" element={<Portfolios />} />
//                                 <Route path="jet" element={<Jet />} />
//                                 <Route path="feed" element={<Feed />} /> */}
//                                 <Route path="*" element={<Navigate to="/user" />} /> {/* Redirect to Overview */}
//                             </Routes>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default UserProfile;
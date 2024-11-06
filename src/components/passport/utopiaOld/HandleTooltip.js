import React, { useState } from "react";
import "./style.css";

const HandleTooltip = ({ text, children, value }) => {
    const [visible, setVisible] = useState(false);

    return (
        <div
            className="tooltip-wrapper"
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
        >
            {children}
            {visible && <div className="custom-tooltip">
                {text}
                <p>{value}</p>
            </div>}
        </div>
    );
};

export default HandleTooltip;

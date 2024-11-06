import React from "react";
import { Progress } from 'antd';
import HandleTooltip from '../HandleTooltip';
import './style.css';


const KeyIndicators = () => {
    const indicators = [
        { value: 70, label: 'Open History Coefficient', isProgress: true },
        { value: '118.31%', label: 'CAGR' },
        { value: '6.75%', label: 'Avg. Monthly Profit' },
        { value: '0.21%', label: 'Avg. Day Profit' },
        { value: '1.08K%', label: 'Profit' },
        { value: '36.09%', label: 'Success Rate', highlight: true },
        { value: '$0', label: 'Margin balance' },
        { value: '63.1%', label: 'Max drawdown' },
        { value: '549D 15H', label: 'Max time in drawdown' },
        { value: '24.44', label: 'Max ICP' },
        { value: '1.57', label: 'Wed. ICP' },
        { value: '$5.24K', label: 'Income', color: "orange" },
    ];

    return (
        <div className="key-indicators">
            {indicators.map((indicator, index) => (
                <div key={index} className={`indicator-card ${indicator.highlight ? 'highlight' : ''}`}>
                    <div className="ket-value">
                        {indicator.isProgress ? (
                            <h3>{indicator.value}% <Progress size="small" percent={indicator.value} showInfo={false} strokeColor="#00f45a" /></h3>
                        ) : (
                            <h3>{indicator.value}</h3>
                        )}
                    </div>
                    {indicator.isProgress ? (
                        <div className="ket-label-none">{indicator.label}</div>
                    ) : (
                        <HandleTooltip value={indicator.value} text={indicator.label}>
                            <div className="ket-label">{indicator.label}</div>
                        </HandleTooltip>
                    )}
                </div>
            ))}
        </div>
    );
};

export default KeyIndicators;




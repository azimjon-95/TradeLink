// LineChart.js
import React from 'react';

const LineChart = ({ data, width = 578, height = 60, strokeColor = "#00c086" }) => {
    const maxValue = Math.max(...data);

    // Generate points for line and filled area
    const points = data
        .map((value, index) => {
            const x = (index / (data.length - 1)) * width;
            const y = height - (value / maxValue) * height;
            return `${x},${y}`;
        })
        .join(" ");

    const filledPoints = `0, ${height} ${points} ${width}, ${height}`;

    return (
        <svg width={width} height={height} className="over-chart">
            <polygon points={filledPoints} fill={strokeColor} opacity="0.1" />
            <polyline points={points} fill="none" stroke={strokeColor} strokeWidth="1" />
        </svg>
    );
};

export default LineChart;

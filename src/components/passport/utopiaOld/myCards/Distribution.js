import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Cell } from "recharts";

const Distribution = ({ data }) => {
    const [activePeriod, setActivePeriod] = useState("Daily");

    // Mapping for days of the week (for weekly data)
    const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    // Creating an array of hours (for daily data)
    const hours = Array.from({ length: 24 }, (_, i) => `${i}:00`);

    // Format data to include hour/day labels
    const formattedData = activePeriod === "Daily"
        ? data?.daily.map((item, index) => ({ ...item, hour: hours[index] }))
        : data?.weekly.map((item, index) => ({ ...item, day: weekDays[index] }));


    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload?.length) {
            const { abs, rel, long, short } = payload[0].payload; // Destructure data from payload
            return (
                <div className="PLByMonth">
                    <p><strong>{label}</strong></p>
                    <p>Number of order: <strong>{abs}</strong> ({(rel * 100).toFixed(2)}%)</p>
                    <p>Long orders: <strong>{long}</strong></p>
                    <p>Short orders: <strong>{short}</strong></p>
                </div>
            );
        }
        return null;
    };

    return (
        <>
            <h2 className="ket-inxTitle">Distribution of Orders by Amount</h2>
            <nav className="single-tabs">
                <button
                    onClick={() => setActivePeriod("Daily")}
                    className={activePeriod === "Daily" ? "active" : ""}
                >
                    Daily
                </button>
                <button
                    onClick={() => setActivePeriod("Weekly")}
                    className={activePeriod === "Weekly" ? "active" : ""}
                >
                    Weekly
                </button>
            </nav>
            <div className="revenue-by-month">
                <div></div><span>Distribution</span>
            </div>
            <ResponsiveContainer width="100%" height={240}>
                <BarChart data={formattedData} margin={{ top: 20, right: 0, left: 0, bottom: 5 }}>
                    <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#ccc" />
                    <XAxis
                        dataKey={activePeriod === "Daily" ? "hour" : "day"}
                        tick={{ fontSize: 10 }}
                        axisLine={false}
                        tickLine={false}
                    />
                    <YAxis tick={{ fontSize: 10 }} axisLine={{ stroke: '#a9a9a978' }} tickLine={{ stroke: '#a9a9a978' }} />
                    <Tooltip content={<CustomTooltip />} cursor={false} />
                    <Legend />
                    <Bar dataKey="abs" name="Order Amount" barSize={activePeriod === "Daily" ? 20 : 60} fill="#14C886">
                        {formattedData?.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={'#14C886'} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </>
    );
};

export default Distribution;

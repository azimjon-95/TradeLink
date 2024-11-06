import React from 'react';
import { AiOutlineQuestionCircle } from "react-icons/ai";
import './style.css';

const OutlineCircle = () => {
    const data = {
        main: [
            {
                title: "Account Information",
                items: [
                    { label: "Tracking days", value: "1.15K" },
                    { label: "Total days", value: "1.8K" },
                    { label: "Start date", value: "Dec 4, 2019 2:00 PM" },
                ],
            },
            {
                title: "Balance Analytics",
                items: [
                    { label: "Average balance", value: "$1.46K" },
                    { label: "Maximum balance", value: "$6.28K" },
                    { label: "Minimum balance", value: "$0" },
                ],
            },
            {
                title: "Profit Net",
                items: [
                    { label: "The sum of total profit and total loss", value: "$5.24K" },
                    { label: "Total profit", value: "$32.58K" },
                    { label: "Total loss", value: "$27.34K" },
                ],
            },
            {
                title: "Funding",
                items: [
                    { label: "Net", value: "-$289.01" },
                    { label: "Received", value: "$444.97" },
                    { label: "Paid", value: "$733.98" },
                ],
            },
            {
                title: "Profit Ratio",
                items: [
                    { label: "P/L ratio", value: "1.68" },
                    { label: "Average profit", value: "3.53%" },
                    { label: "Average loss", value: "-2.11%" },
                ],
            },
            {
                title: "Win Ratio",
                items: [
                    { label: "Winning days", value: "267" },
                    { label: "Losing days", value: "341" },
                    { label: "Breakeven days", value: "544" },
                ],
            },
            {
                title: "Commission",
                items: [
                    { label: "Total", value: "-$1.99K" },
                    { label: "Paid", value: "-$1.99K" },
                    { label: "Rebate", value: "$0" },
                ],
            },
            {
                title: "Additional Information",
                items: [
                    { label: "Trade volume", value: "$5M" },
                    { label: "Market's used", value: "12" },
                    { label: "Total trades", value: "9.41K" },
                ],
            },
            {
                title: "D/W Information",
                items: [
                    { label: "Total deposit", value: "$1.6K" },
                    { label: "Total withdrawal", value: "-$6.84K" },
                    { label: "Referral payments", value: "$0" },
                ],
            },
        ],
    }

    return data?.main?.map((card, index) => (
        <div key={index} className="single-card">
            <h3>{card.title} <AiOutlineQuestionCircle /></h3>
            <ul>
                {card.items?.map((item, i) => (
                    <li key={i} className="single-card-item">
                        <span className="single-label"> {item.label}</span>
                        <span className="single-values">{item.value}</span>
                    </li>
                ))}
            </ul>
        </div>
    ))

};

export default OutlineCircle;



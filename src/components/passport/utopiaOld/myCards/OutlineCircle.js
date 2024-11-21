import React from 'react';
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { Tooltip, Skeleton } from 'antd';

const OutlineCircle = ({ data, currentLanguage, translationsInfo }) => {
    const formatCurrency = (value) => {
        if (typeof value !== 'number' || isNaN(value)) {
            return '$0';
        }
        return value >= 1000
            ? `$${Math.floor(value / 1000).toLocaleString()}K`
            : `$${Math.floor(value).toLocaleString()}`;
    };

    const t = translationsInfo[currentLanguage]

    // Descriptive tooltips for each label
    const tooltipText = {
        "Tracking days": "The number of days the account has been actively tracked.",
        "Total days": "The total number of days for which the account is considered.",
        "Start date": "The date when the account started.",
        "Average balance": "The average balance of the account over the period.",
        "Maximum balance": "The highest balance ever recorded in the account.",
        "Minimum balance": "The lowest balance ever recorded in the account.",
        "The sum of total profit and total loss": "The total sum of profit and loss for the account.",
        "Total profit": "The total profit earned by the account.",
        "Total loss": "The total loss incurred by the account.",
        "Net": "The net value of the account (received - paid).",
        "Received": "The total amount received by the account.",
        "Paid": "The total amount paid from the account.",
        "P/L ratio": "The ratio of profit to loss in the account.",
        "Average profit": "The average percentage of profit over the period.",
        "Average loss": "The average percentage of loss over the period.",
        "Winning days": "The number of days with a positive balance.",
        "Losing days": "The number of days with a negative balance.",
        "Breakeven days": "The number of days the account broke even.",
        "Total": "The total amount of commission in the account.",
        "Paid": "The amount of commission paid from the account.",
        "Rebate": "The rebate amount received by the account.",
        "Trade volume": "The total volume of trades conducted in the account.",
        "Market's used": "The number of different markets used in trading.",
        "Total trades": "The total number of trades conducted in the account.",
        "Total deposit": "The total amount deposited into the account.",
        "Total withdrawal": "The total amount withdrawn from the account.",
        "Referral payments": "The total payments made for referrals.",
    };

    const result = {
        main: [
            {
                title: (
                    <Tooltip title={t?.accountInformation} placement="top">
                        <span>{t?.accountInformation}</span>
                    </Tooltip>
                ),
                items: [
                    { label: "Tracking days", value: `${data?.account_info?.tracking_days ?? '-'}`, original: data?.account_info?.tracking_days },
                    { label: "Total days", value: `${data?.account_info?.total_days ?? '-'}`, original: data?.account_info?.total_days },
                    { label: "Start date", value: new Date(data?.account_info?.start_date).toLocaleString() || '-', original: data?.account_info?.start_date },
                ],
            },
            {
                title: (
                    <Tooltip title={t?.balanceAnalytics} placement="top">
                        <span>{t?.balanceAnalytics}</span>
                    </Tooltip>
                ),
                items: [
                    { label: "Average balance", value: formatCurrency(data?.balance_analytics?.average_balance) ?? '-', original: data?.balance_analytics?.average_balance },
                    { label: "Maximum balance", value: formatCurrency(data?.balance_analytics?.max_balance) ?? '-', original: data?.balance_analytics?.max_balance },
                    { label: "Minimum balance", value: formatCurrency(data?.balance_analytics?.min_balance_r) ?? '-', original: data?.balance_analytics?.min_balance_r },
                ],
            },
            {
                title: (
                    <Tooltip title="Profit and loss details" placement="top">
                        <span>{t?.profitNet}</span>
                    </Tooltip>
                ),
                items: [
                    { label: "The sum of total profit and total loss", value: formatCurrency(data?.profit_net?.the_sum_of_total_profit_and_total_loss) ?? '-', original: data?.profit_net?.the_sum_of_total_profit_and_total_loss },
                    { label: "Total profit", value: formatCurrency(data?.profit_net?.totalProfit) ?? '-', original: data?.profit_net?.totalProfit },
                    { label: "Total loss", value: formatCurrency(data?.profit_net?.totalLoss) ?? '-', original: data?.profit_net?.totalLoss },
                ],
            },
            {
                title: (
                    <Tooltip title="Information about funding and transactions" placement="top">
                        <span>Funding</span>
                    </Tooltip>
                ),
                items: [
                    { label: "Net", value: formatCurrency(data?.financing?.net) ?? '-', original: data?.financing?.net },
                    { label: "Received", value: formatCurrency(data?.financing?.received) ?? '-', original: data?.financing?.received },
                    { label: "Paid", value: formatCurrency(data?.financing?.paid) ?? '-', original: data?.financing?.paid },
                ],
            },
            {
                title: (
                    <Tooltip title="Profit ratio calculations" placement="top">
                        <span>Profit Ratio</span>
                    </Tooltip>
                ),
                items: [
                    { label: "P/L ratio", value: `${data?.profit_ratio?.pnl?.toFixed(2) ?? '-'}`, original: data?.profit_ratio?.pnl },
                    { label: "Average profit", value: `${(data?.profit_ratio?.average_profit * 100).toFixed(2) ?? '-'}%`, original: data?.profit_ratio?.average_profit },
                    { label: "Average loss", value: `${(data?.profit_ratio?.average_loss * 100).toFixed(2) ?? '-'}%`, original: data?.profit_ratio?.average_loss },
                ],
            },
            {
                title: (
                    <Tooltip title="Statistics about win/loss ratio" placement="top">
                        <span>Win Ratio</span>
                    </Tooltip>
                ),
                items: [
                    { label: "Winning days", value: `${data?.win_ratio?.winning_days ?? '-'}`, original: data?.win_ratio?.winning_days },
                    { label: "Losing days", value: `${data?.win_ratio?.losing_days ?? '-'}`, original: data?.win_ratio?.losing_days },
                    { label: "Breakeven days", value: `${data?.win_ratio?.breakeven_days ?? '-'}`, original: data?.win_ratio?.breakeven_days },
                ],
            },
            {
                title: (
                    <Tooltip title="Commission details" placement="top">
                        <span>Commission</span>
                    </Tooltip>
                ),
                items: [
                    { label: "Total", value: formatCurrency(data?.commission?.total) ?? '-', original: data?.commission?.total },
                    { label: "Paid", value: formatCurrency(data?.commission?.paid) ?? '-', original: data?.commission?.paid },
                    { label: "Rebate", value: formatCurrency(data?.commission?.rebate) ?? '-', original: data?.commission?.rebate },
                ],
            },
            {
                title: (
                    <Tooltip title="Additional account information" placement="top">
                        <span>Additional Information</span>
                    </Tooltip>
                ),
                items: [
                    { label: "Trade volume", value: formatCurrency(data?.additional_information?.trade_volume) ?? '-', original: data?.additional_information?.trade_volume },
                    { label: "Market's used", value: `${data?.additional_information?.markets_used ?? '-'}`, original: data?.additional_information?.markets_used },
                    { label: "Total trades", value: `${data?.additional_information?.total_trades ?? '-'}`, original: data?.additional_information?.total_trades },
                ],
            },
            {
                title: (
                    <Tooltip title="Deposit and withdrawal details" placement="top">
                        <span>D/W Information</span>
                    </Tooltip>
                ),
                items: [
                    { label: "Total deposit", value: formatCurrency(data?.d_n_w_information?.total_deposit) ?? '-', original: data?.d_n_w_information?.total_deposit },
                    { label: "Total withdrawal", value: formatCurrency(data?.d_n_w_information?.total_withdrawal) ?? '-', original: data?.d_n_w_information?.total_withdrawal },
                    { label: "Referral payments", value: formatCurrency(data?.d_n_w_information?.referral_payments) ?? '-', original: data?.d_n_w_information?.referral_payments },
                ],
            },
        ],
    };


    return (
        <>
            {
                data && Object.keys(data).length > 0 ? (
                    result?.main?.map((card, index) => (
                        <div key={index} className="single-card">
                            <h3>{card.title} <AiOutlineQuestionCircle /></h3>
                            <ul>
                                {card.items?.map((item, i) => (
                                    <li key={i} className="single-card-item">
                                        <Tooltip title={tooltipText[item.label] || 'No description available'} placement="top">
                                            <span className="single-label">
                                                {item.label}
                                            </span>
                                        </Tooltip>
                                        <Tooltip title={"$" + (item.original?.toLocaleString() || '-')} placement="top">
                                            <span
                                                className="single-values"
                                                style={{ color: item.original <= 0 ? 'red' : 'inherit' }} // Apply red color if value is <= 0
                                            >
                                                {item.value}
                                            </span>
                                        </Tooltip>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))
                ) : (
                    result?.main?.map((card, index) => (
                        <div key={index} className="single-card">
                            <h3>
                                <Skeleton.Input style={{ width: 180 }} active loading={true} />
                                <AiOutlineQuestionCircle />
                            </h3>
                            <ul>
                                <Skeleton active paragraph={{ rows: 1 }} />
                            </ul>
                        </div>
                    ))
                )
            }
        </>
    );
};

export default OutlineCircle;




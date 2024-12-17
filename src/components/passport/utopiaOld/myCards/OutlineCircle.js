import React, { useState, useEffect } from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { Tooltip, Skeleton } from "antd";
import axios from "../../../../api";
import { languagesLab, tooltipTextLab, languagesTool } from "../Lang";

const OutlineCircle = ({ id, currentLanguage, selectValue }) => {
  const [data, setStats] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchStats = async () => {
      if (!id || !selectValue) return;

      try {
        const response = await axios.get(
          `/portfolio/stats/?portfolio_id=${id}&time_step=${selectValue}`,
          { signal }
        );
        setStats(response?.data?.data?.main_statistic);
      } catch (error) {
        if (!axios.isCancel(error)) {
          console.error("Error fetching stats:", error);
        }
      }
    };

    const debounceFetch = setTimeout(fetchStats, 300);

    return () => {
      clearTimeout(debounceFetch);
      controller.abort();
    };
  }, [id, selectValue]);

  const formatCurrency = (value) => {
    if (typeof value !== "number" || isNaN(value)) {
      return "$0";
    }
    return value >= 1000
      ? `$${Math.floor(value / 1000).toLocaleString()}K`
      : `$${Math.floor(value).toLocaleString()}`;
  };

  const t = languagesLab[currentLanguage];

  // Descriptive tooltips for each label
  const tooltipText = tooltipTextLab[currentLanguage];
  const tooltipTool = languagesTool[currentLanguage];

  const result = {
    main: [
      {
        title: (
          <Tooltip title={tooltipTool?.accountInformation} placement="top">
            <span>{t?.accountInformation}</span>
          </Tooltip>
        ),
        items: [
          {
            tooltip: tooltipText.trackingDays,
            label: t?.trackingDays,
            value: `${data?.account_info?.tracking_days ?? "-"}`,
            original: data?.account_info?.tracking_days,
          },
          {
            tooltip: tooltipText.totalDay,
            label: t?.totalDays,
            value: `${data?.account_info?.total_days ?? "-"}`,
            original: data?.account_info?.total_days,
          },
          {
            tooltip: tooltipText.startDate,
            label: t?.startDate,
            value:
              new Date(data?.account_info?.start_date).toLocaleString() || "-",
            original: data?.account_info?.start_date,
          },
        ],
      },
      {
        title: (
          <Tooltip title={tooltipTool?.balanceAnalytics} placement="top">
            <span>{t?.balanceAnalytics}</span>
          </Tooltip>
        ),
        items: [
          {
            tooltip: tooltipText.averageBalance,
            label: t?.averageBalance,
            value:
              formatCurrency(data?.balance_analytics?.average_balance) ?? "-",
            original: data?.balance_analytics?.average_balance,
          },
          {
            tooltip: tooltipText.maximumBalance,
            label: t?.maxBalance,
            value: formatCurrency(data?.balance_analytics?.max_balance) ?? "-",
            original: data?.balance_analytics?.max_balance,
          },
          {
            tooltip: tooltipText.minimumBalance,
            label: t?.minBalance,
            value:
              formatCurrency(data?.balance_analytics?.min_balance_r) ?? "-",
            original: data?.balance_analytics?.min_balance_r,
          },
        ],
      },
      {
        title: (
          <Tooltip title={tooltipTool?.profitNet} placement="top">
            <span>{t?.profitNet}</span>
          </Tooltip>
        ),
        items: [
          {
            tooltip: tooltipText.theSumOfTotal,
            label: t?.totalProfitOf,
            value:
              formatCurrency(
                data?.profit_net?.the_sum_of_total_profit_and_total_loss
              ) ?? "-",
            original: data?.profit_net?.the_sum_of_total_profit_and_total_loss,
          },
          {
            tooltip: tooltipText.totalProfit,
            label: t?.totalProfit,
            value: formatCurrency(data?.profit_net?.totalProfit) ?? "-",
            original: data?.profit_net?.totalProfit,
          },
          {
            tooltip: tooltipText.totalLoss,
            label: t?.totalLoss,
            value: formatCurrency(data?.profit_net?.totalLoss) ?? "-",
            original: data?.profit_net?.totalLoss,
          },
        ],
      },
      {
        title: (
          <Tooltip title={tooltipTool?.funding} placement="top">
            <span>{t?.funding}</span>
          </Tooltip>
        ),
        items: [
          {
            tooltip: tooltipText.Net,
            label: t?.net,
            value: formatCurrency(data?.financing?.net) ?? "-",
            original: data?.financing?.net,
          },
          {
            tooltip: tooltipText.Received,
            label: t?.received,
            value: formatCurrency(data?.financing?.received) ?? "-",
            original: data?.financing?.received,
          },
          {
            tooltip: tooltipText.Paid,
            label: t?.paid,
            value: formatCurrency(data?.financing?.paid) ?? "-",
            original: data?.financing?.paid,
          },
        ],
      },
      {
        title: (
          <Tooltip title={tooltipTool?.profitRatio} placement="top">
            <span>{t?.profitRatio}</span>
          </Tooltip>
        ),
        items: [
          {
            tooltip: tooltipText.PLratio,
            label: t?.pnl,
            value: `${data?.profit_ratio?.pnl?.toFixed(2) ?? "-"}`,
            original: data?.profit_ratio?.pnl,
          },
          {
            tooltip: tooltipText.averageProfit,
            label: t?.averageProfit,
            value: `${
              (data?.profit_ratio?.average_profit * 100).toFixed(2) ?? "-"
            }%`,
            original: data?.profit_ratio?.average_profit,
          },
          {
            tooltip: tooltipText.averageLoss,
            label: t?.averageLoss,
            value: `${
              (data?.profit_ratio?.average_loss * 100).toFixed(2) ?? "-"
            }%`,
            original: data?.profit_ratio?.average_loss,
          },
        ],
      },
      {
        title: (
          <Tooltip title={tooltipTool?.winRatio} placement="top">
            <span>{t?.winRatio}</span>
          </Tooltip>
        ),
        items: [
          {
            tooltip: tooltipText.WinningDays,
            label: t?.winningDays,
            value: `${data?.win_ratio?.winning_days ?? "-"}`,
            original: data?.win_ratio?.winning_days,
          },
          {
            tooltip: tooltipText.losingDays,
            label: t?.losingDays,
            value: `${data?.win_ratio?.losing_days ?? "-"}`,
            original: data?.win_ratio?.losing_days,
          },
          {
            tooltip: tooltipText.breakevenDays,
            label: t?.breakevenDays,
            value: `${data?.win_ratio?.breakeven_days ?? "-"}`,
            original: data?.win_ratio?.breakeven_days,
          },
        ],
      },
      {
        title: (
          <Tooltip title={tooltipTool?.commission} placement="top">
            <span>{t?.commission}</span>
          </Tooltip>
        ),
        items: [
          {
            tooltip: tooltipText.total,
            label: t?.total,
            value: formatCurrency(data?.commission?.total) ?? "-",
            original: data?.commission?.total,
          },
          {
            tooltip: "sd",
            label: t?.paid,
            value: formatCurrency(data?.commission?.paid) ?? "-",
            original: data?.commission?.paid,
          },
          {
            tooltip: tooltipText.rebate,
            label: t?.rebate,
            value: formatCurrency(data?.commission?.rebate) ?? "-",
            original: data?.commission?.rebate,
          },
        ],
      },
      {
        title: (
          <Tooltip title={tooltipTool?.additionalInformation} placement="top">
            <span>{t?.additionalInformation}</span>
          </Tooltip>
        ),
        items: [
          {
            tooltip: tooltipText.tradeVolume,
            label: t?.tradeVolume,
            value:
              formatCurrency(data?.additional_information?.trade_volume) ?? "-",
            original: data?.additional_information?.trade_volume,
          },
          {
            tooltip: tooltipText.marketsUsed,
            label: t?.marketsUsed,
            value: `${data?.additional_information?.markets_used ?? "-"}`,
            original: data?.additional_information?.markets_used,
          },
          {
            tooltip: tooltipText.totalTrades,
            label: t?.totalTrades,
            value: `${data?.additional_information?.total_trades ?? "-"}`,
            original: data?.additional_information?.total_trades,
          },
        ],
      },
      {
        title: (
          <Tooltip title={tooltipTool?.DWinformation} placement="top">
            <span>{t?.DWinformation}</span>
          </Tooltip>
        ),
        items: [
          {
            tooltip: tooltipText.totalDeposit,
            label: t?.totalDeposit,
            value:
              formatCurrency(data?.d_n_w_information?.total_deposit) ?? "-",
            original: data?.d_n_w_information?.total_deposit,
          },
          {
            tooltip: tooltipText.totalWithdrawal,
            label: t?.totalWithdrawal,
            value:
              formatCurrency(data?.d_n_w_information?.total_withdrawal) ?? "-",
            original: data?.d_n_w_information?.total_withdrawal,
          },
          {
            tooltip: tooltipText.referralPayments,
            label: t?.referralPayments,
            value:
              formatCurrency(data?.d_n_w_information?.referral_payments) ?? "-",
            original: data?.d_n_w_information?.referral_payments,
          },
        ],
      },
    ],
  };

  return (
    <>
      {data && Object?.keys(data).length > 0
        ? result?.main?.map((card, index) => (
            <div key={index} className="single-card">
              <h3>
                {card.title} <AiOutlineQuestionCircle />
              </h3>
              <ul>
                {card.items?.map((item, i) => (
                  <li key={i} className="single-card-item">
                    <Tooltip
                      title={item.tooltip || "No description available"}
                      placement="top"
                    >
                      <span className="single-label">{item.label}</span>
                    </Tooltip>
                    <Tooltip
                      title={"$" + (item.original?.toLocaleString() || "-")}
                      placement="top"
                    >
                      <span
                        className="single-values"
                        style={{
                          color: item.original <= 0 ? "red" : "inherit",
                        }} // Apply red color if value is <= 0
                      >
                        {item.value}
                      </span>
                    </Tooltip>
                  </li>
                ))}
              </ul>
            </div>
          ))
        : result?.main?.map((card, index) => (
            <div key={index} className="single-card">
              <h3>
                <Skeleton.Input style={{ width: 180 }} active loading={true} />
                <AiOutlineQuestionCircle />
              </h3>
              <ul>
                <Skeleton active paragraph={{ rows: 1 }} />
              </ul>
            </div>
          ))}
    </>
  );
};

export default OutlineCircle;

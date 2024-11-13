import React from 'react';
import './style.css';
import { Tooltip, Skeleton } from 'antd';



const Investment = ({ data }) => {

    const datas = [
        {
            title: "Lifetime Experience",
            value: `${data?.alpha?.toFixed(2)}`,
            description: "Very good",
            a: 25,
            y: 25,
            x: 25,
            m: 25,
            p: 25,
            sliderValue: +data?.alpha,
        },
        {
            title: "Sharpe Ratio",
            value: `${data?.sharpe_ratio?.toFixed(2)}`,
            description: "Excellent risk-adjusted performance",
            a: 25,
            y: 25,
            x: 25,
            m: 25,
            p: 25,
            sliderValue: +data?.sharpe_ratio,
        },
        {
            title: "Calmar Ratio",
            value: `${data?.calmar_ratio?.toFixed(2)}`,
            description: "High return per drawdown risk",
            a: 25,
            y: 25,
            x: 25,
            m: 25,
            p: 25,
            sliderValue: +data?.calmar_ratio,
        },
        {
            title: "Sortino Ratio",
            value: `${data?.sortino_ratio?.toFixed(2)}`,
            description: "Excellent downside risk-adjusted performance",
            a: 25,
            y: 25,
            x: 25,
            m: 25,
            p: 25,
            sliderValue: +data?.sortino_ratio,
        },
        {
            title: "IR",
            value: `${data?.ir?.toFixed(2)}`,
            description: "Greatly outperforms benchmark",
            a: 25,
            y: 25,
            x: 25,
            m: 25,
            p: 25,
            sliderValue: +data?.ir,
        },
        {
            title: "Volatility",
            value: `${data?.volatility?.toFixed(2)}`,
            description: "Some fluctuations, moderate risk",
            a: 25,
            y: 25,
            x: 25,
            m: 25,
            p: 25,
            sliderValue: +data?.volatility,
        },
        {
            title: "α Ratio",
            value: `${data?.treynor_ratio?.toFixed(2)}`,
            description: "Greatly outperforms benchmark",
            a: 25,
            y: 25,
            x: 25,
            m: 25,
            p: 25,
            sliderValue: +data?.treynor_ratio,
        },
        {
            title: "β Ratio",
            value: `${data?.beta_ratio?.toFixed(2)}`,
            description: "Moves with market",
            a: 25,
            y: 25,
            x: 25,
            m: 25,
            p: 25,
            sliderValue: +data?.beta_ratio,
        },
        {
            title: "Treynor Ratio",
            value: `${data?.treynor_ratio?.toFixed(2)}`,
            description: "High return per market risk",
            a: 25,
            y: 25,
            x: 25,
            m: 25,
            p: 25,
            sliderValue: +data?.treynor_ratio,
        },
        {
            title: "Schwager Ratio",
            value: `${data?.schwager_ratio?.toFixed(2)}`,
            description: "Favorable balance of returns",
            a: 25,
            y: 25,
            x: 25,
            m: 25,
            p: 25,
            sliderValue: +data?.schwager_ratio,
        },
        {
            title: "R²",
            value: `${data?.r_sqr?.toFixed(2)}`,
            description: "Independent from benchmark",
            a: 25,
            y: 25,
            x: 25,
            m: 25,
            p: 25,
            sliderValue: +data?.r_sqr,
        },
        {
            title: "M²",
            value: `${data?.m_sqr?.toFixed(2)}`,
            description: "Significant risk-adjusted outperformance",
            a: 25,
            y: 25,
            x: 25,
            m: 25,
            p: 25,
            sliderValue: +data?.m_sqr,
        }
    ];


    const Card = ({ title, value, description, a, y, x, m, p, sliderValue }) => {
        // Segmentlar uchun qiymatlar
        const segments = [
            { value: Math.max(a, 0), color: '#ECEFF5' }, // a qiymati
            { value: Math.max(y, 0), color: '#BCEDCE' }, // y qiymati
            { value: Math.max(x, 0), color: '#BCEDCE' }, // x qiymati
            { value: Math.max(m, 0), color: '#90E1AE' }, // m qiymati
            { value: Math.max(p, 0), color: '#21C45D' }  // p qiymati
        ];

        // Umumiy qiymatlarni hisoblash
        const total = segments.reduce((acc, segment) => acc + segment.value, 0);

        // Gradient ranglarni hisoblash
        const gradientColors = segments.map((segment, index) => {
            const percentage = (segment.value / total) * 100;
            const position = index === 0 ? 0 : segments.slice(0, index).reduce((acc, s) => acc + (s.value / total) * 100, 0);
            return `${segment.color} ${position}% ${position + percentage}%`;
        }).join(', ');

        return (
            <>
                <div className="investment-card">
                    <div className="investment-card-header">
                        <h3>{title}</h3>
                        <Tooltip title={`${sliderValue}`}>
                            <span className="investment-value">{value}</span>
                        </Tooltip>
                    </div>
                    <p className="investment-description">{description}</p>
                    <div className="investment-slider-container">
                        <div
                            className="investment-slider-scale"
                            style={{
                                position: 'relative',
                                width: '100%',
                                height: '7px',
                                borderRadius: '7px',
                                background: `linear-gradient(to right, ${gradientColors})`, // Linear gradient
                            }}
                        >
                            <div
                                style={{
                                    position: 'absolute',
                                    left: `${sliderValue <= 3 ? sliderValue * (5 / 3) : Math.min(sliderValue, 100)}%`,
                                    transform: 'translateX(-50%)', // Markazdan ko'rsatish
                                    width: '12px', // Sliderning kengligi
                                    height: '12px', // Sliderning balandligi
                                    backgroundColor: '#ffffff', // Sliderning rangi
                                    borderRadius: '50%',
                                    border: '.5px solid #373737',
                                    zIndex: 2, // Frontda bo'lishi uchun
                                    top: "-3px",
                                }}
                            />
                        </div>
                    </div>
                </div>
            </>
        );
    };


    return (
        <>
            {
                data && Object.keys(data).length > 0 ? (
                    datas?.map((item, index) => (
                        <Card
                            key={index}
                            title={item.title}
                            value={item.value}
                            description={item.description}
                            a={item.a}
                            y={item.y}
                            x={item.x}
                            m={item.m}
                            p={item.p}
                            sliderValue={item.sliderValue}
                        />
                    ))
                ) : (
                    datas?.map((card, index) => (
                        <div key={index} className="investment-card">
                            <h3>
                                <Skeleton.Input style={{ width: 180 }} active loading={true} />
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

export default Investment;

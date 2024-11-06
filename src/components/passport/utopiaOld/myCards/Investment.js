import React from 'react';
import './style.css';


const Investment = ({ activeTab }) => {
    const datas = [
        {
            title: "Lifetime Experience",
            value: "1.15K",
            description: "Very good",
            a: 0,
            y: 100,
            x: 170,
            m: 200,
            p: 270,
            sliderValue: 180,
        },
        {
            title: "Sharpe Ratio",
            value: "2.17",
            description: "Excellent risk-adjusted performance",
            a: 0,
            y: -20,
            x: 170,
            m: 180,
            p: 270,
            sliderValue: 1.5,
        },
        {
            title: "Calmar Ratio",
            value: "1.82",
            description: "High return per drawdown risk",
            a: 0,
            y: 100,
            x: 170,
            m: 200,
            p: 270,
            sliderValue: 1.2,
        },
        {
            title: "Sortino Ratio",
            value: "10.1",
            description: "Excellent downside risk-adjusted performance",
            a: 0,
            y: 50,
            x: 100,
            m: 120,
            p: 270,
            sliderValue: 1,
        },
        {
            title: "IR",
            value: "2.78",
            description: "Greatly outperforms benchmark",
            a: 0,
            y: 100,
            x: 170,
            m: 200,
            p: 270,
            sliderValue: 0.8,
        },
        {
            title: "Volatility",
            value: "52.87%",
            description: "Some fluctuations, moderate risk",
            a: 0,
            y: 100,
            x: 170,
            m: 200,
            p: 270,
            sliderValue: 53,
        },
        {
            title: "α Ratio",
            value: "1.14",
            description: "Greatly outperforms benchmark",
            a: 0,
            y: 100,
            x: 170,
            m: 200,
            p: 270,
            sliderValue: 0.8,
        },
        {
            title: "β Ratio",
            value: "0.03",
            description: "Moves with market",
            a: 0,
            y: 100,
            x: 170,
            m: 200,
            p: 270,
            sliderValue: 0.1,
        },
        {
            title: "Treynor Ratio",
            value: "41.94",
            description: "High return per market risk",
            a: 0,
            y: 100,
            x: 170,
            m: 200,
            p: 270,
            sliderValue: 9,
        },
        {
            title: "Schwager Ratio",
            value: "7.47",
            description: "Favorable balance of returns",
            a: 0,
            y: -100,
            x: 70,
            m: 200,
            p: 270,
            sliderValue: 90,
        },
        {
            title: "R²",
            value: "0",
            description: "Independent from benchmark",
            a: 0,
            y: -7,
            x: 170,
            m: 140,
            p: 270,
            sliderValue: 0,
        },
        {
            title: "M²",
            value: "10.41%",
            description: "Significant risk-adjusted outperformance",
            a: 0,
            y: 100,
            x: 170,
            m: 200,
            p: 270,
            sliderValue: 40,
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
            <div className="investment-card">
                <div className="investment-card-header">
                    <h3>{title}</h3>
                    <span className="investment-value">{value}</span>
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
                                left: `${((sliderValue - Math.min(...segments.map(s => s.value))) / (Math.max(...segments.map(s => s.value)) - Math.min(...segments.map(s => s.value)))) * 100}%`,
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
        );
    };





    return datas?.map((item, index) => (
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
    ));
};

export default Investment;







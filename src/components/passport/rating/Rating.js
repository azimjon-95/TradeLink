import React from 'react';
import Hexagon from 'react-hexagon';
import './style.css';

const Leaderboard = () => {
    const leaderboardData = {
        monthly: [
            { rank: 1, name: 'Верифицирован', creator: 'hamster-bot', score: 135.42 },
            { rank: 2, name: 'PROMAlgo_binace.bot', creator: 'PROMAlgo', score: 80.92 },
            { rank: 3, name: 'Counter Trend Index Li...', creator: 'GAGR', score: 65.66 },
        ],
        quarterly: [
            { rank: 1, name: 'MultiKnife risk x2', creator: 'Ed Khan', score: 231 },
            { rank: 2, name: 'OWL, btc & eth balance', creator: 'Ed Khan', score: 200.21 },
            { rank: 3, name: 'Optimal + Manual', creator: 'Arthem Capital', score: 92.19 },
        ],
        yearly: [
            { rank: 1, name: 'gix4', creator: 'Hahamas', score: 239.52 },
            { rank: 2, name: 'M-Trade(t)', creator: 'M-Trade', score: 173.58 },
            { rank: 3, name: 'Swan Catcher', creator: 'Ed Khan', score: 154.96 },
        ],
    };

    return (
        <div className="leaderboard-container">
            <h1>Leaderboard by TradeLink</h1>
            <div className="leaderboard-cards">
                <LeaderboardCard title="Monthly Top" data={leaderboardData.monthly} date="Oct 8 - Nov 7" />
                <LeaderboardCard title="Quarterly Top" data={leaderboardData.quarterly} date="Aug 9 - Nov 7" />
                <LeaderboardCard title="Yearly Top" data={leaderboardData.yearly} date="Nov 8 - Nov 7" />
            </div>
        </div>
    );
};

const LeaderboardCard = ({ title, data, date }) => {
    const getRankColor = (rank) => {
        switch (rank) {
            case 1: return '#FBAF3D';
            case 2: return '#C0C8E0';
            case 3: return '#D5B678';
            default: return '#fff';
        }
    };
    return (

        <div className="leaderboard-card">
            <h2>{title}</h2>
            <p className="leaderboard-date">{date}</p>
            <ul>
                {data.map((item) => (
                    <li key={item.rank}>
                        <div>
                            <Hexagon size={32} />
                        </div>
                        <span className="leaderboard-rank-icon" style={{ color: getRankColor(item.rank) }}>🏆 {item.rank}</span>
                        <div className="leaderboard-details">
                            <p className="leaderboard-name">{item.name}</p>
                            <p className="leaderboard-creator">by {item.creator}</p>
                        </div>
                        <p className="leaderboard-score">{item.score}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}


export default Leaderboard;

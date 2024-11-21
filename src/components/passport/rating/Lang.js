import moment from "moment/moment";
// Hozirgi oy nomini olish (har bir til uchun)
const currentMonthEn = new Date().toLocaleString('en', { month: 'long' });
const currentMonthRu = new Date().toLocaleString('ru', { month: 'long' });
const currentMonthEs = new Date().toLocaleString('es', { month: 'long' });
const currentMonthDe = new Date().toLocaleString('de', { month: 'long' });

// Tarjimalar ob'ekti
export const translations = {
    en: {
        rank: "Rank",
        portfolio: "Portfolio",
        return: "Return",
        mdd: "MDD",
        profit: "Profit",
        monthlyProfit: "Av. Monthly Profit",
        trackingFor: "Tracking for",
        leaderboardBy: "Leaderboard by",
        howToAdd: "How to add your portfolio to the rating?",
        measure: "How do we measure the Score?",
        dailyTop: "Daily Top",
        weeklyTop: "Weekly Top",
        novemberTop: `Top of ${currentMonthEn}`, // Hozirgi oy nomi inglizcha
        monthlyTop: "Monthly Top",
        quarterlyTop: "Quarterly Top",
        yearlyTop: "Yearly Top",
        topTradersRating: "Top Traders Rating",
        showNonActive: "Show non-active",
        score: "Score",
        by: "by",
    },
    ru: {
        rank: "Ранг",
        portfolio: "Портфель",
        return: "Доходность",
        mdd: "Максимальная просадка (MDD)",
        profit: "Прибыль",
        monthlyProfit: "Средняя ежемесячная прибыль",
        trackingFor: "Отслеживание за",
        leaderboardBy: "Рейтинг по",
        howToAdd: "Как добавить свой портфель в рейтинг?",
        measure: "Как мы измеряем рейтинг?",
        dailyTop: "Ежедневный Топ",
        weeklyTop: "Еженедельный Топ",
        novemberTop: `Топ месяца ${currentMonthRu}`, // Hozirgi oy nomi ruscha
        monthlyTop: "Ежемесячный Топ",
        quarterlyTop: "Квартальный Топ",
        yearlyTop: "Годовой Топ",
        topTradersRating: "Рейтинг лучших трейдеров",
        showNonActive: "Показать неактивных",
        score: "Оценка",
        by: "по",
    },
    es: {
        rank: "Rango",
        portfolio: "Portafolio",
        return: "Retorno",
        mdd: "MDD (Pérdida máxima)",
        profit: "Ganancia",
        monthlyProfit: "Ganancia mensual promedio",
        trackingFor: "Seguimiento durante",
        leaderboardBy: "Clasificación por",
        howToAdd: "¿Cómo añadir tu portafolio al ranking?",
        measure: "¿Cómo medimos la puntuación?",
        dailyTop: "Top diario",
        weeklyTop: "Top semanal",
        novemberTop: `Top de ${currentMonthEs}`, // Hozirgi oy nomi ispancha
        monthlyTop: "Top mensual",
        quarterlyTop: "Top trimestral",
        yearlyTop: "Top anual",
        topTradersRating: "Clasificación de los mejores traders",
        showNonActive: "Mostrar inactivos",
        score: "Puntuación",
        by: "por",
    },
    de: {
        rank: "Rang",
        portfolio: "Portfolio",
        return: "Rendite",
        mdd: "MDD (Maximaler Rückgang)",
        profit: "Gewinn",
        monthlyProfit: "Durchschnittlicher monatlicher Gewinn",
        trackingFor: "Verfolgung seit",
        leaderboardBy: "Rangliste nach",
        howToAdd: "Wie füge ich mein Portfolio zum Ranking hinzu?",
        measure: "Wie messen wir die Punktzahl?",
        dailyTop: "Tägliche Top",
        weeklyTop: "Wöchentliche Top",
        novemberTop: `Top des Monats ${currentMonthDe}`, // Hozirgi oy nomi nemischa
        monthlyTop: "Monatliche Top",
        quarterlyTop: "Vierteljährliche Top",
        yearlyTop: "Jährliche Top",
        topTradersRating: "Top-Trader-Ranking",
        showNonActive: "Inaktive anzeigen",
        score: "Punktzahl",
        by: "von",
    },
};



// ========================


// Sana formatlash uchun umumiy funksiya
const getFormattedDate = (locale = 'en', offsetDays = 0) => {
    return moment().locale(locale).subtract(offsetDays, 'days').format("MMM DD");
};

// Tarjimalar ob'ekti
export const transMonth = {
    en: {
        today: getFormattedDate('en'),
        startMonth: getFormattedDate('en', 0), // Month start
        endMonth: getFormattedDate('en', 0), // Month end
        oneMonthAgo: getFormattedDate('en', 30),
        fourMonthAgo: getFormattedDate('en', 90),
        oneYearAgo: getFormattedDate('en', 365),
        weeklAgo: getFormattedDate('en', 7),
    },
    ru: {
        today: getFormattedDate('ru'),
        startMonth: getFormattedDate('ru', 0),
        endMonth: getFormattedDate('ru', 0),
        oneMonthAgo: getFormattedDate('ru', 30),
        fourMonthAgo: getFormattedDate('ru', 90),
        oneYearAgo: getFormattedDate('ru', 365),
        weeklAgo: getFormattedDate('ru', 7),
    },
    es: {
        today: getFormattedDate('es'),
        startMonth: getFormattedDate('es', 0),
        endMonth: getFormattedDate('es', 0),
        oneMonthAgo: getFormattedDate('es', 30),
        fourMonthAgo: getFormattedDate('es', 90),
        oneYearAgo: getFormattedDate('es', 365),
        weeklAgo: getFormattedDate('es', 7),
    },
    de: {
        today: getFormattedDate('de'),
        startMonth: getFormattedDate('de', 0),
        endMonth: getFormattedDate('de', 0),
        oneMonthAgo: getFormattedDate('de', 30),
        fourMonthAgo: getFormattedDate('de', 90),
        oneYearAgo: getFormattedDate('de', 365),
        weeklAgo: getFormattedDate('de', 7),
    },
};

console.log(transMonth);


// import moment from "moment/moment";
// // Tarjimalar ob'ekti
// export const transMonth = {
//     en: {
//         today: moment().format("MMM DD"),
//         startMonth: moment().startOf("month").format("MMM DD"),
//         endMonth: moment().endOf("month").format("MMM DD"),
//         oneMonthAgo: moment().subtract(30, "days").format("MMM DD"),
//         fourMonthAgo: moment().subtract(90, "days").format("MMM DD"),
//         oneYearAgo: moment().subtract(365, "days").format("MMM DD"),
//         weeklAgo: moment().subtract(7, "days").format("MMM DD"),
//     },
//     ru: {
//         today: moment().locale('ru').format("MMM DD"),
//         startMonth: moment().startOf("month").locale('ru').format("MMM DD"),
//         endMonth: moment().endOf("month").locale('ru').format("MMM DD"),
//         oneMonthAgo: moment().subtract(30, "days").locale('ru').format("MMM DD"),
//         fourMonthAgo: moment().subtract(90, "days").locale('ru').format("MMM DD"),
//         oneYearAgo: moment().subtract(365, "days").locale('ru').format("MMM DD"),
//         weeklAgo: moment().subtract(7, "days").locale('ru').format("MMM DD"),
//     },
//     es: {
//         today: moment().locale('es').format("MMM DD"),
//         startMonth: moment().startOf("month").locale('es').format("MMM DD"),
//         endMonth: moment().endOf("month").locale('es').locale('es').format("MMM DD"),
//         oneMonthAgo: moment().subtract(30, "days").locale('es').format("MMM DD"),
//         fourMonthAgo: moment().subtract(90, "days").locale('es').format("MMM DD"),
//         oneYearAgo: moment().subtract(365, "days").locale('es').format("MMM DD"),
//         weeklAgo: moment().subtract(7, "days").locale('es').format("MMM DD"),
//     },
//     de: {
//         today: moment().locale('de').format("MMM DD"),
//         startMonth: moment().startOf("month").locale('de').format("MMM DD"),
//         endMonth: moment().endOf("month").locale('de').format("MMM DD"),
//         oneMonthAgo: moment().subtract(30, "days").locale('de').format("MMM DD"),
//         fourMonthAgo: moment().subtract(90, "days").locale('de').format("MMM DD"),
//         oneYearAgo: moment().subtract(365, "days").locale('de').format("MMM DD"),
//         weeklAgo: moment().subtract(7, "days").locale('de').format("MMM DD"),
//     },
// };

// console.log(transMonth);


export const translations = {
    en: {
        lite: "Lite",
        little: "A little",
        hour: "Hour",
        day: "Day",
        week: "Week",
        kIndicators: "Key indicators",
        main: "Main",
        investment: "Investment",
        trades: "Trades",
        views: "views",
    },
    ru: {
        lite: "Лёгкий",
        little: "Немного",
        hour: "Час",
        day: "День",
        week: "Неделя",
        kIndicators: "Ключевые показатели",
        main: "Главная",
        investment: "Инвестиции",
        trades: "Сделки",
        views: "просмотры",
    },
    es: {
        lite: "Ligero",
        little: "Un poco",
        hour: "Hora",
        day: "Día",
        week: "Semana",
        kIndicators: "Indicadores clave",
        main: "Principal",
        investment: "Inversión",
        trades: "Comercios",
        views: "vistas",
    },
    de: {
        lite: "Leicht",
        little: "Ein wenig",
        hour: "Stunde",
        day: "Tag",
        week: "Woche",
        kIndicators: "Schlüsselindikatoren",
        main: "Haupt",
        investment: "Investition",
        trades: "Handel",
        views: "Ansichten"
    },
};

export const checkboxData = [
    {
        key: "benchmarkBTC",
        label: {
            en: "Benchmark BTC",
            ru: "Бенчмарк BTC",
            es: "Referencia BTC",
            de: "Benchmark BTC"
        },
        color: "#FFD700"
    },
    {
        key: "return",
        label: {
            en: "Return (%)",
            ru: "Доходность (%)",
            es: "Retorno (%)",
            de: "Rendite (%)"
        },
        color: "#FFA500"
    },
    {
        key: "realizedReturn",
        label: {
            en: "Realized Return",
            ru: "Реализованный доход",
            es: "Retorno realizado",
            de: "Realisierte Rendite"
        },
        color: "#1E90FF"
    },
    {
        key: "marginBalance",
        label: {
            en: "Margin Balance",
            ru: "Маржинальный баланс",
            es: "Saldo de margen",
            de: "Margenguthaben"
        },
        color: "#3CB371"
    },
    {
        key: "balance",
        label: {
            en: "Balance",
            ru: "Баланс",
            es: "Saldo",
            de: "Guthaben"
        },
        color: "#A52A2A"
    },
    {
        key: "plByday",
        label: {
            en: "P\\L by day",
            ru: "Прибыль/Убыток за день",
            es: "P\\L por día",
            de: "P\\L pro Tag"
        },
        color: "#20B2AA"
    },
    {
        key: "profit",
        label: {
            en: "Profit ($)",
            ru: "Прибыль ($)",
            es: "Beneficio ($)",
            de: "Gewinn ($)"
        },
        color: "#4B0082"
    },
    {
        key: "usedLeverage",
        label: {
            en: "Used Leverage",
            ru: "Используемое плечо",
            es: "Apalancamiento utilizado",
            de: "Genutzter Hebel"
        },
        color: "#9370DB"
    },
    {
        key: "drawDown",
        label: {
            en: "DrawDown",
            ru: "Просадка",
            es: "Pérdida máxima",
            de: "Maximaler Verlust"
        },
        color: "#4169E1"
    },
    {
        key: "drawDownDuration",
        label: {
            en: "DrawDown Duration",
            ru: "Длительность просадки",
            es: "Duración de la pérdida",
            de: "Verlustdauer"
        },
        color: "#1E90FF"
    },
];

export const transInvestment = {
    en: {
        lifetimeExperience: "Lifetime Experience",
        sharpeRatio: "Sharpe Ratio",
        calmarRatio: "Calmar Ratio",
        sortinoRatio: "Sortino Ratio",
        ir: "IR",
        volatility: "Volatility",
        alphaRatio: "α Ratio",
        betaRatio: "β Ratio",
        treynorRatio: "Treynor Ratio",
        schwagerRatio: "Schwager Ratio",
        rSquared: "R²",
        mSquared: "M²",
        lifetimeExperienceDescription: "Very good",
        sharpeRatioDescription: "Excellent risk-adjusted performance",
        calmarRatioDescription: "High return per drawdown risk",
        sortinoRatioDescription: "Excellent downside risk-adjusted performance",
        irDescription: "Greatly outperforms benchmark",
        volatilityDescription: "Some fluctuations, moderate risk",
        alphaRatioDescription: "Greatly outperforms benchmark",
        betaRatioDescription: "Moves with market",
        treynorRatioDescription: "High return per market risk",
        schwagerRatioDescription: "Favorable balance of returns",
        rSquaredDescription: "Independent from benchmark",
        mSquaredDescription: "Significant risk-adjusted outperformance",
    },
    uz: {
        lifetimeExperience: "Umr bo'yi tajriba",
        sharpeRatio: "Sharpe nisbat",
        calmarRatio: "Calmar nisbat",
        sortinoRatio: "Sortino nisbat",
        ir: "IR",
        volatility: "Volatillik",
        alphaRatio: "α nisbat",
        betaRatio: "β nisbat",
        treynorRatio: "Treynor nisbat",
        schwagerRatio: "Schwager nisbat",
        rSquared: "R²",
        mSquared: "M²",
        lifetimeExperienceDescription: "Juda yaxshi",
        sharpeRatioDescription: "Yaxshi risk-adjusted ko'rsatkich",
        calmarRatioDescription: "Yuqori daromad, kichik xatarlik",
        sortinoRatioDescription: "Yuqori pastga qarab risk-adjusted ko'rsatkich",
        irDescription: "Benchmarkdan ancha yuqori ko'rsatkich",
        volatilityDescription: "Ba'zi o'zgarishlar, o'rtacha risk",
        alphaRatioDescription: "Benchmarkdan ancha yuqori ko'rsatkich",
        betaRatioDescription: "Bozor bilan harakat qiladi",
        treynorRatioDescription: "Bozor riskiga nisbatan yuqori daromad",
        schwagerRatioDescription: "Daromadlarning yaxshi balanslanganligi",
        rSquaredDescription: "Benchmarkdan mustaqil",
        mSquaredDescription: "Katta risk-adjusted daromad",
    },
    ru: {
        lifetimeExperience: "Опыт всей жизни",
        sharpeRatio: "Коэффициент Шарпа",
        calmarRatio: "Коэффициент Калмара",
        sortinoRatio: "Коэффициент Сортино",
        ir: "IR",
        volatility: "Волатильность",
        alphaRatio: "α коэффициент",
        betaRatio: "β коэффициент",
        treynorRatio: "Коэффициент Трейнора",
        schwagerRatio: "Коэффициент Швагера",
        rSquared: "R²",
        mSquared: "M²",
        lifetimeExperienceDescription: "Очень хорошо",
        sharpeRatioDescription: "Отличная производительность с учетом риска",
        calmarRatioDescription: "Высокая доходность при риске просадки",
        sortinoRatioDescription: "Отличная производительность с учетом риска вниз",
        irDescription: "Значительно превосходит эталон",
        volatilityDescription: "Некоторые колебания, умеренный риск",
        alphaRatioDescription: "Значительно превосходит эталон",
        betaRatioDescription: "Двигается с рынком",
        treynorRatioDescription: "Высокая доходность при рыночном риске",
        schwagerRatioDescription: "Благоприятный баланс доходности",
        rSquaredDescription: "Независим от эталона",
        mSquaredDescription: "Значительная доходность с учетом риска",
    },
    es: {
        lifetimeExperience: "Experiencia de toda la vida",
        sharpeRatio: "Índice de Sharpe",
        calmarRatio: "Índice de Calmar",
        sortinoRatio: "Índice de Sortino",
        ir: "IR",
        volatility: "Volatilidad",
        alphaRatio: "α Índice",
        betaRatio: "β Índice",
        treynorRatio: "Índice de Treynor",
        schwagerRatio: "Índice de Schwager",
        rSquared: "R²",
        mSquared: "M²",
        lifetimeExperienceDescription: "Muy bueno",
        sharpeRatioDescription: "Excelente rendimiento ajustado al riesgo",
        calmarRatioDescription: "Alta rentabilidad por riesgo de retroceso",
        sortinoRatioDescription: "Excelente rendimiento ajustado al riesgo a la baja",
        irDescription: "Supera significativamente el benchmark",
        volatilityDescription: "Algunas fluctuaciones, riesgo moderado",
        alphaRatioDescription: "Supera significativamente el benchmark",
        betaRatioDescription: "Se mueve con el mercado",
        treynorRatioDescription: "Alta rentabilidad por riesgo de mercado",
        schwagerRatioDescription: "Balance favorable de rendimientos",
        rSquaredDescription: "Independiente del benchmark",
        mSquaredDescription: "Supera significativamente el benchmark ajustado al riesgo",
    },
    de: {
        lifetimeExperience: "Lebenslange Erfahrung",
        sharpeRatio: "Sharpe-Verhältnis",
        calmarRatio: "Calmar-Verhältnis",
        sortinoRatio: "Sortino-Verhältnis",
        ir: "IR",
        volatility: "Volatilität",
        alphaRatio: "α Verhältnis",
        betaRatio: "β Verhältnis",
        treynorRatio: "Treynor-Verhältnis",
        schwagerRatio: "Schwager-Verhältnis",
        rSquared: "R²",
        mSquared: "M²",
        lifetimeExperienceDescription: "Sehr gut",
        sharpeRatioDescription: "Ausgezeichnete risikoadjustierte Leistung",
        calmarRatioDescription: "Hohe Rendite pro Rückschlagrisiko",
        sortinoRatioDescription: "Ausgezeichnete Leistung bei nach unten gerichteten Risiken",
        irDescription: "Übertrifft das Benchmark erheblich",
        volatilityDescription: "Einige Schwankungen, moderates Risiko",
        alphaRatioDescription: "Übertrifft das Benchmark erheblich",
        betaRatioDescription: "Bewegt sich mit dem Markt",
        treynorRatioDescription: "Hohe Rendite pro Marktrisiko",
        schwagerRatioDescription: "Günstige Balance der Renditen",
        rSquaredDescription: "Unabhängig vom Benchmark",
        mSquaredDescription: "Erheblicher risikoadjustierter Mehrwert",
    }
};

export const labelsBar = {
    usedLeverage: {
        en: "Used Leverage:",
        ru: "Используемое кредитное плечо:",
        de: "Verwendeter Hebel:",
        es: "Apalancamiento usado:",
    },
    longPositions: {
        en: "Long positions:",
        ru: "Длинные позиции:",
        de: "Long-Positionen:",
        es: "Posiciones largas:",
    },
    shortPositions: {
        en: "Short positions:",
        ru: "Короткие позиции:",
        de: "Short-Positionen:",
        es: "Posiciones cortas:",
    },
};

export const labels = {
    en: {
        benchmarkBTC: "Benchmark BTC",
        return: "Return (%)",
        realizedReturn: "Realized Return",
        plByDay: "P\\L by day",
        marginBalance: "Margin Balance",
        balance: "Balance",
        profit: "Profit ($)",
    },
    ru: {
        benchmarkBTC: "Бенчмарк BTC",
        return: "Доходность (%)",
        realizedReturn: "Реализованная доходность",
        plByDay: "П\\Л за день",
        marginBalance: "Маржинальный баланс",
        balance: "Баланс",
        profit: "Прибыль ($)",
    },
    de: {
        benchmarkBTC: "Benchmark BTC",
        return: "Rendite (%)",
        realizedReturn: "Realisierte Rendite",
        plByDay: "P\\L pro Tag",
        marginBalance: "Margenbilanz",
        balance: "Saldo",
        profit: "Gewinn ($)",
    },
    es: {
        benchmarkBTC: "BTC de Referencia",
        return: "Retorno (%)",
        realizedReturn: "Retorno Realizado",
        plByDay: "P\\L por día",
        marginBalance: "Balance de Margen",
        balance: "Saldo",
        profit: "Ganancia ($)",
    },
};

export const drawDown = {
    drawdown: {
        en: "DrawDown:",
        ru: "Максимальная просадка:",
        de: "Maximaler Rückgang:",
        es: "Pérdida máxima:",
    },
    drawdownDuration: {
        en: "DrawDown Duration:",
        ru: "Длительность просадки:",
        de: "Dauer des Rückgangs:",
        es: "Duración de la pérdida:",
    },
    revenueLabels: {
        en: "Revenue by month (%)",
        ru: "Доход по месяцам (%)",
        de: "Umsatz pro Monat (%)",
        es: "Ingresos por mes (%)",
    },
    plByMonthLabels: {
        en: "P/L by month:",
        ru: "Прибыль/Убыток за месяц:",
        de: "Gewinn/Verlust pro Monat:",
        es: "Ganancias/Pérdidas por mes:",
    }
};






//my card 
// =================
export const translationsInfo = {
    accountInformation: {
        en: "Account Information",
        ru: "Информация об аккаунте",
        de: "Kontoinformationen",
        es: "Información de la cuenta",
    },
    balanceAnalytics: {
        en: "Balance Analytics",
        ru: "Аналитика баланса",
        de: "Bilanzanalyse",
        es: "Análisis de balance",
    },
    profitNet: {
        en: "Profit Net",
        ru: "Чистая прибыль",
        de: "Reingewinn",
        es: "Ganancia neta",
    },
    funding: {
        en: "Funding",
        ru: "Финансирование",
        de: "Finanzierung",
        es: "Financiación",
    },
    profitRatio: {
        en: "Profit Ratio",
        ru: "Коэффициент прибыли",
        de: "Gewinnverhältnis",
        es: "Proporción de ganancias",
    },
    winRatio: {
        en: "Win Ratio",
        ru: "Коэффициент выигрыша",
        de: "Gewinnquote",
        es: "Proporción de victorias",
    },
    commission: {
        en: "Commission",
        ru: "Комиссия",
        de: "Kommission",
        es: "Comisión",
    },
    additionalInformation: {
        en: "Additional Information",
        ru: "Дополнительная информация",
        de: "Zusätzliche Informationen",
        es: "Información adicional",
    },
    DWinformation: {
        en: "D/W Information",
        ru: "Информация о депозитах и снятиях",
        de: "Ein-/Auszahlungsinformationen",
        es: "Información de depósitos y retiros",
    },
};

export const tooltipText = {
    "Tracking days": {
        en: "The number of days the account has been actively tracked.",
        uz: "Hisob qaydnomasining faol kuzatilgan kunlari soni.",
        ru: "Количество дней, в течение которых аккаунт активно отслеживался.",
        fr: "Le nombre de jours pendant lesquels le compte a été activement suivi."
    },
    "Total days": {
        en: "The total number of days for which the account is considered.",
        uz: "Hisob qaydnomasining umumiy o'rganilgan kunlari soni.",
        ru: "Общее количество дней, за которые учитывается аккаунт.",
        fr: "Le nombre total de jours pris en compte pour le compte."
    },
    "Start date": {
        en: "The date when the account started.",
        uz: "Hisob qaydnomasining ishga tushgan sanasi.",
        ru: "Дата начала работы аккаунта.",
        fr: "La date à laquelle le compte a commencé."
    },
    "Average balance": {
        en: "The average balance of the account over the period.",
        uz: "Hisob qaydnomasining davr mobaynidagi o'rtacha qoldig'i.",
        ru: "Средний баланс аккаунта за период.",
        fr: "Le solde moyen du compte sur la période."
    },
    "Maximum balance": {
        en: "The highest balance ever recorded in the account.",
        uz: "Hisob qaydnomasida qayd etilgan eng yuqori qoldiq.",
        ru: "Самый высокий баланс, зафиксированный в аккаунте.",
        fr: "Le solde le plus élevé jamais enregistré sur le compte."
    },
    "Minimum balance": {
        en: "The lowest balance ever recorded in the account.",
        uz: "Hisob qaydnomasida qayd etilgan eng past qoldiq.",
        ru: "Самый низкий баланс, зафиксированный в аккаунте.",
        fr: "Le solde le plus bas jamais enregistré sur le compte."
    },
    "The sum of total profit and total loss": {
        en: "The total sum of profit and loss for the account.",
        uz: "Hisob qaydnomasining umumiy foyda va zarar yig'indisi.",
        ru: "Общая сумма прибыли и убытков аккаунта.",
        fr: "La somme totale des profits et pertes pour le compte."
    },
    "Total profit": {
        en: "The total profit earned by the account.",
        uz: "Hisob qaydnomasida topilgan umumiy foyda.",
        ru: "Общая прибыль, полученная аккаунтом.",
        fr: "Le bénéfice total réalisé par le compte."
    },
    "Total loss": {
        en: "The total loss incurred by the account.",
        uz: "Hisob qaydnomasidagi umumiy zarar.",
        ru: "Общий убыток, понесенный аккаунтом.",
        fr: "La perte totale subie par le compte."
    },
    "Net": {
        en: "The net value of the account (received - paid).",
        uz: "Hisob qaydnomasining sof qiymati (qabul qilingan - to'langan).",
        ru: "Чистая стоимость аккаунта (получено - оплачено).",
        fr: "La valeur nette du compte (reçu - payé)."
    },
    "Received": {
        en: "The total amount received by the account.",
        uz: "Hisob qaydnomasiga tushgan umumiy mablag'.",
        ru: "Общая сумма, полученная аккаунтом.",
        fr: "Le montant total reçu par le compte."
    },
    "Paid": {
        en: "The total amount paid from the account.",
        uz: "Hisob qaydnomasidan to'langan umumiy mablag'.",
        ru: "Общая сумма, выплаченная с аккаунта.",
        fr: "Le montant total payé depuis le compte."
    },
    "P/L ratio": {
        en: "The ratio of profit to loss in the account.",
        uz: "Hisobdagi foyda va zarar nisbati.",
        ru: "Соотношение прибыли и убытков в аккаунте.",
        fr: "Le ratio des profits aux pertes dans le compte."
    },
    "Average profit": {
        en: "The average percentage of profit over the period.",
        uz: "Davr mobaynidagi o'rtacha foyda foizi.",
        ru: "Средний процент прибыли за период.",
        fr: "Le pourcentage moyen de profit sur la période."
    },
    "Average loss": {
        en: "The average percentage of loss over the period.",
        uz: "Davr mobaynidagi o'rtacha zarar foizi.",
        ru: "Средний процент убытков за период.",
        fr: "Le pourcentage moyen de perte sur la période."
    },
    // Qo'shimcha matnlar shu formatda davom etadi
    "Winning days": {
        en: "The number of days with a positive balance.",
        uz: "Ijobiy qoldiqli kunlar soni.",
        ru: "Количество дней с положительным балансом.",
        fr: "Le nombre de jours avec un solde positif."
    },
    "Losing days": {
        en: "The number of days with a negative balance.",
        uz: "Salbiy qoldiqli kunlar soni.",
        ru: "Количество дней с отрицательным балансом.",
        fr: "Le nombre de jours avec un solde négatif."
    },
    "Breakeven days": {
        en: "The number of days the account broke even.",
        uz: "Hisob qaydnomasining zarar yoki foyda qilmagan kunlari.",
        ru: "Количество дней, когда аккаунт вышел в ноль.",
        fr: "Le nombre de jours où le compte a été à l'équilibre."
    },
    // Yana boshqa matnlar qo'shiladi...
};

import React from 'react';
import { useSelector } from "react-redux";
import { Typography } from 'antd';

const NotFoundPage = () => {
    const currentLanguage = useSelector((state) => state.language.currentLanguage);

    const getMessage = (language) => {
        switch (language) {
            case 'ru':
                return {
                    title: "Страница не найдена",
                    linkText: "Главная страница"
                };
            case 'de':
                return {
                    title: "Seite nicht gefunden",
                    linkText: "Startseite"
                };
            case 'es':
                return {
                    title: "Página no encontrada",
                    linkText: "Página de inicio"
                };
            default:
                return {
                    title: "Page Not Found",
                    linkText: "Home Page"
                };
        }
    };

    const { title, linkText } = getMessage(currentLanguage);

    return (
        <div style={styles.container}>
            <div style={styles.errorContainer}>
                <span style={styles.errorNumber}>4</span>
                <span role="img" aria-label="sad emoji" style={styles.emoji}>😟</span>
                <span style={styles.errorNumber}>4</span>
            </div>
            <Typography.Title level={2} style={styles.message}>{title}</Typography.Title>
            <Typography.Link href="/" style={styles.link}>{linkText}</Typography.Link>
        </div>
    );
};
const styles = {
    container: {
        width: "100%",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '80vh',
        backgroundColor: '#f0f2f5',
        color: '#333',
        textAlign: 'center',
    },
    errorContainer: {
        display: 'flex',
        alignItems: 'center',
        fontSize: '72px',
        fontWeight: 'bold',
    },
    errorNumber: {
        color: '#333',
    },
    emoji: {
        margin: '0 10px',
    },
    message: {
        color: '#333',
        fontWeight: 'bold',
    },
    link: {
        color: '#1890ff',
        margin: '0 4px',
        fontSize: "14px"
    },

};

export default NotFoundPage;

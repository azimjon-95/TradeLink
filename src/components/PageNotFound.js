import React from 'react';
import { Typography } from 'antd';

const NotFoundPage = () => {
    return (
        <div style={styles.container}>
            <div style={styles.errorContainer}>
                <span style={styles.errorNumber}>4</span>
                <span role="img" aria-label="sad emoji" style={styles.emoji}>😟</span>
                <span style={styles.errorNumber}>4</span>
            </div>
            <Typography.Title level={2} style={styles.message}>Page Not Found</Typography.Title>
            <Typography.Link href="/" style={styles.link}>Home Page</Typography.Link>
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

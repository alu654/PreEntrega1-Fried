import React from 'react';

const ItemListContainer = ({ greeting }) => {
    return (
        <div style={styles.container}>
            <h2>{greeting}</h2>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '200px',
        margin: '20px',
        backgroundColor: '#f0f0f0',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        padding: '20px'
    }
};


export default ItemListContainer;

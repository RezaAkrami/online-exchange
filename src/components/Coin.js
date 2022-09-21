import React from 'react';
import styles from '../assets/styles/Coin.module.css';

const Coin = ({data}) => {

    const {name,image,symbol,current_price,market_cap,price_change_percentage_24h} = data;

    return (
        <div className={styles.container}>
            <img className={styles.image} src={image} alt="coin-img" />

            <span className={styles.name} >{name}</span>

            <span className={styles.symbol} >{symbol.toUpperCase()}</span>

            <span className={styles.currentPrice} >$ {current_price.toLocaleString()}</span>

            <span className={price_change_percentage_24h > 0 ? styles.greenPriceChange : styles.redPriceChange} >{price_change_percentage_24h.toFixed(2)}</span>

            <span className={styles.marketCap}>$ {market_cap.toLocaleString()}</span>
        </div>
    );
};

export default Coin;
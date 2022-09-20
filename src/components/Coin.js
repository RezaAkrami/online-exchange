import React from 'react';

const Coin = ({data}) => {

    const {name,image,symbol,current_price,market_cap,price_change_percentage_24h} = data;

    return (
        <div>
            <img src={image} alt="coin-img" />
            <span>{name}</span>
            <span>{symbol.toUpperCase()}</span>
            <span>{current_price.toLocaleString()}</span>
            <span>{price_change_percentage_24h}</span>
            <span>{market_cap.toLocaleString()}</span>
        </div>
    );
};

export default Coin;
import React , { useState , useEffect } from 'react';
import { getCoin } from '../services/api';
import Coin from './Coin';
import Loading from './Loading';
import styles from '../assets/styles/Landing.module.css';

const Landing = () => {

    // Define states
    const [conis, setConis] = useState([]);
    const [search, setSearch] = useState("");

    // Get data when page loaded
    useEffect(()=>{

        const fetchApi = async ()=>{
            const data = await getCoin();
            setConis(data);
        }

        fetchApi();

    } , []);

    //setSearch for input value
    const searchHandler = e=>{
        setSearch(e.target.value);
    }
    
    //Search coin name
    const searchCoin = conis.filter(coin=> coin.name.toLowerCase().includes(search.toLowerCase()) ) ;

    return (
        <div className={styles.landing}>
            
            {
                conis.length 
                ?
                    <>
                        <input type="text" placeholder='search ...' value={search} onChange={searchHandler} className={styles.input}/>

                        <div className={styles.coinContainer}>
                            <ul className={styles.coniData}>
                                <li>Coin</li>
                                <li>Symbol</li>
                                <li>Price</li>
                                <li>24h</li>
                                <li>Mkt Cap</li>
                            </ul>
                            {searchCoin.map( coinsData => <Coin key={coinsData.id} data={coinsData}/> )}
                        </div>
                    </>
                :
                    <Loading/>
            }
        </div>
    );
};

export default Landing;
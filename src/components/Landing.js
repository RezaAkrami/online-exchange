import React , { useState , useEffect } from 'react';
import { getCoin } from '../services/api';
import Coin from './Coin';
import Loading from './Loading';

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
        <div>
            <input type="text" placeholder='search ...' value={search} onChange={searchHandler} />
            {
                conis.length 
                ?
                    searchCoin.map( coinsData => <Coin key={coinsData.id} data={coinsData}/> )
                :
                    <Loading/>
            }
        </div>
    );
};

export default Landing;
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { getCoin } from '../services/api';
import Loading from './Loading';

const Landing = () => {

    const [conis, setConis] = useState([]);

    useEffect(()=>{

        const fetchApi = async ()=>{
            const data = await getCoin();
            setConis(data);
        }

        fetchApi();

    } , []);

    return (
        <div>
            <input type="text" placeholder='search ...' />
            {
                conis.length 
                ?
                    <div></div>
                :
                    <Loading/>
            }
        </div>
    );
};

export default Landing;
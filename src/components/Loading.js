import React from 'react';
import loadingGif from '../assets/gif/loading-gif-png-5.gif';
import styles from '../assets/styles/Loading.module.css'

const Loading = () => {
    return (
        <div>
            <img id={styles.gif} src={loadingGif} alt="Loading" />
        </div>
    );
};

export default Loading;
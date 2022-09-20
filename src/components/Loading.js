import React from 'react';
import loadingGif from '../assets/gif/loading-gif-png-5.gif';

const Loading = () => {
    return (
        <div>
            <img src={loadingGif} alt="Loading" />
        </div>
    );
};

export default Loading;
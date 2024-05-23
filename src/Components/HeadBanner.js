import React from 'react';
import '../Styles/HeadBanner.css';

function HeadBanner({title}) {
    return (
        <div className='head'>
            <h1 className='title'>{title}</h1>
        </div>
    );
}

export default HeadBanner;
import React from 'react';
import './scroll.styles.css';

const Scroll = ({ children }) => {
    return(
        <div className='Scroll'>
            {children}
        </div>
    )
}

export default Scroll;
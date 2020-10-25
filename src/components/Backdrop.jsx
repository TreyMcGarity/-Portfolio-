import React from 'react';
import '../sass/Backdrop.scss';

const Backdrop = (props) => {
    return (
        <div 
        className={props.status ? 'backdrop':'backdrop-closed'}
        onClick={(e)=> {
            e.stopPropagation();
            props.set(false)
        }}>
        </div>
    );
}

export default Backdrop;

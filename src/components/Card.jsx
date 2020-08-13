import React from 'react';

const Card = props => {
    console.log(props)
    return (
        <div onClick={props.setShow(!props.show)}>
        {/* <div> */}
            Card
        </div>
    )
}

export default Card;
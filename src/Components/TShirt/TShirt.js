import React from 'react';
import './TShirt.css'

const TShirt = ({ tshirt, handleAddToCart }) => {
    const { picture, name, price } = tshirt;
    return (
        < div className='t-shirt'>
            <img src={picture}></img>
            <h2>Name: {name}</h2>
            <price>Price: {price}</price>
            <button onClick={() => handleAddToCart(tshirt)}>Buy this</button>
        </div>
    );
};

export default TShirt;
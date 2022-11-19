import React from 'react';
import TShirt from '../TShirt/TShirt';
import './Cart.css'

const Cart = ({ cart, handkeRemoveItem }) => {

    let message;
    if (cart.length === 0) {
        message = <p>Please buy at least one Item</p>
    }
    else {
        message = <p>Thanks for buying</p>
    }
    return (
        <div className='cart-container'>
            <h3 className={cart.length === 2 ? `orange` : 'purple'}>Order summary</h3>
            <h5 className={`bold ${cart.length === 2 ? 'blue' : 'yellow'}`}>Order Quantity : {cart.length}</h5>
            {
                cart.map(tshirt => <p
                    key={tshirt._id}
                    tshirt={tshirt}>
                    {tshirt.name}
                    <button onClick={() => handkeRemoveItem(tshirt)}>X</button>
                </p>)
            }
            {
                message
            }
            {
                cart.length === 3 ? <p>buy 3 and 1 gift?</p> : <p> buy more</p>

            }
            {cart.length === 2}
        </div>
    );
};

export default Cart;
import React from 'react';
import Name from '../Name/Name';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    console.log(props.cart);
    let total = 0;
    for (const actor of cart) {
        total = total + actor.salary;
    }
    let nam = [];
    for (const name of cart) {
        nam = nam +' '+ name.name;
    }
    return (
        <>
            <div className="border border-warning text-light p-1 bg">
                <h5>Member Added: {props.cart.length}</h5>
                <h5 className="fw-normal">Total Cost: ${total} </h5>
            </div>
            <div className="row m-1">
                {
                    cart.map(actor => <Name
                    actor={actor}>    
                    </Name>)
                }
            </div>
        </>
    );
};

export default Cart;
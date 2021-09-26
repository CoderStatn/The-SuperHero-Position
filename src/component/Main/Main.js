import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Information from '../Information/Information';
import './Main.css'

const Main = () => {
    const [actors, setActors] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./fake.json')
            .then(res => res.json())
            .then(data => setActors(data));
    }, [])
    
    const handleAddToCart = (actor) => {
        const newCart = [...cart, actor];
        setCart(newCart);
    }

    return (
        <div className="container">
            <div className="row mb-3">
                <div className="col-md-9 border border-warning">
                    <div className="row">
                        {
                            actors.map(actor => <Information
                                key={actor._id}
                                actor={actor}
                                handleAddToCart={handleAddToCart}>
                            </Information>)
                        }
                    </div>
                </div>
                <div className="col-md-3">
                        <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Main;
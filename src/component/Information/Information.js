import React from 'react';
import './Information.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Information = (props) => {
    const { name, age, gender, email, salary, image } = props.actor;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />;
    return (
        <div className="col-md-6">
            <div className="bg-color border border-danger my-3">
                <div className="row g-0">
                  <div className="col-md-4 my-3">
                        <img src={image} className="img-fluid rounded border border-danger" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body text-light">
                        <p className="card-title">Name: {name}</p>
                        <p className="card-title">Age: {age}</p>
                        <p className="card-title">Gender: {gender}</p>
                        <p className="card-title">Email: {email}</p>
                        <p className="card-title">Salary: ${salary}</p>
                        <button onClick={() => props.handleAddToCart(props.actor)} className="btn btn-danger">{cartIcon} Add To Cart</button>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default Information;
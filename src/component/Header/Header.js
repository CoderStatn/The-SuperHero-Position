import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="container">
            <div className="bg p-3 text-light text-center rounded my-2">
                <h1>Make <span className="text-danger">SKF</span> Team</h1>
                <h5 className="fw-normal">Salman Khan Films (SKF) is an Indian film production company established by Bollywood actor Salman Khan.</h5>
                <h2>Total Budget: <span className="fw-bold text-warning">100 Million</span></h2>
            </div>
        </div>
    );
};

export default Header;
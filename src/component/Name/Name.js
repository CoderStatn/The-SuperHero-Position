import React from 'react';
import './Name.css'

const Name = (props) => {
    const { actor } = props;
    return (
        <div className="text-white border border-warning p-2 my-3 bg d-flex align-items-center">
            <div className="col-2">
                <img src={actor.image} alt=""className="img-fluid" />
            </div>
            <div className="col-1"></div>
            <div className="col-9">
                <h5>{actor.name}</h5>
            </div>
        </div>
    );
};

export default Name;
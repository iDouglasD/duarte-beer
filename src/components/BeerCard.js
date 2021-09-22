import React from "react";

function BeerCard({ image, name, description }) {
    return (
        <div className="beer_item">
            <div style={{ backgroundImage: `url(${image})` }}></div>
            <h1> {name} </h1>
            <p> {description} </p>
        </div>
    );
}

export default BeerCard;

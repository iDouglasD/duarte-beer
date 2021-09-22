import React from "react";
import { BeerList } from "../helpers/BeerList";
import BeerCard from "../components/BeerCard";
import "../styles/Beers.css";

function Beers() {
    return (
        <div className="beers">
            <div className="beers_title">Desce aquela, Doutor!</div>
            <div className="beers_list">
                {BeerList.map((beerItem, key) => {
                    return (
                        <BeerCard
                            key={key}
                            image={beerItem.image}
                            name={beerItem.name}
                            description={beerItem.description}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Beers;

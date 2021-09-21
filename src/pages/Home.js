import React from "react";
import "../styles/Home.css";
import Beer from "../assets/beer.png";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="container">
            <div className="content">
                <h1 ClassName="highlight">Duarte's Beer</h1>
                <p>TEMOS álcool EM COMUM!</p>
                <Link to="/contato">
                    <button>PARTIU ?</button>
                </Link>
            </div>
            <div className="img_wrapper">
                <img src={Beer} alt="Copo de cerveja"></img>
            </div>
        </div>
    );
}

export default Home;

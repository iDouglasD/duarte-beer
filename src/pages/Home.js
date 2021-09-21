import React from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="home">
            <div className="container">
                <div className="content">
                    <h1>Duarte's Beer</h1>
                    <p>TEMOS álcool EM COMUM!</p>
                    <Link to="/contato">
                        <button>PEÇA AGORA</button>
                    </Link>
                </div>
                <div className="icons_bg"></div>
            </div>
        </div>
    );
}

export default Home;

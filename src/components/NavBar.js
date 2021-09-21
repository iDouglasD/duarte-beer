import React from "react";
import "../styles/NavBar.css";
import Logo from "../assets/logo.png";
import ReorderIcon from "@material-ui/icons/Reorder";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div className="nav">
            <div className="nav_logo">
                <img src={Logo}></img>
            </div>
            <div className="nav_links">
                <Link to="/">Início</Link>
                <Link to="/sobre">Sobre</Link>
                <Link to="/depoimentos">Depoimentos</Link>
                <Link to="/contato">Contato</Link>
                <button>
                    <ReorderIcon sx={{ color: "orange" }} />
                </button>
            </div>
        </div>
    );
}

export default NavBar;

import React from "react";
import "../styles/NavBar.css";
import Logo from "../assets/logo.png";
import ReorderIcon from "@material-ui/icons/Reorder";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div className="nav">
            <img src={Logo}></img>
            <div className="nav_links">
                <Link className="nav_link" to="/">
                    Início
                </Link>
                <Link className="nav_link" to="/sobre">
                    Sobre
                </Link>
                <Link className="nav_link" to="/depoimentos">
                    Depoimentos
                </Link>
                <Link className="nav_link" to="/contato">
                    Contato
                </Link>
            </div>
            <button>
                <ReorderIcon sx={{ color: "orange" }} />
            </button>
        </div>
    );
}

export default NavBar;

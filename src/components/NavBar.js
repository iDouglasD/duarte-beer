import React, { useState } from "react";
import "../styles/NavBar.css";
import Logo from "../assets/logo.png";
import ReorderIcon from "@material-ui/icons/Reorder";
import { Link } from "react-router-dom";

function NavBar() {
    const [openLinks, setOpenLinks] = useState(false);

    const openLeftMenu = () => {
        setOpenLinks(!openLinks);
    };

    return (
        <div className="nav">
            <div className="nav_left" id={openLinks ? "open" : "close"}>
                <img src={Logo} />
                <div className="hiddenLinks">
                    <Link to="/">Início</Link>
                    <Link to="/sobre">Sobre</Link>
                    <Link to="/cervejas">Brejas</Link>
                    <Link to="/contato">Contato</Link>
                </div>
            </div>
            <div className="nav_links">
                <Link to="/">Início</Link>
                <Link to="/sobre">Sobre</Link>
                <Link to="/cervejas">Brejas</Link>
                <Link to="/contato">Contato</Link>
                <button onClick={openLeftMenu}>
                    <ReorderIcon sx={{ color: "orange" }} />
                </button>
            </div>
        </div>
    );
}

export default NavBar;

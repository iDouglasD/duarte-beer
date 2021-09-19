import "./NavBar.css";
import logo from "./logo.png";

function NavBar() {
    return (
        <div className="nav">
            <img src={logo} alt="logo" className="nav_logo" />
            <ul className="nav_links">
                <li className="nav_item">
                    <a className="nav_link" href="#">
                        Home
                    </a>
                </li>
                <li className="nav_item">
                    <a className="nav_link" href="#">
                        About
                    </a>
                </li>
                <li className="nav_item">
                    <a className="nav_link" href="#">
                        Testimonials
                    </a>
                </li>
                <li className="nav_item">
                    <a className="nav_link" href="#">
                        Contact us
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default NavBar;

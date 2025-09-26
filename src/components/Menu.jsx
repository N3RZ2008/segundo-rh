import { useContext } from "react";
import { Link } from "react-router";

import "./styles/menu.css";


function Menu() {
    return (
        <div className="menu">
            <Link to={"/"}>
                <div className="logo">segundoRH</div>
            </Link>
            <div className="nav">
                <Link to={"/sobre"}>
                    <div className="menuItem">Sobre Nós</div>
                </Link>
            </div>
        </div>
    )
}

export default Menu
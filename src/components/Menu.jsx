import { useContext } from "react";
import { Link } from "react-router";

import { AuthContext } from "./authComponents/AuthProvider";

import "./styles/menu.css";


function Menu() {
    const { user } = useContext(AuthContext)

    return (
        <div className="menu">
            <Link to={"/"}>
                <div className="logo">segundoRH</div>
            </Link>
            <div className="nav">
                {user == undefined ?
                    <>
                        <Link to={"/login"}>
                            <div className="menuItem">Logar</div>
                        </Link>
                        <Link to={"/signup"}>
                            <div className="menuItem">Registrar</div>
                        </Link>
                    </> :
                    <Link to={"/logout"}>
                        <div className="menuItem">Sair</div>
                    </Link>}
                <Link to={"/sobre"}>
                    <div className="menuItem">Sobre Nós</div>
                </Link>
            </div>
        </div>
    )
}

export default Menu
import { useContext } from "react";
import "./styles/menu.css";


function Menu() {
    return(
        <div className="menu">
            <div className="logo">segundoRH</div>
            <div className="nav">
                <div className="menuItem">Item 1</div>
                <div className="menuItem">Item 2</div>
                <div className="menuItem">item 3</div>
                <div className="menuItem">item 4</div>
            </div>
        </div>
    )
}

export default Menu
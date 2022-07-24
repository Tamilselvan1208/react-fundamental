import { NavLink } from "react-router-dom";
import "./router.css"

function NavBar() {
    return (
        <div className="nav-bar">
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;
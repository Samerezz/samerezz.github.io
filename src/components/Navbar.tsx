import './Navbar.css';
import { NavLink } from "react-router-dom";

function Navbar(){
    return(
        <nav>
            <ul>
                <li>
                    <NavLink to={"/About"} className={({ isActive }) => "nav-link " + (isActive ? "selected" : "un-selected")}>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/Projects"} className={({ isActive }) => "nav-link " + (isActive ? "selected" : "un-selected")}>
                        Projects
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar;
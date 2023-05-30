import './Navbar.css';
import { NavLink } from "react-router-dom";

function Navbar(){
    return(
        <nav>
            <ul>
                <li>
                    <NavLink to={"/about"} className={({ isActive }) => "nav-link " + (isActive ? "selected" : "un-selected")}>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/projects"} className={({ isActive }) => "nav-link " + (isActive ? "selected" : "un-selected")}>
                        Projects
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar;
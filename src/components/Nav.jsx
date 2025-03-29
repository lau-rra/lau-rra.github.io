import { NavLink } from "react-router-dom";

export const Nav = () => { {/*Exporting here already so need to down below?*/}
    return (
        <div className="menu">
            <nav>
            <ul>
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) => `menu-link ${isActive ? "active" : ""}`} /*Huom ei ' vaan ` */
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/about"
                        className={({ isActive }) => `menu-link ${isActive ? "active" : ""}`}
                    >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/projects"
                        className={({ isActive }) => `menu-link ${isActive ? "active" : ""}`}
                    >
                        UI/UX Projects
                    </NavLink>
                </li>
            </ul>
            </nav>
      </div>  
    );
};

export default Nav;
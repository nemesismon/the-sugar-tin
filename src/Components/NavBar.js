import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {

return (
    <div>
        <br></br>
    <NavLink style={{ textDecoration: 'none' }}
        to="/"
        exact>
            Home &ensp;
    </NavLink >
    <NavLink style={{ textDecoration: 'none' }}
        to="/about"
        exact>
            About &ensp;
    </NavLink>
    <NavLink style={{ textDecoration: 'none' }}
        to="/confections"
        exact>
            Confections &ensp;
    </NavLink>
    <NavLink style={{ textDecoration: 'none' }}
        to="/order"
        exact>
            Order &ensp;
    </NavLink>
    <NavLink style={{ textDecoration: 'none' }}
        to="/contact"
        exact>
            Contact &ensp;
        </NavLink>
    </div>
)

}

export default NavBar;
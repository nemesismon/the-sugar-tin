import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {

return (
    <div>
    <NavLink
        to="/"
        exact>
            Home &ensp;
    </NavLink>
    <NavLink
        to="/about"
        exact>
            About &ensp;
    </NavLink>
    <NavLink
        to="/confections"
        exact>
            Confections &ensp;
    </NavLink>
    </div>
)

}

export default NavBar;
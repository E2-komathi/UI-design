import { NavLink } from "react-router-dom";

function NavBar() {
    return(
        <div>
            <NavLink to="/dashboard">DashBoard</NavLink>
            <NavLink to="/adduser">Add User</NavLink>
            <NavLink to="/userGroup">User Groups</NavLink>
        </div>
    )
}

export default NavBar;
import { NavLink } from "react-router-dom";

function NavBar() {
    return(
        <div>
            <NavLink to="/dashboard">DashBoard</NavLink>
            <NavLink to="/adduser">Add User</NavLink>
            <NavLink to="/userGroup">User Groups</NavLink>
            <NavLink to="/contentManagement">content Management</NavLink>
            <NavLink to="/userProfile">User Profile</NavLink>
        </div>
    )
}

export default NavBar;
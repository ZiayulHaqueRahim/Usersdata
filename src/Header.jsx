import { Link, NavLink } from "react-router-dom";
import './Header/header.css'
const Header = () => {
    return (
        <nav className="flex flex-row gap-5  justify-center">
            
            <NavLink  to='/'>Home</NavLink>
            <NavLink to='/posts'>Posts</NavLink>
            <NavLink  to='/contact'>Contact</NavLink>
            <NavLink  to='/about'>About</NavLink>
            <NavLink  to='/users'>Users</NavLink>
        </nav>
    );
};

export default Header;
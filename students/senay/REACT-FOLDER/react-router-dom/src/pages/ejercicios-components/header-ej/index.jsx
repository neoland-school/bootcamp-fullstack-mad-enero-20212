import { Link } from "react-router-dom";
import './style.css';


function Header() {
    return (
        <header className="header">
            <nav className="navegacion">
                <Link className="header-link" to='/hello'>Go to hello</Link>
            </nav>
        </header>
    );
}

export default Header;
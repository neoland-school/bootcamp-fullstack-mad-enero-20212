import { Link } from 'react-router-dom';
import './style.css';


function Header() {
    return (
        <header className='header-link'>
            <nav>
                <Link className='hello' to='/hello'>Go to hello</Link>
                <Link className='hello' to='/countries'>Search Countries</Link>
            </nav>
        </header>
    );
}

export default Header;
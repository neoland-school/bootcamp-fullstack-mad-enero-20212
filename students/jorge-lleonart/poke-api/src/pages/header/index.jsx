import { Link } from 'react-router-dom';
import './style.css'

function Header(){

    return(
        <header>
            <nav className="header__container">
                <Link to='/home'><h1 className="pokemon__logo">POKEDEX</h1></Link>
                
                <div className='search__info'>
                    <input type="text" className="input__header" placeholder="SEARCH"/>
                    <Link to='/contact'><h3 className="boton__sus" >SUSCRIBETE</h3></Link>
                </div>
            </nav>
        </header>
    )
}
export default Header;
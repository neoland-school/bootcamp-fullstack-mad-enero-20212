import './style.css';

function Header(){
    return (
        <header className='header__container'>
            <h1>COUNTRIES</h1>
            <form>
                <input className='search__input' type="text" placeholder='Search'></input>
                <button className='search__button' type='submit'>Search</button>
            </form>
        </header>
    );
}


export default Header;
/**
 * 
 * Creo la componente nav para le web de las card de paises
 */

function NavPaises(){


    return (

        <nav className="bar-nav">
            <h3 className="bar-nav-tittle">COUNTRIES</h3>
            <div className="search-area">
                <input className="search-input" placeholder="Search"></input>
                <button className="search-button">Search</button>
            </div>
        </nav>
    )
}

export default NavPaises;
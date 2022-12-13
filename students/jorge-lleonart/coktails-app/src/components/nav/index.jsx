import { Link } from "react-router-dom";


function Nav(){
    return (
    <nav>
        <Link to='/cocktails'>
            <p>link a cocktails</p>
        </Link>
        <Link to='/drinks'>
            <p>link a drinks</p>
        </Link>
    </nav>
    )
}


export default Nav;
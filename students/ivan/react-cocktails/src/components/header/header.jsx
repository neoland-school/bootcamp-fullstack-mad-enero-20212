import { Link } from "react-router-dom";

function Header() {
  return (
    <form>
      <Link to={"/cocktails"}>
        <button name="cocktails">Cocktails Page</button>
      </Link>
      <Link to={"/ordinaryDrinks"}>
        <button name="OrdinaryDrinks">Ordinary Drinks</button>
      </Link>
    </form>
  );
}

export default Header;

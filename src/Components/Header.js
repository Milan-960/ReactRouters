import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            {" "}
            <NavLink activeClassName={classes.active} to="/Home">
              Home
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink activeClassName={classes.active} to="/Products">
              Product
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

//Components
import { Link } from "react-router-dom";

const Menu = () => (
  <ul className="navbar-nav">
    <li className="nav-item dropdown">
      <Link
        className="nav-link dropdown-toggle"
        id="navbarDropdown"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        to="#"
      >
        Menu{" "}
      </Link>
      <ul
        className="dropdown-menu dropdown-menu-end dropdown-menu-dark"
        aria-labelledby="navbarDropdown"
      >
        <li>
          <Link className="dropdown-item" to="/profile">
            Mi perfil
          </Link>
        </li>
        <li>
          <Link className="dropdown-item" to="/messages">
            Mensajes
          </Link>
        </li>
        <li>
          <Link className="dropdown-item" to="/groups">
            Grupos
          </Link>
        </li>
      </ul>
    </li>
  </ul>
);

export default Menu;

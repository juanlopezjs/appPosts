//Components
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setEmailUser  } from "../Store/User/userSlice";
import { resetList } from "../Store/Post/postSlice";

const Menu = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    dispatch(setEmailUser(""));
    dispatch(resetList());
    history.push("/");
  }

  return (
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
          <li>
            <Link className="dropdown-item" to="/" onClick={handleLogout}>
              Salir
            </Link>
          </li>
        </ul>
      </li>
    </ul>
  )
};

export default Menu;

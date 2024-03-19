import "./UserMenu.scss";
import { Link } from "react-router-dom";

const UserMenu = ({ isUserLogged }) => {
  return (
    <>
      <p className="menu__title">User panel</p>
      <nav>
        <ul>
          <li className={"menu__link"}>
            <Link to="/">Courses to sell</Link>
          </li>
          {isUserLogged && (
            <li className={"menu__link"}>
              <Link to="/my-courses">My Courses</Link>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
};

export default UserMenu;

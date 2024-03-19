import "./AdminMenu.scss";
import { Link } from "react-router-dom";

const AdminMenu = () => {
  return (
    <>
      <p className="menu__title">Admin panel</p>
      <nav>
        <ul>
          <li className={"menu__link"}>
            <Link to="/manage-courses">Edit courses</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default AdminMenu;

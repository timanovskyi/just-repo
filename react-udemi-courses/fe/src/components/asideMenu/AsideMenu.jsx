import "./AsideMenu.scss";
import { useContext } from "react";
import { StoreContext } from "../../store/StoreProvider";
import { ADMIN_TYPE } from "../../models";
import AdminMenu from "./subomponents/adminMenu/AdminMenu";
import UserMenu from "./subomponents/userMenu/UserMenu";

const AsideMenu = ({}) => {
  const { user } = useContext(StoreContext);

  const adminMenuComponent =
    user?.accessLevel === ADMIN_TYPE ? <AdminMenu></AdminMenu> : null;

  return (
    <section className="aside-menu">
      <div className="aside-menu__nav-wrapper">
        <UserMenu isUserLogged={Boolean(user)}></UserMenu>
        {adminMenuComponent}
      </div>
    </section>
  );
};

export default AsideMenu;

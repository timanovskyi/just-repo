import "./AsideMenu.scss";
import { useContext } from "react";
import { StoreContext } from "../../store/StoreProvider";
import AdminMenu from "./subomponents/adminMenu";
import UserMenu from "./subomponents/userMenu";

const ADMIN_TYPE = 1;

const AsideMenu = ({}) => {
  const { user } = useContext(StoreContext);

  const adminMenuComponent =
    user?.accessLevel === ADMIN_TYPE ? <AdminMenu></AdminMenu> : null;

  return (
    <section className="aside-menu">
      <UserMenu isUserLogged={Boolean(user)}></UserMenu>
      {adminMenuComponent}
    </section>
  );
};

export default AsideMenu;

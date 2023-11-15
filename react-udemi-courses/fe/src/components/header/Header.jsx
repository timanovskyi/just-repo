import { useContext, useState } from "react";
import { StoreContext } from "../../store/StoreProvider";
import "./Header.scss";
import LoginForm from "../loginForm/LoginForm";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user, setUser } = useContext(StoreContext);

  const handleOnClose = () => setIsModalOpen(false);
  const handleOnClick = () => {
    if (Boolean(user)) {
      setUser(null);
    } else {
      setIsModalOpen(true);
    }
  };

  const setPropertyLabel = Boolean(user) ? "Sign in" : "Logout";
  return (
    <header className="header">
      <div className="header__logo-wrapper"></div>
      <h1 className="header__title">Courses</h1>
      <button onClick={handleOnClick}>{setPropertyLabel}</button>
      <LoginForm handleOnClose={handleOnClose} isOpen={isModalOpen}></LoginForm>
    </header>
  );
};

export default Header;

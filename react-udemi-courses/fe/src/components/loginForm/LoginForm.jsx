import Modal from "../modal/Modal";
import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../store/StoreProvider";
import request from "../../helpers/request";
import "./LoginForm.scss";

const LoginForm = ({ handleOnClose, isOpen }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [validateMessage, setValidateMessage] = useState("");

  const { setUser } = useContext(StoreContext);

  useEffect(() => resetStateOfInputs(), [resetStateOfInputs]);

  const handleOnChangeLogin = ({ target: { value } }) => setLogin(value);
  const handleOnChangePassword = ({ target: { value } }) => setPassword(value);
  const handleOnCloseModal = (e) => {
    e.preventDefault();
    handleOnClose();
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { data, status } = await request.post("/users", { login, password });
    if (status === 200) {
      setUser(data.user);
      resetStateOfInputs();
      handleOnClose();
    } else {
      setValidateMessage(data.message);
    }
  };

  const resetStateOfInputs = () => {
    setLogin("");
    setPassword("");
    setValidateMessage("");
  };

  const validateMessageComp = validateMessage.length ? (
    <p className="login-form__validate-message">{validateMessage}</p>
  ) : null;

  return (
    <Modal
      isOpen={isOpen}
      handleOnClose={handleOnClose}
      shouldBeClosedOnOutsideClick={true}
    >
      {validateMessageComp}
      <form className="login-form" method="post" onSubmit={handleOnSubmit}>
        <div className="login-form__row">
          <label>
            Login:
            <input type="text" value={login} onChange={handleOnChangeLogin} />
          </label>
        </div>
        <div className="login-form__row">
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={handleOnChangePassword}
            />
          </label>
        </div>
        <div className="login-form__row">
          <button type={"submit"}>Login</button>
          <button type={"button"} onClick={handleOnCloseModal}>
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default LoginForm;

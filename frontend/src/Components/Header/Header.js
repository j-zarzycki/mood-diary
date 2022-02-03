import style from "./Header.module.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../Context/auth-context";
const Header = (props) => {
  const ctx = useContext(AuthContext);
  const navigate = useNavigate();

  const logOut = () => {
    ctx.onLogout();
    return navigate("/logowanie");
  };

  return (
    <div className={style.header}>
      <div className={style.logoBox}>Feelings Diary.</div>
      <button className={style.headerButton} onClick={logOut}>
        Log Out
      </button>
    </div>
  );
};

export default Header;

import { useNavigate } from "react-router-dom";
import style from './CardOptions.module.css';

const CardOptions = (props) => {
  const navigate = useNavigate();
  return (
    <button className={style.cardButton} onClick={() => {navigate('/home/details/' + props.postId)}}>Sprawdz</button>
  );
};

export default CardOptions;

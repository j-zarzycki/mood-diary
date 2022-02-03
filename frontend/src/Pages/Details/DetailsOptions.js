import style from "./DetailsOptions.module.css";
import {useNavigate} from 'react-router-dom'
const DetailsOptions = (props) => {
    const navigate = useNavigate();
  return (
    <div className={style.container}>
      <button className={style.backButton} onClick={() => navigate('/home')}>Go back</button>
      <button className={style.editButton} onClick={props.editHandler}>Edit</button>
      <button className={style.deleteButton} onClick={props.deleteHandler}>Delete</button>
    </div>
  );
};

export default DetailsOptions;

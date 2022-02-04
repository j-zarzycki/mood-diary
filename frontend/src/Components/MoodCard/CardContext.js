import style from "./CardContext.module.css";

const CardContext = (props) => {

  const correctDate = new Date(props.postDate)

  return (
    <div className={style.container}>
      <div className={style.row}>
        <h3>Title: </h3>
        <p>{props.title}</p>
      </div>
      <div className={style.row}>
        <h3>Mood: </h3>
        <p>{props.mood}</p>
      </div>
      <div className={style.row}>
        <h3>Date: </h3>
        <p>{correctDate.toDateString()}</p>
      </div>
    </div>
  );
};

export default CardContext;

import style from "./MoodFace.module.css";
const MoodFace = (props) => {
  return (
    <h1>
      {props.mood == "bad" && <h1><img className={style.face} src={require("../../Images/bad.png")}></img></h1>}
      {props.mood == "terrible" && <h1><img className={style.face} src={require("../../Images/terrible.png")}></img></h1>}
      {props.mood == "good" && <h1><img className={style.face} src={require("../../Images/good.png")}></img></h1>}
      {props.mood == "excellent" && <h1><img className={style.face} src={require("../../Images/excellent.png")}></img></h1>}
    </h1>
  );
};

export default MoodFace;

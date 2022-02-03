import style from './Image.module.css'; 

const Image = (props) => {
    return <div className={style.image}>{props.image}<img src={require("../../Images/rainbow.png")}></img></div>
}

export default Image;
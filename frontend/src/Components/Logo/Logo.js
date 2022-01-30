import style from './Logo.module.css'; 

const Logo = (props) => {
    return <p className={style.logo}>{props.logo}</p>
}

export default Logo;
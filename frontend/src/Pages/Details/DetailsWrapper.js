import style from './DetailsWrapper.module.css';

const DetailsWrapper = (props) => {
    return <div className={style.wrapper}>{props.children}</div>
}

export default DetailsWrapper;
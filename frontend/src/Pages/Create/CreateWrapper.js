import style from './CreateWrapper.module.css';

const CreateWrapper = (props) => {
    return (
        <div className={style.wrapper}>
            {props.children}
        </div>
    )
}

export default CreateWrapper;
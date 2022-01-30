import style from './ErrorMessage.module.css';

const ErrorMessage = (props) => {
    const temp = props.isvalid ? 'valid' : 'invalid'
    console.log(temp);
    return <p className={style[temp]}>{props.message}</p>;
};

export default ErrorMessage;

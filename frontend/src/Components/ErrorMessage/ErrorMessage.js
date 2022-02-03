import style from './ErrorMessage.module.css';

const ErrorMessage = (props) => {
    const validation = props.isValid ? 'valid' : 'invalid'
    return <p className={style[validation]}>{props.message}</p>;
};

export default ErrorMessage;

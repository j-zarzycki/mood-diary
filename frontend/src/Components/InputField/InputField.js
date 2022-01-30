import style from '../InputField/InputField.module.css';

const InputField = (props) => {
  return (
    <input
      className={style.inputField}
      type={props.inputType}
      value={props.inputValue}
      placeholder={props.inputPlaceholder}
    />
  );
};

export default InputField;

import style from '../InputField/InputField.module.css';

const InputField = (props) => {
  return (
    <input
      className={style.inputField}
      type={props.inputType}
      value={props.inputValue}
      name={props.inputName}
      placeholder={props.inputPlaceholder}
      ref={props.inputRef}
      onChange={props.onChangeEvent}
      disabled = {props.isDisabled ? "disabled" : ""}
    />
  );
};

export default InputField;

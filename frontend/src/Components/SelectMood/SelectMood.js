import style from "./SelectMood.module.css";

const SelectMood = (props) => {
  return (
    <select
      name={props.selectName}
      id="mood-select"
      className={style.selectMood}
      value={props.selectValue}
      onChange={props.onChangeEvent}
      disabled = {props.isDisabled ? "disabled" : ""}
      ref = {props.selectRef}
    >
      <option value="excellent">Excellent</option>
      <option value="good">Good</option>
      <option value="bad">Bad</option>
      <option value="terrible">Terrible</option>
    </select>
  );
};

export default SelectMood;

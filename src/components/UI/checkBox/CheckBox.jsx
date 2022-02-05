import classes from "./CheckBox.module.scss";

const CheckBox = (props) => {
  return (
    <form action="" className={classes.checkForm}>
      <input type="checkbox" className={classes.input} id="check" />
      <label className={classes.squaredBox} for="check"></label>
      <p>Согласие на обработку персональных данных</p>
    </form>
  );
};

export default CheckBox;

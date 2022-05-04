import classes from "./CheckBox.module.scss";
import React, { useState } from "react";

import { useSelector } from "react-redux";

const CheckBox = ({v, ...props}) => {
  const check = useSelector((state) => state.phone.check);

  if (check === false) {
    return (
      <form action="" className={classes.checkForm}>
        <p className={classes.tError}>НЕВЕРНО ВВЕДЕН НОМЕР</p>
      </form>
    );
  } else {
    return (
      <form action="" className={classes.checkForm}>
        <input type="checkbox" className={classes.input} id="check" />
        <label
          className={classes.squaredBox}
          onClick={() => v.setCheckPersonDataAccept(!v.checkPersonDataAccept)}
          for="check"
        ></label>
        <p className={classes.tPersonDataAccsept}>
          Согласие на обработку персональных данных
        </p>
      </form>
    );
  }
};

export default CheckBox;

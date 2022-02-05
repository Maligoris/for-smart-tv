import React, { useState } from "react";
import classes from "./PhoneNumberWindow.module.scss";
import KeyboardNum from "../UI/keyboardNum/KeyboardNum";
import NumInput from "../UI/numInput/NumInput";
import CheckBox from "../UI/checkBox/CheckBox";
import Submit from "../UI/buttons/submit/Submit";

const PhoneNumberWindow = (props) => {
  return (
    <div className={classes.PNW}>
      <p className={classes.tEnterNum}>Введите ваш номер мобильного телефона</p>
      <NumInput />
      <p className={classes.tWillContact }>и с Вами свяжется наш менеждер для дальнейшей консультации</p>
      <KeyboardNum />
      <CheckBox />
      <Submit cont={"ПОДТВЕРДИТЬ НОМЕР"}/>
    </div>
  );
};

export default PhoneNumberWindow;

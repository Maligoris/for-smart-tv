import React, { useState } from "react";
import classes from "./PhoneNumberWindow.module.scss";
import KeyboardNum from "../UI/keyboardNum/KeyboardNum";
import NumInput from "../UI/numInput/NumInput";
import CheckBox from "../UI/checkBox/CheckBox";
import Submit from "../UI/buttons/submit/Submit";

import { useSelector } from 'react-redux'
import { checkNumber } from "../../redux/phoneSlice";

const PhoneNumberWindow = (props) => {
  const [checkPersonDataAccept, setCheckPersonDataAccept] = useState(true);
  const checkNumber = useSelector((state) => state.phone.check);

  if (checkNumber) {
    return (
      <div className={classes.PNW}>
        <h2 className={classes.tH2Req}> ЗАЯВКА ПРИНЯТА</h2>
        <p className={classes.tReq}>Держите телефон под рукой. <br/>Скоро с Вами свяжется наш менеджер.</p>
      </div>
    )
  } else {
    return (
      <div className={classes.PNW}>
        <p className={classes.tEnterNum}>Введите ваш номер мобильного телефона</p>
        <NumInput />
        <p className={classes.tWillContact }>и с Вами свяжется наш менеждер для дальнейшей консультации</p>
        <KeyboardNum />
        <CheckBox v={{checkPersonDataAccept, setCheckPersonDataAccept}}/>
        <Submit cont={"ПОДТВЕРДИТЬ НОМЕР"} vCheck={checkPersonDataAccept}/>
      </div>
    );
  };
}

export default PhoneNumberWindow;

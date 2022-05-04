import React, { useState } from "react";
import classes from "./Submit.module.scss";

import { useDispatch, useSelector } from "react-redux";
import { checkNumber } from "../../../../redux/phoneSlice";

const Submit = ({vCheck, ...props}) => {
  const dispatch = useDispatch();
  const phone = useSelector((state) => state.phone.number);

  return (
    <div
      className={classes.submitBtn}
      onClick={(e) => {
        dispatch(checkNumber(phone));
        console.log(phone);
      }}
      style={vCheck ? { pointerEvents: "none", opacity: "0.4" } : {}}
    >
      {props.cont}
    </div>
  );
};

export default Submit;

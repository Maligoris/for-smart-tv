import React, { useState } from "react";
import classes from "./NumInput.module.scss";

import { useSelector } from "react-redux";

const NumInput = (props) => {
  const phoneNumber = useSelector((state) => state.phone.number);
  const check = useSelector((state) => state.phone.check);
  return (
    <div className={classes.phoneBox}>
      <p
        className={
          check === false
            ? [classes.phoneNumber, classes.redText].join(" ")
            : classes.phoneNumber
        }
      >
        +7({phoneNumber.slice(0, 3)}){phoneNumber.slice(3, 6)}-
        {phoneNumber.slice(6, 8)}-{phoneNumber.slice(8, 10)}
      </p>
    </div>
  );
};

export default NumInput;

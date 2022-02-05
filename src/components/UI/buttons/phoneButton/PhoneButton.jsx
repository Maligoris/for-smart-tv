import React, { useState } from "react";
import classes from "./PhoneButton.module.scss";



const PhoneButton = props => {
  return (
    <div  className={[classes.twoCells, classes.btn].join(' ')}>
      {props.cont}
    </div>
  )
}

export default PhoneButton

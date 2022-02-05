import React, { useState } from "react";
import classes from "./Submit.module.scss";

const Submit = props => {
  return (
    <div className={classes.submitBtn}>
      {props.cont}
    </div>
  )
}

export default Submit

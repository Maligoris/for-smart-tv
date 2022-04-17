import React, { useState } from "react";
import classes from "./CleanUp.module.scss";

import { useDispatch } from "react-redux";
import { deleteLastChar } from "../../../../redux/phoneSlice";

const CleanUp = ({cont, ...props}) => {
  const dispatch = useDispatch();

  return (
    <div
      className={classes.cleanUp}
      onClick={() => dispatch(deleteLastChar())}
    >
      {cont}
    </div>
  );
};

export default CleanUp;

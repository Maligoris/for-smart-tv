import React, { useState } from "react";
import classes from "./PhoneButton.module.scss";

import { useDispatch } from 'react-redux'
import { input, deleteLastChar } from '../../../../redux/phoneSlice'

const PhoneButton = ({cont, ...props}) => {
  const dispatch = useDispatch();
  
  return (
    <div  
      className={[classes.twoCells, classes.btn].join(' ')}
      onClick={() => dispatch(input(cont))}
    >
      {cont}
    </div>
  )
}

export default PhoneButton

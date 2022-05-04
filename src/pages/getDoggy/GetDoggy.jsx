import React, { useState } from "react";
import classes from "./GetDoggy.module.scss";
import overlay from "./image/scale_1200.png";
import qr2 from "./image/qr2.png";
import PhoneNumberWindow from "../../components/phoneNumberWindow/PhoneNumberWindow";

import { useDispatch } from 'react-redux'
import { checkNumber } from '../../redux/phoneSlice'

const GetDoggy = ({ ovl, ...props }) => {
  const dispatch = useDispatch();

  return (
    <div
      className={classes.overlay}
      style={{ backgroundImage: `url(${overlay})` }}
    >
      <PhoneNumberWindow />
      <img src={qr2} alt="" className={classes.qr2} />
      <div className={classes.closeBox} onClick={(e) => {ovl.setOverlay(false); dispatch(checkNumber(undefined));}}>
        <div className={classes.closeCross}></div>
      </div>
    </div>
  );
};

export default GetDoggy;

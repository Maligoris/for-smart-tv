import React, { useState } from "react";
import classes from "./GetDoggy.module.scss";
import overlay from "./image/scale_1200.png";
import qr2 from "./image/qr2.png";
import PhoneNumberWindow from "../../components/phoneNumberWindow/PhoneNumberWindow";


const GetDoggy = ({ ovl, ...props }) => {
  return (
    <div
      className={classes.overlay}
      style={{ backgroundImage: `url(${overlay})` }}
    >
      <PhoneNumberWindow />
      <img src={qr2} alt="" className={classes.qr2} />
        <div 
          className={classes.box}
          onClick={(e) => ovl.setOverlay(false)} 
        >
          <div
            className={classes.closeCross}
          >
          </div>
        </div>
    </div>
  );
};

export default GetDoggy;

import React, { useState } from "react";
import classes from "./GetDoggy.module.scss";
import overlay from "./image/scale_1200.png";
import qr2 from "./image/qr2.png";
import out from "./image/out.png";
import PhoneNumberWindow from "../../components/phoneNumberWindow/PhoneNumberWindow";

const GetDoggy = ({ ovl, ...props }) => {
  return (
    <div
      className={classes.overlay}
      style={{ backgroundImage: `url(${overlay})` }}
    >
      <PhoneNumberWindow />
      <img src={qr2} alt="" className={classes.qr2} />
      <img
        className={classes.closeBtn}
        src={out}
        alt=""
        onClick={(e) => ovl.setOverlay(false)}
      />
    </div>
  );
};

export default GetDoggy;

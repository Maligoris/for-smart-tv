import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Main.module.scss";
import video from "./image/video.png";
import qr from "./image/qr-code.png";
import GetDoggy from "../getDoggy/GetDoggy";

const Main = (props) => {
  const [overlay, setOverlay] = useState(false);

  return (
    <div className={classes.main} style={{ backgroundImage: `url(${video})` }}>
      <aside className={classes.makeDreamContainer}>
        <p className={classes.message}>
          ИСПОЛНИТЕ МЕЧТУ ВАШЕГО МАЛЫША! ПОДАРИТЕ ЕМУ СОБАКУ!
        </p>

        <img src={qr} alt="" />
        <p className={classes.text}>Сканируйте QR-код или нажмите ОК</p>
        <button
          type="button"
          className={classes.btn}
          onClick={(e) => setOverlay(true)}
        >
          OK
        </button>
      </aside>
      {overlay ? <GetDoggy ovl={{overlay, setOverlay}}/> : null}}
    </div>
  );
};

export default Main;

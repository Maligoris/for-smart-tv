import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Main.module.scss";
import video from "./image/video.png";
import qr from "./image/qr-code.png";

const Main = (props) => {
  return (
    <div className={classes.main} style={{ backgroundImage: `url(${video})` }}>
      <aside className={classes.makeDreamContainer}>
        <p className={classes.message}>
          ИСПОЛНИТЕ МЕЧТУ ВАШЕГО МАЛЫША! ПОДАРИТЕ ЕМУ СОБАКУ!
        </p>

        <img src={qr} alt="" />
        <p className={classes.text}>Сканируйте QR-код или нажмите ОК</p>
        <Link to="/getDoggy" className={classes.btn}>
          <button type="button" className={classes.btn}>OK</button>
        </Link>
      </aside>
    </div>
  );
};

export default Main;

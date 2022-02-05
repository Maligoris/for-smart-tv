import React, { useState } from "react";
import classes from "./KeyboardNum.module.scss";
import PhoneButton from "../buttons/phoneButton/PhoneButton";
import CleanUp from "../buttons/cleanUp/CleanUp";

        {/* <PhoneButton cont={"СТЕРЕТЬ"} mod={"twoCells"}/> */}

const KeyboardNum = (props) => {
  return (
    <div className={classes.keyboard}>
      <section>
        <PhoneButton cont={1} />
        <PhoneButton cont={2} />
        <PhoneButton cont={3} />
      </section>
      <section>
        <PhoneButton cont={4} />
        <PhoneButton cont={5} />
        <PhoneButton cont={6} />
      </section>
      <section>
        <PhoneButton cont={7} />
        <PhoneButton cont={8} />
        <PhoneButton cont={9} />
      </section>
      <section>
        <div className={classes.TEST}>СТЕРЕТЬ</div>
        <PhoneButton cont={0} />
      </section>
    </div>
  );
};

export default KeyboardNum;

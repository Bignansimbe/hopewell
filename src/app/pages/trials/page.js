"use client";

import React, { useState } from "react";
import Modal from "../../components/modal";
import styles from "./trial.module.css";
import Tooltip from "../../components/popper";
import "../../components/componentStyles/popper.module.css";
import SwitchDivs from "@/app/components/switch";

const App = () => {
  return (
    <div className={styles.main}>
     <SwitchDivs/>
    </div>
  );
};

export default App;

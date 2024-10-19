"use client";

import React, { useState } from "react";
import Modal from "../../components/modal";
import styles from "./trial.module.css";
import Tooltip from "../../components/popper";
import "../../components/componentStyles/popper.module.css";
import SwitchDivs from "@/app/components/switch";
import SwitchBox from "@/app/components/switchBox";

const App = () => {
  return (
    <div className={styles.main}>
     <SwitchBox/>
    </div>
  );
};

export default App;

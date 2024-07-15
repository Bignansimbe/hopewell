"use client";

import React, { useState } from "react";
import Modal from "../../components/modal";
import styles from "./trial.module.css";
import Tooltip from "../../components/popper";
import "../../components/componentStyles/popper.module.css";

const App = () => {
  return (
    <div className={styles.main}>
      <Tooltip content="This is a tooltip!">Hover over me</Tooltip>
    </div>
  );
};

export default App;

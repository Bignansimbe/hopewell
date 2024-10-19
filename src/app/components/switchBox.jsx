import styles from './componentStyles/switchBox.module.css' 
import PatientDetailsCard from './patientDetailscard';

import React, { useState } from 'react';

const SwitchBox = ({
  firstDiv,
  secondDiv,
  firstDivButtonName,
  secondDivButtonName
}) => {
  const [showFirstDiv, setShowFirstDiv] = useState(true);

  const handleClick = () => {
    setShowFirstDiv(!showFirstDiv);
  };

  return (
    <div className={styles.main}>
      <button className={styles.button} onClick={handleClick}>
        {showFirstDiv ? `${firstDivButtonName}` : `${secondDivButtonName}`}
      </button>
      {showFirstDiv ? (
        <div className={styles.firstDiv}>
          {firstDiv}
        </div>
      ) : (
        <div className={styles.secondDiv}>
          {secondDiv}
        </div>
      )}
    </div>
  );
};

export default SwitchBox;

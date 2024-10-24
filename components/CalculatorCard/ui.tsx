import React, { useState } from "react";

import styles from "./CalculatorCard.module.scss";
import NumPad from "../Numpad";
import TopOperatorsPad from "../TopOperatorsPad";
import RightOperatorsPad from "../RightOperatorsPad";
import { useCalculatorCard } from "./model";

const CalculatorCard = () => {
  const { exp, result, handleClick } = useCalculatorCard();

  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <span className={styles.inputValues}>{exp || "0"}</span>
      </div>
      <div className={styles.inputContainer}>
        <span className={styles.input}>{result}</span>
      </div>

      <div className={styles.padContainer}>
        <div className={styles.leftPadContainer}>
          <div className={styles.topOperators}>
            <TopOperatorsPad onClick={handleClick} />
          </div>
          <div className={styles.numPad}>
            <NumPad onClick={handleClick} />
          </div>
        </div>
        <div className={styles.rightOperatorsPad}>
          <RightOperatorsPad onClick={handleClick} />
        </div>
      </div>
    </div>
  );
};

export default CalculatorCard;

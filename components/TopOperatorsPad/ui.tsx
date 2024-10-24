import React from "react";

import styles from "./TopOperatorsPad.module.scss";

const TopOperatorsPad = ({ onClick }: { onClick: (data: string) => void }) => {
  return ["C", "+/-", "%"].map((operator: string) => {
    return (
      <button
        className={styles.inputValues}
        onClick={() => onClick(operator)}
        key={operator}
      >
        {operator}
      </button>
    );
  });
};
export default TopOperatorsPad;

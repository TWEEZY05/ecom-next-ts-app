import React from "react";

import styles from "./RightOperatorsPad.module.scss";

const RightOperatorsPad = ({
  onClick,
}: {
  onClick: (data: string) => void;
}) => {
  return ["/", "*", "-", "+", "="].map((operator: string) => {
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

export default RightOperatorsPad;

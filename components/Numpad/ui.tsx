import React from "react";

import styles from "./Numpad.module.scss";

const NumPad = ({ onClick }: { onClick: (data: string | number) => void }) => {
  return [7, 8, 9, 4, 5, 6, 1, 2, 3, ".", 0, "del"].map(
    (num: string | number) => {
      return (
        <button
          className={styles.inputValues}
          onClick={() => onClick(num)}
          key={num}
        >
          {num}
        </button>
      );
    }
  );
};
export default NumPad;

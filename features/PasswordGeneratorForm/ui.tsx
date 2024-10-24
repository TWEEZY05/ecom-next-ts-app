import React from "react";
import styles from "./PasswordGeneratorForm.module.scss";
import { usePasswordGenerator } from "./model";

const PasswordGeneratorForm = ({
  setGeneratedPasswords,
}: {
  setGeneratedPasswords: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
  const { handleLengthChange, options, handleChange, generatePassword, length } =
    usePasswordGenerator({ setGeneratedPasswords });
  return (
    <>
      <input
        type="number"
        id="length"
        value={length}
        min={3}
        max={20}
        onChange={handleLengthChange}
        className={styles.inputNumber}
      />
      <div className={styles.checkboxes}>
        <label>
          <input
            type="checkbox"
            name="uppercase"
            checked={options.uppercase}
            onChange={handleChange}
          />
          Использовать прописные буквы
        </label>
        <label>
          <input
            type="checkbox"
            name="lowercase"
            checked={options.lowercase}
            onChange={handleChange}
          />
          Использовать строчные буквы
        </label>
        <label>
          <input
            type="checkbox"
            name="numbers"
            checked={options.numbers}
            onChange={handleChange}
          />
          Использовать цифры
        </label>
        <label>
          <input
            type="checkbox"
            name="symbols"
            checked={options.symbols}
            onChange={handleChange}
          />
          {`Использовать символы: %, *, ), ?, @, #, $, ~`}
        </label>
        <label>
          <input
            type="checkbox"
            name="avoidRepeats"
            checked={options.avoidRepeats}
            onChange={handleChange}
          />
          Избегать повторения символов
        </label>
      </div>
      <button
        disabled={length < 3 || length > 20}
        className={styles.button}
        onClick={generatePassword}
      >
        Сгенерировать пароль
      </button>
    </>
  );
};

export default PasswordGeneratorForm;

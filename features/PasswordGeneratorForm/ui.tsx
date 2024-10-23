import React, { useState } from "react";
import styles from "./PasswordGeneratorForm.module.scss";

const PasswordGeneratorForm = ({ setGeneratedPasswords }) => {
  const [length, setLength] = useState<number>(0);
  const [options, setOptions] = useState({
    uppercase: false,
    lowercase: false,
    numbers: false,
    symbols: false,
    avoidRepeats: false,
  });

  const generatePassword = () => {
    const { uppercase, lowercase, numbers, symbols, avoidRepeats } = options;
    const charSets: { [key: string]: string } = {
      uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      lowercase: "abcdefghijklmnopqrstuvwxyz",
      numbers: "0123456789",
      symbols: "%*?)@#$~",
    };

    let allowedChars = "";
    if (uppercase) allowedChars += charSets.uppercase;
    if (lowercase) allowedChars += charSets.lowercase;
    if (numbers) allowedChars += charSets.numbers;
    if (symbols) allowedChars += charSets.symbols;

    if (allowedChars.length === 0) {
      alert("Выберите хотя бы один вариант для генерации пароля");
      return;
    }

    const passwords: string[] = [];
    for (let i = 0; i < 5; i++) {
      let password = "";
      let usedChars = new Set();

      while (password.length < length) {
        const randomChar = allowedChars.charAt(
          Math.floor(Math.random() * allowedChars.length)
        );

        if (avoidRepeats && usedChars.has(randomChar)) continue; // Избежать повторов
        usedChars.add(randomChar);
        password += randomChar;
      }

      passwords.push(password);
    }

    setGeneratedPasswords(passwords);
  };

  const handleLengthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Math.max(parseInt(e.target.value), 3), 20);
    setLength(value);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setOptions((prev) => ({ ...prev, [name]: checked }));
  };

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

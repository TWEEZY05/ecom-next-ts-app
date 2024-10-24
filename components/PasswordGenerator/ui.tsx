import React, { useState } from "react";
import PasswordGeneratorForm from "../../features/PasswordGeneratorForm";
import styles from "./PasswordGenerator.module.scss";

const PasswordGenerator = () => {
  const [generatedPasswords, setGeneratedPasswords] = useState<string[]>([]);

  const copyToClipboard = (password: string) => {
    navigator.clipboard.writeText(password);
    alert("Пароль скопирован в буфер обмена!");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Генератор паролей</h1>
      <div className={styles.formContainer}>
        <div className={styles.inputContainer}>
          <label className={styles.label} htmlFor="length">
            Длина пароля:
          </label>
          <PasswordGeneratorForm
            setGeneratedPasswords={setGeneratedPasswords}
          />
        </div>
        <div className={styles.outputContainer}>
          {generatedPasswords.map((password, index) => (
            <div key={index} className={styles.passwordRow}>
              <span className={styles.password}>{password}</span>
              <button
                className={styles.copyButton}
                onClick={() => copyToClipboard(password)}
              >
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.9219 0.170013C23.1406 0.170013 24.1719 1.20126 24.1719 2.42001V15.92C24.1719 17.1856 23.1406 18.17 21.9219 18.17H8.42188C7.15625 18.17 6.17188 17.1856 6.17188 15.92V2.42001C6.17188 1.20126 7.15625 0.170013 8.42188 0.170013H21.9219ZM8.42188 19.67H18.1719V21.92C18.1719 23.1856 17.1406 24.17 15.9219 24.17H2.42188C1.15625 24.17 0.171875 23.1856 0.171875 21.92V8.42001C0.171875 7.20126 1.15625 6.17001 2.42188 6.17001H4.67188V15.92C4.67188 18.0294 6.3125 19.67 8.42188 19.67Z"
                    fill="#3B75A2"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;

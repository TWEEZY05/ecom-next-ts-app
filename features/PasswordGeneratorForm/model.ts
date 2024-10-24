import { useState } from "react";

export const usePasswordGenerator = ({
  setGeneratedPasswords,
}: {
  setGeneratedPasswords: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
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

    const uniqueCharCount = new Set(allowedChars).size;

    if (allowedChars.length === 0) {
      alert("Выберите хотя бы один вариант для генерации пароля");
      return;
    }

    if (avoidRepeats && uniqueCharCount < length) {
      alert(
        `Недостаточно уникальных символов для пароля длиной ${length}. Доступно только ${uniqueCharCount} уникальных символов.`
      );
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
  return {
    handleLengthChange,
    options,
    handleChange,
    generatePassword,
    length,
  };
};

import { useState } from "react";

export const useCalculatorCard = () => {
  const [exp, setExp] = useState<string>("");
  const [result, setResult] = useState<string>("0");
  const [isEvaluated, setIsEvaluated] = useState<boolean>(false);

  const handleClick = (data: string) => {
    if (data === "=") {
      try {
        const res = eval(exp);
        setResult(`${res}`);
        setIsEvaluated(true);
      } catch (error) {
        setResult("Error");
      }
    } else if (data === "C") {
      setExp("");
      setResult("0");
      setIsEvaluated(false);
    } else if (data === "del") {
      if (isEvaluated) {
        // Если выражение уже было вычислено
        setExp(`${result}`.slice(0, -1)); // Удаляем последний символ из результата
        setIsEvaluated(false);
      } else {
        setExp((curExp) => curExp.slice(0, -1)); // Удаляем последний символ из текущего выражения
      }
    } else if (data === "+/-") {
      if (isEvaluated) {
        // Меняем знак у результата
        const newResult = parseFloat(result) * -1;
        setResult(`${newResult}`);
        setExp(`${newResult}`);
      } else {
        if (exp) {
          const newExp = parseFloat(exp) * -1;
          setExp(`${newExp}`);
        }
      }
    } else {
      if (isEvaluated) {
        // Если было вычислено выражение
        if (!isNaN(parseFloat(data))) {
          // Если нажали цифру, добавляем ее к результату
          setExp(result + data);
        } else {
          // Если нажали оператор, продолжаем выражение с результатом
          setExp(result + data);
        }
        setIsEvaluated(false);
      } else {
        // Если выражение еще не было вычислено, продолжаем его
        setExp((curExp) => curExp + data);
      }
    }
  };

  return {
    exp,
    result,
    handleClick,
  };
};

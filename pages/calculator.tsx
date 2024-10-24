import React from "react";
import CalculatorCard from "../components/CalculatorCard";

const Calculator = () => {
  return <CalculatorCard />;
};

export const getStaticProps = () => {
  return {
    props: {
      pageTitle: "Калькулятор",
    },
  };
};

export default Calculator;

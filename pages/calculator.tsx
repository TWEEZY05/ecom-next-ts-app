import React from "react";

const Calculator = () => {
  return <div>Calculator</div>;
};

export const getStaticProps = () => {
  return {
    props: {
      pageTitle: "Калькулятор",
    },
  };
};

export default Calculator;

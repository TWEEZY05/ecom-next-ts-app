import React from "react";
import PasswordGenerator from "../components/PasswordGenerator";

const PasswordGeneratorPage = () => {
  return <PasswordGenerator />;
};

export const getStaticProps = () => {
  return {
    props: {
      pageTitle: "Генератор паролей",
    },
  };
};

export default PasswordGeneratorPage;

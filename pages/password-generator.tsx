import React, { useState } from "react";
import styles from "./PasswordGenerator.module.scss"; // Импортируйте стили
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

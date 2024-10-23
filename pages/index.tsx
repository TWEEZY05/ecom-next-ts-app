import { useState } from "react";
import UserNameForm from "../features/UserNameForm";
import styles from "../styles/HomePage.module.scss";

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {!isModalOpen && (
        <button className={styles.btn} onClick={openModal}>
          Записать имя
        </button>
      )}
      {isModalOpen && <UserNameForm closeModal={closeModal} />}
    </div>
  );
};

export default HomePage;

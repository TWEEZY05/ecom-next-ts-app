import { UseUserNameForm } from "./model";
import styles from "./UserNameForm.module.scss";
import Link from "next/link";

const UserNameForm = ({ closeModal }: { closeModal: () => void }) => {
  const { handleSubmit, register, errors, watch } = UseUserNameForm();

  return (
    <div className={styles.modalWrapper}>
      <div className={styles.container}>
        <span onClick={closeModal} className={styles.closeModal}></span>

        <div className={styles.formContainer}>
          <h2 className={styles.title}>Начать</h2>
          <p className={styles.subTitle}>Напишите ваше имя</p>
          <input
            className={`${styles.input} ${errors.name ? styles.error : ""}`}
            placeholder="Ваше имя"
            {...register("name")}
          />
          {errors.name && (
            <span className={styles.error}>{errors.name.message}</span>
          )}
        </div>
        <div className={styles.btnContainer}>
          <Link className={styles.btn} href="/calculator" passHref>
            Открыть калькулятор
          </Link>
          <Link className={styles.btn} href="/password-generator" passHref>
            Открыть генератор
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserNameForm;

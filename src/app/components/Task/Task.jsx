import Image from "next/image";
import styles from "./styles.module.scss";

import checkImg from "../../../assets/icons/check-solid.svg";

export const Task = (props) => {
  const { id, title, description, isDone } = props;

  return (
    <div className={styles.Task} id={id}>
      <div className={styles.taskInfo}>
        <h4 className={styles.title}>{title}</h4>
      </div>

      <div className={styles.checkbox}>
        <label className={styles.checkboxMask} htmlFor={`checkbox-${id}`}>
          <Image className={styles.checkIcon} src={checkImg} alt="check" />
        </label>
        <input
          id={`checkbox-${id}`}
          className={styles.inputCheckbox}
          type="checkbox"
          defaultChecked={isDone}
          onChange={(e) => {
            e.target.previousElementSibling.classList.toggle(
              `${styles.checked}`
            );
          }}
        />
      </div>
    </div>
  );
};

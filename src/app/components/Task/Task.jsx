import cn from "classnames";
import { CheckIcon } from "../../generics/CheckIcon/CheckIcon";
import { DeleteIcon } from "../../generics/DeleteIcon/DeleteIcon";
import { useDispatch } from "react-redux";
import { changeCompletion, deleteTask } from "@/lib/slices/toDoSlice";

import styles from "./styles.module.scss";

export const Task = (props) => {
  const dispatch = useDispatch();

  const { id, title, isDone } = props;

  return (
    <div className={cn(styles.Task, isDone && styles.isDone)} id={id}>
      <div className={styles.taskInfo}>
        <h4 className={styles.title}>{title}</h4>
      </div>

      <button
        className={styles.deleteButton}
        type="button"
        onClick={() => {
          dispatch(deleteTask(id)); //обработчик удаления выбранной задачи из списка задач
        }}
      >
        <DeleteIcon />
      </button>

      <div className={styles.checkbox}>
        <label
          className={cn(styles.checkboxMask, isDone && styles.checked)}
          htmlFor={`checkbox-${id}`}
        >
          {/* добавление иконки check в checkbox для выполненной задачи*/}
          {isDone && <CheckIcon />}{" "}
        </label>
        <input
          id={`checkbox-${id}`}
          className={styles.inputCheckbox}
          type="checkbox"
          defaultChecked={isDone}
          onChange={(e) => {
            dispatch(changeCompletion(id)); //Обработчик изменеия состояния выполненности
          }}
        />
      </div>
    </div>
  );
};

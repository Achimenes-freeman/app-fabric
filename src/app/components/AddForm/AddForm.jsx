import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTask } from "@/lib/slices/toDoSlice";
import styles from "./styles.module.scss";

export const AddForm = () => {
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();

  return (
    <div className={styles.AddForm}>
      <h3 className={styles.title}>Add new Task</h3>
      <div className={styles.form}>
        <input
          className={styles.addInput}
          type="text"
          placeholder="Write your task here"
          onChange={(e) => setInputValue(e.target.value)} //Изменеие состояния для поля ввода
          value={inputValue}
        />
        <button
          onClick={() => {
            if (inputValue) {
              dispatch(addNewTask(inputValue)); //Добавление новой задачи при условии что поле ввода не пустое
              setInputValue("");
            }
          }}
          className={styles.button}
          type="button"
          disabled={!inputValue}
        >
          Add
        </button>
      </div>
    </div>
  );
};

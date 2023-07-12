import { Task } from "../Task/Task";
import { useSelector } from "react-redux";

import styles from "./styles.module.scss";

export const ToDoApp = () => {
  const tasks = useSelector((state) => state.toDoPage.tasks);

  return (
    <section className={styles.ToDoApp}>
      {tasks.map((task) => (
        <Task key={task.id} {...task} />
      ))}
    </section>
  );
};

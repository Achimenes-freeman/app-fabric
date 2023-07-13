import cn from "classnames";
import { Task } from "../Task/Task";
import { AddForm } from "../AddForm/AddForm";
import { ThemeControl } from "@/app/generics/ThemeControl/ThemeControl";
import { Filters } from "../Filters/Filters";
import { useSelector } from "react-redux";

import styles from "./styles.module.scss";
import { useState } from "react";

export const ToDoApp = () => {
  const { tasks, theme } = useSelector((state) => state.toDoPage);

  const [filter, setFilter] = useState("all");

  const changeFilter = (filterStr) => {
    setFilter(filterStr);
  };

  return (
    <div
      className={cn(
        styles.wrapper,
        theme === "light" ? "lightTheme" : "darkTheme" //Стилизация страницы под тему
      )}
    >
      <section className={styles.ToDoApp}>
        <ThemeControl theme={theme} />
        <AddForm />
        <Filters changeFilter={changeFilter} filter={filter} />

        {/* <--Проверка наполненности массива задач*/}
        {!tasks.length && (
          <h1 className={styles.missTasksTitle}>
            You don&apos;t have any tasks{" "}
          </h1>
        )}

        {/* Отображение задач с учетом фильтрации */}
        {tasks
          .filter((task) => {
            switch (filter) {
              case "completed":
                return task.isDone;
              case "not-completed":
                return !task.isDone;
              default:
                return true;
            }
          })
          .map((task) => (
            <Task key={task.id} {...task} />
          ))}
      </section>
    </div>
  );
};

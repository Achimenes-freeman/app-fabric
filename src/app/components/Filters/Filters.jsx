import { FilterInput } from "@/app/generics/FilterInput/FilterInput";
import styles from "./styles.module.scss";

//Обертка для фильтров

export const Filters = ({ changeFilter, filter }) => {
  return (
    <div className={styles.Filters}>
      <FilterInput
        changeFilter={changeFilter}
        text="All tasks"
        value="all"
        currentFilter={filter}
      />
      <FilterInput
        changeFilter={changeFilter}
        text="Completed tasks"
        value="completed"
        currentFilter={filter}
      />
      <FilterInput
        changeFilter={changeFilter}
        text="Not completed tasks"
        value="not-completed"
        currentFilter={filter}
      />
    </div>
  );
};

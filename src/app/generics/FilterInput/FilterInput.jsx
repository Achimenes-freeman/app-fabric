import cn from "classnames";
import styles from "./styles.module.scss";

// Компонент инпута типа Radio для наполнения списка фильтров

export const FilterInput = ({ changeFilter, text, value, currentFilter }) => {
  return (
    <div className={styles.filterBox}>
      <label
        className={cn(styles.label, currentFilter === value && styles.active)} //стилизация активного фильтра
        htmlFor={`${value}-filter`}
      >
        {text}
      </label>
      <input
        className={styles.radioInput}
        name="filter"
        type="radio"
        id={`${value}-filter`}
        value={value}
        defaultChecked={currentFilter === value}
        onChange={(e) => changeFilter(e.target.value)} //функция изменения текущего фильтра
      />
    </div>
  );
};

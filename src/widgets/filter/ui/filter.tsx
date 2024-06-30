import styles from './filter.module.scss';
import {Select} from "../../../shared/ui/select";

const options = [
  {
    name: '1',
    value: '2'
  },
  {
    name: '2',
    value: '2'
  },
  {
    name: '3',
    value: '3'
  }
]

export const Filter = () => {
  return <div className={styles.container}>
    <div className={styles.title}>
      Фильтр
    </div>
    <div className={styles.itemsContainer}>
      <Select title="Жанр" value={''} options={options} placeholder="Выберите жанр" />
      <Select title="Год выпуска" options={options} placeholder="Выберети год" />
    </div>
  </div>
}

import { useDispatch, useSelector } from 'react-redux';
import { Select } from '@shared/ui/select';
import { GENRES_MAP, YEARS_MAP } from '@entities/movies/model/types.ts';
import { updateGenre, updateYear } from '@entities/filter';

import styles from './filter.module.scss';

const GENRE_OPTIONS = Object.keys(GENRES_MAP).map((key) => {
  return {
    name: GENRES_MAP[key],
    value: key,
  };
});

const YEAR_OPTIONS = Object.keys(YEARS_MAP).map((key) => {
  return {
    name: YEARS_MAP[key],
    value: key,
  };
});

export const Filter = () => {
  const filterValues = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <div className={styles.title}>Фильтр</div>
      <div className={styles.itemsContainer}>
        <Select
          title="Жанр"
          value={filterValues?.genre}
          onChange={(item) => dispatch(updateGenre(item.value))}
          options={GENRE_OPTIONS}
          placeholder="Выберите жанр"
        />
        <Select
          title="Год выпуска"
          value={filterValues?.year}
          options={YEAR_OPTIONS}
          placeholder="Выберети год"
          onChange={(item) => dispatch(updateYear(item.value))}
        />
      </div>
    </div>
  );
};

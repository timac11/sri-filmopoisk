import { FC, useCallback } from 'react';
import { Filter } from '@widgets/filter';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useGetMoviesQuery } from '@entities/movies';
import { MovieShortCard } from '@widgets/movieCard';
import { EPath } from '@app/routes/paths.ts';

import styles from './moviesPage.module.scss';

export const MoviesPage: FC = () => {
  const { data, error, isLoading } = useGetMoviesQuery();
  //const filterState = useSelector((state) => state.filter);

  const navigate = useNavigate();
  const onItemClick = useCallback(
    (id: string) => {
      navigate(`${EPath.MOVIE}/${id}`);
    },
    [navigate],
  );

  return (
    <section className={styles.container}>
      <div className={styles.leftBlock}>
        <Filter />
      </div>
      <div className={styles.mainBlock}>
        {data ? (
          <div className={styles.moviesContainer}>
            {data.search_result.map((item) => (
              <div key={item.id} onClick={() => onItemClick(item.id)}>
                <MovieShortCard movie={item} />
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
};

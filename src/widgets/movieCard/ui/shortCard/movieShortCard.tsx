import { FC } from 'react';
import { ShortMovieInfo } from '@entities/movies/model/types.ts';

import styles from './movieShortCard.module.scss';
import { MovieCardItem } from './../item/movieCardItem.tsx';

type MovieCardProps = {
  movie: ShortMovieInfo;
};

export const MovieShortCard: FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className={styles.container}>
      <img src={movie.poster} className={styles.avatar} />
      <div className={styles.mainPart}>
        <span className={styles.title}>{movie.title}</span>
        <div className={styles.infoContainer}>
          <MovieCardItem name="Жанр" value={movie.genre} />
          <MovieCardItem name="Год выпуска" value={movie.release_year} />
          <MovieCardItem name="Описание" value={movie.description} />
        </div>
      </div>
      <div className={styles.rating}></div>
    </div>
  );
};

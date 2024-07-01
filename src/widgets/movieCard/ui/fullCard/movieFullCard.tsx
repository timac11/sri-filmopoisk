import {FC} from "react";
import {FullMovieInfo} from "../../../../entities/movies/model/types.ts";
import styles from './movieFullCard.module.scss';

type MovieFullCardProps = {
  item: FullMovieInfo;
}

export const MovieFullCard: FC<MovieFullCardProps> = ({item}) => {
  return <div className={styles.container}>
    <img className={styles.avatar} src={item.poster}/>
    <div>
      <div className={styles.title}>{item.title}</div>
      <div className={styles.itemsContainer}>
        <MovieItem name="Жанр:" value={item.genre} />
        <MovieItem name="Год выпуска:" value={item.release_year} />
        <MovieItem name="Рейтинг:" value={item.rating} />
        <MovieDescription name="Описание" value={item.description} />
      </div>
    </div>
    <div></div>
  </div>
}

type MovieItemProps = {
  name: string;
  value: string | number;
}

const MovieItem: FC<MovieItemProps> = ({name, value}) => {
  return <div className={styles.item}>
    <span className={styles.itemName}>{name}</span>
    <span className={styles.itemValue}>{value}</span>
  </div>
}

const MovieDescription: FC<MovieItemProps> = ({name, value}) => {
  return <div className={styles.description}>
    <span className={styles.descriptionName}>{name}</span>
    <span className={styles.descriptionValue}> {value}</span>
  </div>
}

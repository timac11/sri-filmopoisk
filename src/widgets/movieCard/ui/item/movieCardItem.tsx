import { FC } from 'react';

import styles from './movieCardItem.module.scss';

type MovieCardItemProps = {
  name: string;
  value: string | number;
};

export const MovieCardItem: FC<MovieCardItemProps> = ({ name, value }) => {
  return (
    <div className={styles.container}>
      <div className={styles.name}>{name}</div>
      <div className={styles.value}>{value}</div>
    </div>
  );
};

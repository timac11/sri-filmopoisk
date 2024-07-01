import {FC} from "react";
import styles from './actoraContainer.module.scss';
import {Actor} from "../../../entities/movies/model/types.ts";

type ActorsContainerProps = {
  items: Actor[];
}

export const ActorsContainer: FC<ActorsContainerProps> = ({items}) => {
  return <div className={styles.wrapper}>
    <span className={styles.title}>Актеры</span>
    <div className={styles.container}>
      {items.map((item) => <div key={item.name} className={styles.item}>
        <img src={item.photo} className={styles.itemimg} />
        <div className={styles.name}>{item.name}</div>
      </div>)}
    </div>
  </div>
}

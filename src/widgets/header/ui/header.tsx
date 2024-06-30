import styles from './header.module.scss';

export const Header = () => {
  return <header className={styles.container}>
    <div className={styles.title}>
      Фильмопоиск
    </div>
    <div>
      user block
    </div>
  </header>
}

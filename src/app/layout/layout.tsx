import { Header } from '@widgets/header';
import { Outlet } from 'react-router-dom';

import styles from './layout.module.scss';

export const Layout = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.mainWrappper}>
        <Outlet />
      </main>
    </div>
  );
};

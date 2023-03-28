import { categoriesStub } from '@/shared';
import { Header } from '@/widgets';
import { Sidebar } from './sidebar/sidebar';
import { Column } from './column/column';
import { FC, ReactNode, useState } from 'react';
import styles from './main-layout.module.scss';

interface Props {
  children?: ReactNode;
}

export const MainLayout: FC<Props> = ({ children }) => {
  const [open, setOpen] = useState(false);

  const toggleSidebar = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Header isOpen={open} onClick={toggleSidebar} />
      <div className={styles.layout}>
        <div className={open ? styles.dark : styles.transparent} />
        <Sidebar className={open ? styles.sidebarOpen : styles.sidebar} categoriesData={categoriesStub.data} />
        {children ?? null}
        <Column>
          <div className={styles.columnBlock} />
        </Column>
      </div>
    </div>
  );
};

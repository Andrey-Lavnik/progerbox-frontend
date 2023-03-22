import { Burger } from '@/shared';
import { FC } from 'react';
import Image from 'next/image';
import styles from './header.module.scss';

interface Props {
  isOpen?: boolean;
  onClick?: () => void;
}

export const Header: FC<Props> = ({ isOpen = false, onClick = () => {} }) => {
  return (
    <div className={styles.header}>
      <div className={styles.headerItems}>
        <Burger isOpen={isOpen} onClick={onClick} />
        <div className={styles.headerLeft}>
          <Image className={styles.logoIcon} src="/icons/logo.svg" alt="Progerbox logotype" width={42} height={46} />
          <div>Progerbox</div>
        </div>
        <div className={styles.headerRight}>
          <Image src="/icons/logout.svg" alt="Logout button" width={32} height={39} />
        </div>
      </div>
    </div>
  );
};

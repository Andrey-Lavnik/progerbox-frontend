import React, { FC } from 'react';
import { uniteClasses } from '@/shared';
import styles from './burger.module.scss';

interface Props {
  isOpen?: boolean;
  onClick?: () => void;
}

export const Burger: FC<Props> = ({ isOpen = false, onClick = () => {} }) => {
  return (
    <button className={uniteClasses(styles.burger, isOpen && styles.burgerOpen)} onClick={onClick}>
      <div />
      <div />
      <div />
    </button>
  );
};
